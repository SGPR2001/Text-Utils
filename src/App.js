import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(()=>{setAlert(null)},1500)
  }
  const toggleMode=()=>{
    if(mode === 'light'){
         setMode('dark')
         document.body.style.backgroundColor='#042743'
         showAlert("Dark mode has been enabled","success")
         document.title="Text Utils-Dark Mode"
        //  setInterval(()=>{
        //   document.title="TextUtils is Amazing Mode"
        //  },2000)
        //  setInterval(()=>{
        //   document.title="Install TextUtils now"
        //  },1500)

    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title="Text Utils-Light Mode"
    }
  }
  return (
    <>
     <Router>
  {/* <Navbar/> */}
  {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
  
  <Navbar title="TextUtils" mode={mode} aboutText="About" toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  
      
          
  
  <Switch>
          
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
         
          <Route exact path="/">
          <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
          </Route>
         
          
  </Switch>       
          
    
         
   
  </div>
  
  </Router>
  
    </>
  );
}

export default App;
