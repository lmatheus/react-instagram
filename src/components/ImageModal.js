import React, { PureComponent } from 'react';
import closeIconImage from '../images/close-icon.png';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  display: inline-flex;
  position: absolute;
  width: 935px;
  max-height: 100%;
  left: calc(50% - 939px / 2);
  background: white;
  z-index: 9999;
  top: ${({ top }) => top};
  opacity: ${({ opacity }) => opacity};
`;

const LeftContainer = styled.div`
  width: 65%;
  background: black;
`;

const RightContainer = styled.div`
  width: 35%;
  padding: 1.5em;
`;

const CloseIcon = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 1em;
  right: 2em;
  cursor: pointer;
`;

const Header = styled.div`
  display: inline-flex;
  width: 100%;
  height: 4em;
  borderbottom: 1px solid #efefef;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.75;
`;

const Brand = styled.img`
  border-radius: 100%;
  height: 45px;
`;

const Title = styled.p`margin-left: 1em;`;

const Description = styled.div`
  padding: 1em 0;
  overflow-y: scroll;
`;

class ImageModal extends PureComponent {
  state = {
    opacity: 0,
    brandLogo:
      'https://instagram.fbog3-1.fna.fbcdn.net/t51.2885-19/s150x150/21042731_263918554120225_2896844540801449984_a.jpg'
  };

  componentDidMount() {
    this.setState({ ...this.props.selectedImage });
    setTimeout(() => {
      const { height } = document.getElementById('image');
      const top = `calc(50% - ${height}px / 2)`;
      const opacity = 1;
      document.body.style.overflow = 'hidden';
      this.setState({ top, opacity });
    }, 50);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  _close() {
    const { close } = this.props;
    close();
  }

  render() {
    const { url, top, opacity, brandLogo } = this.state;
    return (
      <Container>
        <Content top={top} opacity={opacity}>
          <LeftContainer>
            <img id="image" width="100%" src={url} alt={url} />
          </LeftContainer>
          <RightContainer>
            <Header>
              <Brand src={brandLogo} alt="brand-logo" />
              <Title>chatedeorigen</Title>
            </Header>
            <Description>
              <strong>chatedeorigen</strong> Te esperamos HOY de 3 a 8 en el
              increíble Showroom privado de @veranosuite compartiendo con otras
              increíbles marcas, para una tarde shopping de como ninguna! . ✔️
              Estaremos al lado del Parque el Virrey.
            </Description>
          </RightContainer>
        </Content>
        <Backdrop onClick={() => this._close()} />
        <CloseIcon
          onClick={() => this._close()}
          src={closeIconImage}
          alt="close"
        />
      </Container>
    );
  }
}

export default ImageModal;
