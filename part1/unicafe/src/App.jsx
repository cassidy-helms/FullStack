import { useState } from 'react'

const Display = ({text}) => <h1>{text}</h1>

const Button = ({name, handleClick}) => <button onClick={handleClick}>{name}</button>

const Statistics = ({good, neutral, bad}) => {
  if(good + neutral + bad === 0) return <p>No feedback given</p>
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={good + neutral + bad} />
        <Statistic text="average" value={(good + neutral + bad) / 3} />
        <Statistic text="positive" value={good / (good + neutral + bad) * 100 + "%"} />
      </tbody>
    </table>
  )
}

const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display text="Give Feedback" />
      <Button name="good" handleClick={() => setGood(good + 1)}/>
      <Button name="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button name="bad" handleClick={() => setBad(bad + 1)} />
      <Display text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
