import './App.css';
import './index.css'
import React, {useState} from 'react'
 
function App() {
 
  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let w = (weight*2.20461); //convert to pounds

  
      let bmi = ((703*w)/ (height * height));
      
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 18.5) 
        {
        setMessage('You are underweight')
        } 
      else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a healthy weight')
      } 
      else {
        setMessage('You are overweight')
      }
    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }
 
  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        
        <div className="input">
        <div className='inputw'>
          <label id="A100">Weight in kg </label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div className='inputh'>
          <label id="A100"> please Enter Height in inch </label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div className='submit' >
          
          <br></br><button className='btn' type='submit'>Submit</button>
          
          <br></br><button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
        </div>
      </form>
    
      <div className='center'>
        <br></br>
        <h3> <marquee  id="A110" width="95%" direction="right" height="60px" scrollamount="7" >Your BMI is: {bmi} </marquee></h3>
         <p><marquee  id="A110" width="95%" direction="left" height="60px" scrollamount="7" >
          !!{message}!!
          </marquee></p>
      </div>
    </div>
  </div>
  );
}
 
export default App;