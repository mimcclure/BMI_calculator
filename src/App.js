import React, {useState} from 'react'

import './index.css'

function App() {

  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let imgSrc;
  
  let calcBmi = (event) =>{
    //prevent submission (form from presenting to the server)
    event.preventDefault()

    if (weight === 0 || height === 0){
      alert('Please enter a valid weight and height')
    }
    else{
      let bmi = (weight / height / height) * 10000
      setBmi(bmi.toFixed(1))

      //Logic for message (if there are no values entered the BMI and msg logic won't appear be calculated)

      if (bmi < 18.5){
        setMessage('You are underweight')
      }
      else if (bmi >= 18.5 && bmi < 25){
        setMessage('You are average weight')
      }
      else if (bmi >= 25 && bmi < 30){
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
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)}/>
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>

        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default App;
