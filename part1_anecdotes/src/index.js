import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';


const App = () => {

  const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
      ]
    
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState ({0:0, 1:0, 2:0, 3:0, 4:0, 5:0})
  const [mostVoted, setMostVoted] = useState (0)


  const handleclickVote = () => {
    const copy = {...points}
    copy[selected] += 1;
    setPoints(copy); 

    for (const[key] of Object.entries(copy)) {
        if (copy[key] > copy[mostVoted]) {setMostVoted(key)}
    }
  }

  const handleclickNext = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length));
  }

  return (
    <div>
       <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} votes </p>
      <p><button onClick={handleclickVote}>Vote</button>   <button onClick={handleclickNext}>Next Anecdote</button></p>
      <p>Anecdote wtih more votes is:</p>
      {anecdotes[mostVoted]}
      <p>has {points[mostVoted]} points </p>
    </div>
  )
}



createRoot(document.getElementById('root')).render(
  <App />
);

/*
const rootElement = document.getElementById("root");

ReactDOM.render(
    <App />,
    rootElement
  );
  */
