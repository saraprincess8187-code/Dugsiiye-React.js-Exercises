import { useState } from 'react';
 
function App() {

  // const [count, setCount] = useState(0);
  
  // const increment = () => {
  //     setCount(count + 1);
  //     console.log(count);
  //   }
  // return (
    
  //   <>
  //   <p>You clicked {count} times</p>
  //   <button onClick={increment}>Click me</button>
  //   </>
  // )

  // example of conditional rendering in react
 
  

  // const [name, setName] = useState("");
  // const handleChange = (event) => {
  //   console.log(event.target.value)
  //   setName(event.target.value);
  // }
  //  return (
  //   <>
  //   <input type="text" value={name} onChange={handleChange} />
  //     <p>Hello, {name}</p>
  //   </>
  //  )


  const [isOn, setIsOn] = useState(false);
  const toggleButton = () => {
    setIsOn(!isOn);
  }
  return (
    <>
  <p>The button is {isOn ? 'ON' : 'OFF'}</p>
  <button onClick={toggleButton}>Turn {isOn ? 'OFF' : 'ON'}</button>
  </>
  )

}

export default App;