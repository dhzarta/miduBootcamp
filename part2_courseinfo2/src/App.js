import {Course} from './note.js'

    const course = [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id:4
        },  
      ]
      const course2 = [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Midlewares',
          exercises: 7,
          id: 2,
        }, 
      ]

export default function App () {
    return (
    <div>
    <h1>Half Stack application development</h1>   
    <ul>
     {course.map (course =><Course key={course.id} name={course.name} exercises={course.exercises} id={course.id} />)}
    </ul>
    <p>Total of {course.map (sumall => sumall.exercises).reduce((prev, curr) => prev + curr, 0)} exercises</p>
    <h1>Node.js</h1>
    <ul>
     {course2.map (course2 => <Course key={course2.id} name={course2.name} exercises={course2.exercises} id={course2.id} />)}
    </ul>
    <p>Total of {course2.map (sumall => sumall.exercises).reduce((prev, curr) => prev + curr, 0)} exercises</p>
    </div>)
 };