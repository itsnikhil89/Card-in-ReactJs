import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Msg from './msg.jsx'
import ProductTab from './productTab.jsx'
function App() {
  

  return (
  <>  
      <Msg user="Nikhil" clr="purple"></Msg>
     <ProductTab></ProductTab>
    
    
  </>  
  );
}

export default App
