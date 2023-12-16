import React, { useState } from "react";

export default function Textarea(props) {

    const handleonChange = (event) => {
        setText(event.target.value);
      }
      
    const handleUpcase = () => {
      // console.log("uppercase button was clicked");
        let m = text.toUpperCase();
        setText(m);
        props.showAlert("Changed to Uppercase","success");
    }


    const handlelocase = () => {
      //console.log("lowercase button was clicked");
      let g = text.toLowerCase();
      setText(g);
      props.showAlert("Changed to Lowercase","success");
    }

    const handleclcase = () => {
      //console.log("lowercase button was clicked");
      let g = "";
      setText(g);
      props.showAlert("Text has been cleared","success");
    }

    const handleCopy = () => {
      var text = document.getElementById("myform");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied to clipboard","success");
    }

    const handleExtraSpaces = () => {
      let newtext = text.split(/[  ]+/);
      setText(newtext.join(" "))
      props.showAlert("Extra Space Removed","success");
    }

    //commit


    const handlecapitalizedcase = () => {
      console.log("capitalized button was clicked");
      let m;
      let g = text.split(" ");
      for(var i=0;i<g.length;i++)
      {
        g[i]=g[i].charAt(0).toUpperCase() + g[i].substring(1);
        m = g.join(" ");
      }
      setText(m);
      props.showAlert("Text has been capitalized","success");
    }






  const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  value={text}  onChange={handleonChange} style={{backgroundColor: props.mode ==='dark'
        ?'#003333':'white', color:props.mode ==='dark'?'white':'black'}}  id="myform" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpcase}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handlelocase}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleclcase}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handlecapitalizedcase}>Capitalized Case</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <b>you can read your text in :- </b>
      <p>{0.008 * text.split(" ").length} minutes</p>
      <h2>Your text Preview : </h2>
      <p>{text.length > 0 ? text : "Enter Something in the above textbox to preview it here." }</p>
    </div>
    </>
  );
}
