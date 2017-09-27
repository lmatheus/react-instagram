import React, { PureComponent } from 'react';
import closeIconImage from '../images/close-icon.png';

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
    });
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
    const {
      container,
      content,
      backdrop,
      left,
      right,
      image,
      closeIcon,
      header,
      mainPicture,
      title,
      description
    } = styles;
    return (
      <div style={container}>
        <div style={{ ...content, top, opacity }}>
          <div style={left}>
            <img id="image" style={image} src={url} alt={url} />
          </div>
          <div style={right}>
            <div style={header}>
              <img style={mainPicture} src={brandLogo} alt="brand-logo" />
              <p style={title}>chatedeorigen</p>
            </div>
            <div style={description}>
              <strong>chatedeorigen</strong> Te esperamos HOY de 3 a 8 en el
              increíble Showroom privado de @veranosuite compartiendo con otras
              increíbles marcas, para una tarde shopping de como ninguna! . ✔️
              Estaremos al lado del Parque el Virrey.
            </div>
          </div>
        </div>
        <div onClick={() => this._close()} style={backdrop} />
        <img
          onClick={() => this._close()}
          style={closeIcon}
          src={closeIconImage}
          alt="close"
        />
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh'
  },
  content: {
    display: 'inline-flex',
    position: 'absolute',
    width: 935,
    maxHeight: '100%',
    left: 'calc(50% - 939px / 2)',
    background: 'white',
    zIndex: 9999
  },
  left: {
    width: '65%',
    background: 'black'
  },
  right: {
    width: '35%',
    padding: '1.5em'
  },
  image: {
    width: '100%'
  },
  closeIcon: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: `1em`,
    right: `2em`,
    cursor: 'pointer'
  },
  backdrop: {
    width: '100vw',
    height: '100vh',
    background: 'black',
    opacity: 0.75
  },
  header: {
    display: 'inline-flex',
    width: '100%',
    height: '4em',
    borderBottom: '1px solid #efefef'
  },
  mainPicture: {
    borderRadius: '100%',
    height: 45
  },
  title: {
    marginLeft: '1em'
  },
  description: {
    padding: '1em 0',
    overflowY: 'scroll'
  }
};

export default ImageModal;
