import React from 'react';
//import Button from './components/Button';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Write from './pages/Write';
import Option from './pages/Options';

function App(){
 
  return(
    <div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/write" element={<Write/>} /> 
        <Route path="/option" element={<Option/>} />
      </Routes>
    </div>
  );
}
export default App
