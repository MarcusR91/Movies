import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [myDate, MyDateUpdate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() =>{
      MyDateUpdate(new Date())
    },1000)
    return () => clearInterval(intervalId)
  })

  return (
    <div>
      <h3>Example React</h3>
      <input/>
      <div> {myDate.toString()}</div>
    </div>
  );
}

export default App;
