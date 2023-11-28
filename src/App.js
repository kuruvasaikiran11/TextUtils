import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Input from './Components/Input'

function App() {
  const [mode, setMode] = useState("light");
  const handleModeSwitch = ()=>{
    if(mode === "light"){
      setMode("dark")
    }else{
      setMode("light")
    }
  }
  return (
    <>
      {/* {mode === "dark" ? document.getElementById("root").style.backgroundColor = "black" : null} */}
      <div className={`app-container ${mode === "dark" ? "darkmode" : "lightmode"}`}>
        <Navbar mode={mode} handleModeSwitch={handleModeSwitch}/>
        <div className='container mt-3 mb-5'>
          <Input mode={mode} handleModeSwitch={handleModeSwitch}/>
        </div>
      </div>
    </>
  );
}

export default App;
