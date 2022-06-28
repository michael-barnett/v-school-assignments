import React from 'react';
import Bloglist from './Bloglist';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Bloglist />
      <Footer />
    </div>
  );
}

export default App;
