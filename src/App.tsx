import React from 'react';
//import Button from './components/Button';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Write from './pages/Write';

function App(){
 
  return(
    <div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/write" element={<Write/>} /> 
      </Routes>
    </div>
  );
}
export default App
