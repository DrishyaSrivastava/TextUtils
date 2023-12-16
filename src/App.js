import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import React , {useState} from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import Buttonhook from './Components/Buttonhook';
import { Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {

  const [Mode, setMode] = useState('light'); //whether dark mode is enabeled or not ....
  const  [alert, setalert] = useState(null);

  const showAlert = (message , type) => {
         setalert({
          msg:message,
          type:type
         })

         setTimeout(() => {
          setalert(null);
         },1500);
  }

  const toggleMode = () => {
    if(Mode === 'light')
    {
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark mode has been enabled","success");
        document.title = 'TextUtils-DarkMode';
    }else{
      setMode('light');
      document.body.style.backgroundColor='White';
      showAlert("Light mode has been enabled","sucess");
      document.title = 'TextUtils-LightMode';
    }
  }



  return (
    <>
    <Router>
     <div>
      <Navbar title='TextUtils'  about='About-us' mode={Mode} toggleMode={toggleMode} />
      <Alert   alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<Textarea showAlert={showAlert} heading='Enter your Text Below :-' mode={Mode} />}>
          </Route>
      </Routes>
      </div>
     </div>
     </Router>
     <Buttonhook/>
    </>
  );
}

export default App;
