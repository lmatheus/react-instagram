import React, { PureComponent } from 'react';
import Image from './Image';
import ImageModal from './ImageModal';
import images from '../data/images';
import styled from 'styled-components';

const brandLogo =
  'https://instagram.fbog3-1.fna.fbcdn.net/t51.2885-19/s150x150/21042731_263918554120225_2896844540801449984_a.jpg';

const OuterContainer = styled.div`
  margin-top: 77px;
  padding: 4em;
`;

const Header = styled.div`
  display: inline-flex;
  width: 939px;
  margin-left: calc(50% - 939px / 2);
  padding-left: 4em;
  padding-bottom: 4em;
`;

const RightContainer = styled.div`
  padding-left: 1.5em;
  width: 789px;
  font-size: 32px;
  font-weight: 200;
`;

const LeftContainer = styled.div`width: 250px;`;

const InnerContainer = styled.div`
  width: 939px;
  margin-left: calc(50% - 939px / 2);
`;

const Brand = styled.img`border-radius: 100%;`;

class Gallery extends PureComponent {
  state = {
    images,
    selectedImage: {},
    show: false
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

  _renderModal = () => {
    const { show, selectedImage } = this.state;
    return (
      show && (
        <ImageModal close={this._closeModal} selectedImage={selectedImage} />
      )
    );
  };

  render() {
    return (
      <OuterContainer>
        <Header>
          <LeftContainer>
            <Brand src={brandLogo} alt="brand" />
          </LeftContainer>
          <RightContainer>chatedeorigen</RightContainer>
        </Header>
        <InnerContainer>{this._renderThumbnails()}</InnerContainer>
        {this._renderModal()}
      </OuterContainer>
    );
  }
}

export default Gallery;
