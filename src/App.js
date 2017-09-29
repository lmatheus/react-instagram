import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Gallery from './components/Gallery';

const AppContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  width: 100%;
  padding: 0;
  margin: 0;
  background: #fafafa;
  display: table;
`;

const App = () => (
  <AppContainer>
    <Header />
    <Gallery />
  </AppContainer>
);

export default App;
