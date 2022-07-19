import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink")
  function handleClick(){
    if (color === "pink"){
      setColor("blue")
    } else if (color === "blue"){
      setColor("pink")
    }  
  }

  const [people, setPeople] = useState(
    {
      firstName: "John",
      lastName: "Smith"
    }
  )

  function handleSecondClick(){
    setPeople(people.age = 30);
    console.log(people)
  }
  
  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
      <h1>{color}</h1>
      <button onClick={handleSecondClick}>Click me</button>
      <h1>{people.firstName} {people.lastName}</h1>
    </div>
  );
}

export default App;
