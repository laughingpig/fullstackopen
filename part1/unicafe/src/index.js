import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({onclick, text}) => <button onClick={onclick}>{text}</button>
  const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>
  const Statistics = ({good, bad, neutral}) => {
    if (good+bad+neutral === 0) {
      return (
        <div>No feedback given</div>
      )
    }
    
    return(
    <div>
      <table>
        <tbody>
          <Statistic text="good" value ={good} />
          <Statistic text="neutral" value ={neutral} />
          <Statistic text="bad" value ={bad} />
          <Statistic text="all" value ={good+neutral+bad} />
          <Statistic text="average" value ={((good*1)+(bad*-1))/(good+neutral+bad)} />
          <Statistic text="positive" value ={good/(good+neutral+bad)*100 +'%'} />
        </tbody>
      </table>
    </div>
    )
  }

  const updateGood = newValue => {
    setGood(newValue);
  }

  const updateNeutral = newValue => {
    setNeutral(newValue);
  }
  
  const updateBad = newValue => {
    setBad(newValue);
  }  

  return (
    <div>
      <h3>give feedback</h3>
      <Button onclick={() => updateGood(good+1)} text="good" />
      <Button onclick={() => updateNeutral(neutral+1)} text="neutral" />
      <Button onclick={() => updateBad(bad+1)} text="bad" />
      <br />
      <h3>statistics</h3>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)