import {React} from 'react';
import { useState } from 'react'
import { Home } from './components/Home/Home';

function App() {
  const [data1,setData1] = useState([]);
  const fetchData = async () => {
  

    const response = fetch('http://localhost:3001/users')
    .then((res) => res.json())
    .then((data) => setData1(data))
    console.log(data1)
    
  }

  return (
    <div className="bg-[#e6fff2 0%]  w-full h-[1000px]">
      <Home/>
    </div>
  );
}

export default App;
