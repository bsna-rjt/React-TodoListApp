import React from 'react';
import './App.css';

const App = () => {
  const arr=[1,2,3,4,5];
  return (
    <div className='App'>

      {/* {arr.map((num)=>(
      <div>{num} ,</div>
    ))} */}

    {/* using filter to display all numbers in an array except 3 */}
    {arr.filter((num)=>(
      num!=3
    ))}
    </div>
  )
}

export default App