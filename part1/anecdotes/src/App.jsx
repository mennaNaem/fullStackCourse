import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 1, 1: 3, 2: 4, 3: 2, 4: 3, 5: 6,6: 7, 7:9 });

  const handleNextAnecdote = () => {
    if (selected < 7) {
      setSelected(selected + 1);
    }
  };
  const handlePreviousAnecdote = () => {
    if (selected > 0) {
      setSelected(selected - 1);
    }
  };

  const handleVote = () => {
    const updatedPoints = { ...points };
    updatedPoints[selected] += 1;
    setPoints(updatedPoints);
  };

  const maxVotes = () => {
    let maxIndex = 0;
    let maxVotes = 0;

    for (const index in points) {
      if (points[index] > maxVotes) {
        maxVotes = points[index];
        maxIndex = index;
      }
    }

    return maxIndex;
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br />
      <p>has {points[selected]} votes</p>
      <br />
      <button onClick={handleVote}>Vote</button>
      <br></br>
      <br></br>
      <button onClick={handlePreviousAnecdote}>Previous Anecdote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>

      <br></br>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maxVotes()]}</p>
    </div>
  );
}

export default App