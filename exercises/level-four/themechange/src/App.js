import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import {ThemeContextProvider} from "./themeContext"
import React, {useState} from "react"

function App() {

  return (
    <ThemeContextProvider>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
