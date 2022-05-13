import React from 'react';
import Weather from './Weather';
import yetiman2 from "./images/yetiman2.png";

const App = () => {
  return (
    <>
    <div className='mainheading'>
    <div className="myimg"><img src={yetiman2} height='90' width='90'/></div>
    <div className="heading_style"><h1>Yuva Weather App. </h1></div>
    
    </div>
    
    <Weather />
    </>
  )
}

export default App;