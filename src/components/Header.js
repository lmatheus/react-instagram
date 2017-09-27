import React from 'react';
import instagramLogo from '../images/instagram-1.svg';

const Header = () => {
  const { container, content, logo } = styles;
  return (
    <div style={container}>
      <div style={content}>
        <img style={logo} src={instagramLogo} alt="logo" />
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: 77,
    width: '100vw',
    background: '#fff',
    borderBottom: '1px solid rgba(0,0,0,.0975)',
    position: 'fixed',
    top: 0,
    left: 0
  },
  content: {
    padding: '26px 40px',
    marginLeft: 'calc(50% - 939px / 2)'
  },
  logo: {
    height: 32
  }
};

export default Header;
