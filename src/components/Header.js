import React from 'react';
import instagramLogo from '../images/instagram-1.svg';
import styled from 'styled-components';

const OuterContainer = styled.div`
  height: 77px;
  width: 100vw;
  background: #fff;
  borderbottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: fixed;
  top: 0;
  left: 0;
`;

const InnerContainer = styled.div`
  padding: 26px 40px;
  margin-left: calc(50% - 939px / 2);
`;

const Branch = styled.img`height: 32px;`;

const Header = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <Branch src={instagramLogo} alt="logo" />
      </InnerContainer>
    </OuterContainer>
  );
};

export default Header;
