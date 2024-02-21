import { useState } from 'react'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const MaxAnecdote = ({anecdotes}) => {
  const max = anecdotes.reduce((max, anecdote) => max.votes > anecdote.votes ? max : anecdote)

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{max.message}</p>
      <p>has {max.votes} votes</p>
    </div>
  )
}

const Anecdote = ({anecdotes, selected}) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].message}</p>
      <p>has {anecdotes[selected].votes} votes</p>
    </div>
  )
}

const App = () => {
  const messages = [
    {
      message: 'If it hurts, do it more often.',
      votes: 0
    },
    {
      message: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      message: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      message: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      message: 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      message: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    },
    {
      message: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: 0
    },
    {
      message: 'The only way to go fast, is to go well.',
      votes: 0
    }
  ]

  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState(messages)

  const handleVote = () => {
    const copy = [...anecdotes]
    copy[selected].votes += 1
    setAnecdotes(copy)
  }

  return (
    <div>
      <Anecdote anecdotes={anecdotes} selected={selected} />
      <Button text="vote" handleClick={handleVote} />
      <Button text="next anecdote" handleClick = {() => setSelected(Math.floor(Math.random() * anecdotes.length))} />
      <MaxAnecdote anecdotes={anecdotes} />
    </div>
  )
}

export default App
