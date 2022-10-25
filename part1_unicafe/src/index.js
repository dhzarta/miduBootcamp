import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "./styles.css";

const StatisticsAv = (props) => {
     return (
      <tr>
     <td>Average:</td>
      <td>{props.average}</td>
      </tr>
     )
}
const StatisticsPo = (props) => { 
      return (
        <tr>
       <td>Positive:</td>
       <td>{props.positive}%</td>
       </tr>
       )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState([])
  const [neutral, setNeutral] = useState([])
  const [bad, setBad] = useState([])
  const [clicks, setClicks] = useState ([])

    const handleClickGood = () => {
        setGood(good + 1)
        setClicks(clicks + 1)
    }
    const handleClickNeutral = () => {     
        setNeutral(neutral + 1)
        setClicks(clicks + 1)
    }
    const handleClickBad = () => {
        setBad(bad + 1)
        setClicks(clicks + 1)
    }
    const clickAverage = (clicks.length/3)
    const positiveClicks = (good.length*100/clicks.length)
    
    const NoFeedBack = () => {
      return (
        <div>
              <h1>Give Feedback</h1>
              <br />
              <button onClick={handleClickGood}>Good</button>
              <button onClick={handleClickNeutral}>Neutral</button>
              <button onClick={handleClickBad}>Bad</button>
              <br />
              <p>No Feedback Given</p>
          </div>
      )
    }
    
    const FeedBackGiven = () => {
      return (
        <div>
            <h1>Give Feedback</h1>
            <br />
            <button onClick={handleClickGood}>Good</button>
            <button onClick={handleClickNeutral}>Neutral</button>
            <button onClick={handleClickBad}>Bad</button>
            <br />
            <h1>Statistics</h1>
            <table>
            <tr>
            <td>Good:</td>
            <td>{good.length}</td>
            </tr>
            <tr>
            <td>Neutral:</td>
            <td>{neutral.length}</td>
            </tr>
            <tr>
            <td>Bad:</td>
            <td>{bad.length}</td>
            </tr>
            <tr>
            <td>Clicks totales:</td>
            <td>{clicks.length}</td>
            </tr>
            <StatisticsAv average = 
              {clickAverage === 0 ? (
                clickAverage.toFixed(0)
              ) : (
                clickAverage.toFixed(2)
              )
              }/>
           <StatisticsPo positive={
               positiveClicks === 0 ? (
                positiveClicks.toFixed(0)
               ) : (
                positiveClicks.toFixed(2)
               )
              }/>
            </table>
          </div>
      )
    }

  return (
     clicks.length === 0 ? (
        <NoFeedBack />
     ) : (
      <FeedBackGiven />
     ))
  }  
  
const rootElement = document.getElementById("root");

ReactDOM.render(
    <App />,
    rootElement
  );
