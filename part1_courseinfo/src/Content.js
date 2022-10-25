
const Part = (props) => {
    return (
        <li>{props.part}:{props.exercises}</li>
    )
  }

const Content = (props) => {
  const parts = props.parts

  return (
    <div>
      { parts.map(element => (
        <Part part={element.name} exercises={element.exercises}/>)
      )}
    </div>
  )
}

export { Content }