import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const TopAnecdote  = ({topanecdote, toppoints}) => {
  if (toppoints > 0){
    return (
      <div>
        <h3>Anecdote with most votes</h3>
        {topanecdote}<br></br>
        has {toppoints} votes
      </div>
    )
  }

  return (
    <div>
        <h3>Anecdote with most votes</h3>
    </div>    
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0))

  const changeAnecdote = (chosen) => {
    setSelected(chosen);
  }

  const voteAnecdote = (votenum) => {
    const temp = [...points]
    temp[votenum] += 1
    setPoints([...temp])
  }

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <div>{props.anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={() => voteAnecdote(selected)}>vote</button>
      <button onClick={() => changeAnecdote(Math.floor(Math.random()*props.anecdotes.length))}>next anecdote</button>
      <TopAnecdote topanecdote={props.anecdotes[points.indexOf(Math.max(...points))]} toppoints={Math.max(...points)} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)