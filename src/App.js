// import Home from "./component/Home"
import Homepage from "./component/Homepage";
import Editorpage from "./component/Editorpage";
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="top-center"></Toaster>
        <Routes>
          <Route path = "/" element = {<Homepage/>}/>
          <Route path = "/editor/:roomId" element = {<Editorpage/>}/>
        </Routes>
    </>
  );
}

export default App; 