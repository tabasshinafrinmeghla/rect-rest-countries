import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadeCountries></LoadeCountries>
    </div>
  );
}

function LoadeCountries(){
  // declaring state to save loaded data
  const [countries,setCountries] = useState ([]);
  // useEffect
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then(data=>setCountries(data))
  }
   ,[])
  return(
    <div>
      <h1>hello every one</h1>
      <h3>all countries: {countries.length} </h3>
      {
        countries.map (countrie=> <LoadeCountries name={countrie.name} ></LoadeCountries>)
      }
    </div> 
  )
}

export default App;
