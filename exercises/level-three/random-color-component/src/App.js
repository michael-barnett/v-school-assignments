import axios from "axios"
import React from "react"

function App() {
  const [colorButton, setColorButton] = React.useState()
  const [colors, setColors] = React.useState([])

  React.useEffect(() => {
    console.log("Effect ran")
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(res => {
          setColors(res.data.colors[0].hex)
        })
}, [colorButton])

  function handleClick() {
    setColorButton(Math.random())
  }

  return (
    <div className="App">
      <h1 className="colors" style={{backgroundColor:`#${colors}`}}></h1>
      <button onClick={handleClick}>Click for New Color</button>
    </div>
  );
}

export default App;
