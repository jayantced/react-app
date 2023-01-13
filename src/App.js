import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      showAlert('success', 'Dark has been enabled');
    }
    else{
      setMode('light');
      showAlert('success', 'Light mode has been enabled');
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (type, message)=> {
    setAlert({
      type : type,
      msg : message
    })
    setTimeout(()=> {
      setAlert(null);
    }, 2000)
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/* <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"/>} />
        <Route exact path="/about" element={<About />} />
    </Routes>
    </div>
    </Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below"/>
    </div>
    </> 
  );
}

export default App;
