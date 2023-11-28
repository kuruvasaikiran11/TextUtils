import React, {useState} from "react";
import Preview from './Preview'
import TextSummary from './TextSummary'

export default function Input(props) {

    const [input, setInput] = useState("")
    const handleChange=(e)=>{
        // console.log(e.target.value);
        setInput(e.target.value);
    }
    
  return (
    <>
      <div className="container">
        <label htmlFor="exampleFormControlTextarea1" className={`form-label `} style={{color : props.mode==="dark" ? "white" : 'black', width:"100%"}}>
          <h3><b>Try TextUtils - Word counter, characters count, Copy text...</b></h3>
        </label>
        <textarea
          className={`form-control bg-${props.mode}`} style={{color : props.mode==="dark" ? "white" : 'black' }}
          id="exampleFormControlTextarea1"
          rows="7"
          placeholder="Enter your text here"
          value={input}
          onChange={handleChange}
        ></textarea>
      </div>
      <TextSummary input={input} mode={props.mode} handleModeSwitch={props.handleModeSwitch}/>
      <Preview input={input} setInput={setInput} mode={props.mode} handleModeSwitch={props.handleModeSwitch}/>
    </>
  );
}
