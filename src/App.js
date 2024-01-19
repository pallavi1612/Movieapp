// App.js

import {  Routes , Route } from 'react-router-dom'
import SingleMovie from './SingleMovie';
import Error from './Error';
import Home from './Home';
import './App.css';


const App = () => {
  return (
    
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="movie/:id" element={<SingleMovie/>} />
     </Routes>
   
  )
};

export default App