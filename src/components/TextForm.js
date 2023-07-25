import React,{useState}from 'react'



export default function TextForm(props) {
    const [text,setText]=useState("Enter text here")

    const handleUpClick=()=>{
        // console.log("uppercase was clicked")
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick=()=>{
        // console.log("uppercase was clicked")
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const handleUpchange=(event)=>{
        // console.log("Onchange") 
        setText(event.target.value)
    }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
     
       <div className="mb-3">
           <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}onChange={handleUpchange} value={text} id="myBox"  rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
            Convert to Uppercase
        </button>
        <button className="btn btn-primary mx -2 my-1" onClick={handleLowClick}>
            Convert to Lowercase
        </button>
    </div>
    <div className='container my-4' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in text box above to preview it here"}</p>
    </div>
    </>
  )
}
