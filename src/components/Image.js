import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 293px;
  height: 293px;
  overflow: hidden;
  float: left;
  margin: 10px;
  cursor: pointer;
`;

const Picture = styled.img`height: 100%;`;

const Image = ({ url }) => (
  <ImageContainer>
    <Picture src={url} alt={url} />
  </ImageContainer>
);

export default Image;
