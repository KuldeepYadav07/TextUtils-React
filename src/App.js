
import React, {useState}from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from 'react-router-dom';
// import About from './components/About';

function App() {
  const[mode , setMode] = useState('light');
  const[alert , setAlert] = useState(null);

  const showAlert =(message , type)=>{
      setAlert({
        msg :message,
        type :type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background='#05263d';
      showAlert("Dark mode has been enabled " ,"success");
    }else{
      setMode('light')
      document.body.style.background='white';
      showAlert("Light mode has been enabled " ,"success");
    }
  }
   
  return (
       <>
          {/* <Router> */}
            {/* <Navbar title="TextUtils" aboutText="About"/> */}
            <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
            <Alert alert= {alert}/>
            <div className ="container my-5" > 
            {/* <Switch>
                    <Route exact path="/about">
                    <About/>
                    </Route>
                    <Route exact path="/">
                    <TextForm heading="Enter the text for analyze below" showAlert={showAlert} mode = {mode} />
                    </Route>
            </Switch>  */}
            <TextForm heading="Enter the text for analyze below" showAlert={showAlert} mode = {mode} />
            </div>
          {/* </Router> */}
         </>
  );
}

export default App;
