import React from "react";

export default function Preview(props) {
  const handleClearClick = (e) => {
    e.preventDefault();
    props.setInput("");
  };
  const handleUpperCaseClick = (e) => {
    e.preventDefault();
    const updatedInput = props.input.toUpperCase();
    props.setInput(updatedInput);
  };
  const handleLowerCaseClick = (e) => {
    e.preventDefault();
    const updatedInput = props.input.toLowerCase();
    props.setInput(updatedInput);
  };
  const handleCopyClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(props.input);
    // setInput(updatedInput)
  };
  return (
    <>
      <div className="container">
        <div className={`card bg-${props.mode}`} style={{color : props.mode==="dark" ? "white" : 'black' }}>
          <div className="card-header">Preview</div>
          <div className="card-body">
            {/* <h5 className="card-title"></h5> */}
            <p className="card-text p-5">
              {props.input.length === 0
                ? "Your Input will be displayed here"
                : props.input}
            </p>
          </div>
        </div>
        <a
          href="/"
          className="btn btn-primary m-2"
          onClick={handleUpperCaseClick}
        >
          UpperCase
        </a>
        <a
          href="/"
          className="btn btn-primary m-2"
          onClick={handleLowerCaseClick}
        >
          LowerCase
        </a>
        <a href="/" className="btn btn-primary m-2" onClick={handleCopyClick}>
          Copy Text
        </a>
        <a href="/" className="btn btn-primary m-2" onClick={handleClearClick}>
          Clear
        </a>
      </div>
    </>
  );
}
