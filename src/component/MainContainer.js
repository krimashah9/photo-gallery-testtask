import React from "react";
import {Button, Tab} from "semantic-ui-react";
import {withRouter} from "react-router-dom"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addToFavoriteSuccess, getImages} from "../actions/images";
import MyCollection from "./MyCollection";
import InfoModal from "./InfoModal";
import ImageList from "./ImagesList";
import "./style.css";

class Images extends React.Component {
  state = {
    activePage: 1,
    imagePerPage: 10,
    openInfo: false,
    favoriteImage: "",
    openImage: false,
    alreadyExist: false,
    activeIndex: 0
  }

  componentDidMount() {
    this.props.getImages();
    this.props.history.push("/gallery")
  }

  handlePaginationChange = (e, {activePage}) => {
    this.setState({activePage})
  }

  FavoriteClickHandler = (image) => {
    const {openInfo} = this.state;
    const {favoriteList} = this.props;
    const favoriteImg = favoriteList.length && favoriteList.filter(img => img.id === image.id)
    if (favoriteImg.length > 0) {
      this.toggleModal("alreadyExist");
    }
    else {
      this.setState({
        favoriteImage: image.thumbnailUrl
      })
      this.props.addToFavoriteSuccess(image);
      this.toggleModal("openInfo");
    }
  }

  toggleModal = (open) => {
    this.setState({
      [open]: !this.state[open]
    })
  }

  imageClick = (image) => {
    const {openImage} = this.state
    this.setState({
      activeImage: image
    })
    this.toggleModal("openImage")
  }

  noOfDropdownChangeHandler = (e, {value}) => {
    this.setState({
      imagePerPage: value
    })
  }

  tabChangeHandler = (e, {activeIndex}) => {
    this.setState({
      activeIndex: activeIndex
    })
    if (activeIndex === 0)
      this.props.history.push("/gallery")
    else if (activeIndex === 1)
      this.props.history.push("/my-collections")

  }

  render() {
    const {allImages, favoriteList} = this.props;
    const {activePage, imagePerPage, openInfo, favoriteImage, openImage, activeImage, alreadyExist, activeIndex} = this.state;
    const indexOfLast = activePage * imagePerPage;
    const indexOfFirst = indexOfLast - imagePerPage;
    const currentImages = allImages && allImages.length && allImages.slice(indexOfFirst, indexOfLast);
    const panes = [
      {
        menuItem: 'Gallery',
        render: () => currentImages && currentImages.length &&
        <ImageList
          currentImages={currentImages}
          allImages={allImages}
          activePage={activePage}
          openImage={openImage}
          imagePerPage={imagePerPage}
          activeImage={activeImage}
          imageClick={this.imageClick}
          toggleModal={this.toggleModal}
          handlePaginationChange={this.handlePaginationChange}
          FavoriteClickHandler={this.FavoriteClickHandler}
          noOfDropdownChangeHandler={this.noOfDropdownChangeHandler}
        />,
      },
      {
        menuItem: 'My Collections',
        render: () => <MyCollection favoriteList={favoriteList} />,
      }
    ]
    return (<div>
        <InfoModal
          toggleModal={() => this.toggleModal("openInfo")}
          open={openInfo}
          header={favoriteImage}
          content={<p>Added to your favorite list</p>}
          size="mini"
          actionButton={<Button primary onClick={() => this.toggleModal("openInfo")}>Ok</Button>}
        />
        <InfoModal
          toggleModal={() => this.toggleModal("alreadyExist")}
          open={alreadyExist}
          header="Already Exist"
          content={<p>Image is already exists in your collection</p>}
          size="mini"
          actionButton={<Button primary onClick={() => this.toggleModal("alreadyExist")}>Ok</Button>}
        />
        <Tab
          className="tab-wrap"
          menu={{secondary: true, pointing: true}}
          panes={panes}
          activeIndex={activeIndex}
          onTabChange={this.tabChangeHandler}
        />
      </div>
    );
  }
}
function mapStateToProps({image}) {
  return {
    allImages: image.images,
    favoriteList: image.favoriteList
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getImages, addToFavoriteSuccess
  }, dispatch)
}
export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(Images));
