import React, { PureComponent } from 'react';
import Image from './Image';
import ImageModal from './ImageModal';
import images from '../data/images';

class Gallery extends PureComponent {
  state = {
    images,
    selectedImage: {},
    show: false,
    brandLogo:
      'https://instagram.fbog3-1.fna.fbcdn.net/t51.2885-19/s150x150/21042731_263918554120225_2896844540801449984_a.jpg'
  };

  _renderThumbnails = () => {
    const { images } = this.state;
    return images.map(({ url }, index) => (
      <div key={index} onClick={() => this._showModal(index)}>
        <Image url={url} />
      </div>
    ));
  };

  _showModal = index => {
    const selectedImage = images[index];
    this.setState({ show: true, selectedImage });
  };

  _closeModal = () => {
    const selectedImage = {};
    this.setState({ show: false, selectedImage });
  };

  render() {
    const { show, selectedImage, brandLogo } = this.state;
    const {
      outerContainer,
      header,
      left,
      right,
      mainPicture,
      innerContainer
    } = styles;
    return (
      <div style={{ ...outerContainer }}>
        <div style={header}>
          <div style={left}>
            <img style={mainPicture} src={brandLogo} alt="brand" />
          </div>
          <div style={right}>chatedeorigen</div>
        </div>
        <div style={innerContainer}>{this._renderThumbnails()}</div>
        {show && (
          <ImageModal close={this._closeModal} selectedImage={selectedImage} />
        )}
      </div>
    );
  }
}

const styles = {
  outerContainer: {
    marginTop: 77,
    padding: '4em'
  },
  innerContainer: {
    width: 939,
    marginLeft: 'calc(50% - 939px / 2)'
  },
  header: {
    display: 'inline-flex',
    width: 939,
    marginLeft: 'calc(50% - 939px / 2)',
    paddingLeft: '4em',
    paddingBottom: '4em'
  },
  left: {
    width: 250
  },
  right: {
    paddingLeft: '1.5em',
    width: 789,
    fontSize: 32,
    fontWeight: 200
  },
  profileInfo: {
    height: '100%',
    width: 400
  },
  mainPicture: {
    borderRadius: '100%'
  }
};

export default Gallery;
