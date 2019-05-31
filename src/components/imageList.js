import ImageItem from "./imageItem";
import React from "react";
import "./imageListCss.css";

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageItem key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
