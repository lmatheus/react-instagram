import React, { PureComponent } from 'react';

class Image extends PureComponent {
  state = {
    url: this.props.url
  };

  render() {
    const { imageContainer, image } = styles;
    const { url } = this.state;
    return (
      <div style={imageContainer}>
        <img style={image} src={url} alt={url} />
      </div>
    );
  }
}

const styles = {
  imageContainer: {
    width: 293,
    height: 293,
    overflow: 'hidden',
    float: 'left',
    margin: 10,
    cursor: 'pointer'
  },
  image: {
    height: '100%'
  }
};

export default Image;
