import React from "react";
import {Icon, Image, Pagination, Dropdown} from "semantic-ui-react";
import ImageModal from "./InfoModal";

const ImageList = (props) => {
  const {
    currentImages,
    allImages,
    activePage,
    handlePaginationChange,
    FavoriteClickHandler,
    openImage,
    activeImage,
    toggleModal,
    imageClick,
    imagePerPage,
    noOfDropdownChangeHandler
  } = props
  const options = [
    {key: '10', text: '10', value: '10'},
    {key: '15', text: '15', value: '15'},
    {key: '20', text: '20', value: '20'},
    {key: '50', text: '50', value: '50'},
    {key: '100', text: '100', value: '100'},
  ]
  return (<div>
    <div className="header-wrap">
      <h4>No of images: </h4>
      <Dropdown
        fluid
        selection
        options={options}
        defaultValue={options[0].value}
        onChange={noOfDropdownChangeHandler}
      />
    </div>
    <div className="image-wrap">
      {currentImages.map((image) => (
        <>
        <Image src={image.thumbnailUrl} onClick={() => imageClick(image.thumbnailUrl)}/>
        <Icon name="favorite" onClick={() => FavoriteClickHandler(image)}/>
        </>
      ))}
      <div className="pagination-wrap">
        <Pagination
          activePage={activePage}
          onPageChange={handlePaginationChange}
          totalPages={allImages.length / imagePerPage}
        />
      </div>
      <ImageModal
        header="Image"
        toggleModal={() => toggleModal("openImage")}
        open={openImage}
        content={<Image src={activeImage}/>}
        size="mini"
      />
    </div>
  </div>)
}
export default ImageList