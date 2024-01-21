import { useState } from 'react'


const StatisticLine = (props) => {
  if (props.text === "Positive") {
    return (
      <p>{props.text}: {props.value} %</p>
    )
  }
  else {
    return (
      <p>{props.text}: {props.value}</p>
    )
  }
}

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const calculateAvg = () => {
    return (good - bad) / (good + neutral + bad);
  }
  const positivePercentage = () => {
    return ((good) / (good + neutral + bad)) * 100;
  }
  return (
    <div>
      <h2>Statistics</h2>
      {
        !(good !== 0 || neutral !== 0 || bad !== 0) && (
          <div>
            <p>No Feedback Given</p>
          </div>)
      }
      {
        (good !== 0 || neutral !== 0 || bad !== 0) && (
          <div>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Total" value={good + neutral + bad} />
            <StatisticLine text="Average" value={calculateAvg()} />
            <StatisticLine text="Positive" value={positivePercentage()} />
          </div>)
      }
    </div>
  );
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(g => g + 1)}>Good</button>
      <button onClick={() => setNeutral(n => n + 1)}>Neutral</button>
      <button onClick={() => setBad(b => b + 1)}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App