
import React, {useState}from 'react'

export default function TextForm(props) {
const handleUpclick = ()=>{
  //console.log("Upperclick was click " +text);
  let newText= text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to Uppercase !!" , "success");
}
const handleLwclick = ()=>{
  //console.log("Upperclick was click " +text);
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lowercase !!" , "success")
}
const handleinverseclick = () => {
  let newtext = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newtext += text[i];
  }
  setText(newtext);
  props.showAlert("Converted to ReverseOrder !!" , "success")
}
const handleClearSpaceclick = () => {
  let newtext = text.split(/[ ]+/);
  setText(newtext.join(" "));
  props.showAlert("Extra space removed!!" , "success")
}
const handleClearclick = ()=>{
  let newText= '';
  setText(newText);
  props.showAlert("Text cleared!!" , "success")
}

const handleOnChange = (event)=>{
  //console.log("Upperclick was click ");
  setText(event.target.value);
}

  const[text , setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#05263d'}}>
        <h1>{props.heading} </h1>
    <div className="mb-3 ">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="TextBox"  style={{background: props.mode==='dark'?'grey':'white', color:  props.mode==='dark'?'white':'#05263d'}}rows="5" placeholder="Enter text here"></textarea>
    </div>
    <div>
    <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase </button>
    <button className="btn btn-primary mx-2" onClick={handleLwclick}>Convert to Uppercase </button>
    <button className="btn btn-primary mx-2" onClick={handleinverseclick}>Reverse text </button>
    <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear text </button>
    <button className="btn btn-primary mx-2" onClick={handleClearSpaceclick}>Remove Extra spaces </button>
    </div>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#05263d'}}>
      <h2 >Your text summry </h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minits read</p>
      <h2>Preview</h2>
      <p>{text.length >0 ?text:"Enter somthing in textbox above to preview it here "}</p>
    </div>
    </>
  )
}
