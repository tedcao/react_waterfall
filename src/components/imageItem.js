import React from "react";

class ImageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 }; //span used to contraol the row height (grid-row-end)
    this.imageRef = React.createRef(); //DOM select function in react
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans); //can not retrive the height imform from here because image is not loaded yet.
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageItem;
