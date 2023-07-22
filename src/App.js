import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(( )=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ( )=> {
   if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '  #13284F  ';
    showAlert("Dark mode has been enabled","success");
   }
   else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
   }
  }

  return (
    <Router>
    
    <Navbar title="textutils"home="home" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    <Route path="/" element={<Textarea  showAlert={showAlert}heading="Try TextUtils - Word Counter,Character Counter, Remove Extra Spaces"  mode={mode}/>}/>
    <Route path="/about" element={<About mode={mode}/>}/>
    </Routes>
    </div> </Router>
  );
}

export default App;
