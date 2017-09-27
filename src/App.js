import React, { PureComponent } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';

class App extends PureComponent {
  render() {
    return (
      <div style={styles}>
        <Header />
        <Gallery />
      </div>
    );
  }
}

const styles = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  width: '100%',
  padding: 0,
  margin: 0
};

export default App;
