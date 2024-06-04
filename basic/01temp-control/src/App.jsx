import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Data_set-1/Data'
import LoginForm from './Forms/LoginForm'
import LoginForm2 from './Forms/LoginForm2'

function App() {
  // const [temperature, setTemperature] = useState(0)
  // let temperatureClimate;
  // if(temperature < 20){
  //   temperatureClimate = 'Cold Climate'
  // }else if(temperature >= 20 && temperature <=30){
  //   temperatureClimate = 'Normal climate'
  // }
  // else{
  //   temperatureClimate = 'Hot climate';
  // }
  return (
    <>
      {/* <h1>Temperature Control App - {temperature}</h1>
      <button onClick={()=>setTemperature(temperature + 1)}>+</button>
      <button onClick={()=> setTemperature(temperature - 1)}>-</button>
      <h3>{temperatureClimate}</h3> */}
      {/* <Data /> */}
      {/* <LoginForm /> */}
      <LoginForm2 />
    </>
  )
}

export default App
