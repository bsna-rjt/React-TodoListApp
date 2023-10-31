import React from 'react';
import './App.css';

const App = () => {
  const arr=[1,2,3,4,5];
  return (
    <div className='App'>{arr.map((num)=>(
      <div>{num} ,</div>
    ))}</div>
  )
}

export default App