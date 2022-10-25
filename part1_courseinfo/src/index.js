
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Content} from './Content.js';
import {Header} from './Header.js';
import {Total} from './Total.js';

/*"forma en una linea"
const Titile = ({course}) => <h1>{course}</h1>}
*/


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(x => x['exercises'])} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)