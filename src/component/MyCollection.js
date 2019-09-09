import React from "react";
import {Image} from "semantic-ui-react";

const MyCollection = (props) => {
  const {favoriteList} = props
  return (<div>
    <h2>My Collection</h2>
    <div className="image-wrap">
      {favoriteList.length ? favoriteList.map((image) => (
        <div>
          <Image src={image.thumbnailUrl}/>
        </div>
      )) : <p className="no-collection">Collection not set yet</p>}
    </div>
  </div>)
}
export default MyCollection