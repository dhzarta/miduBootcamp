import './App.css';
import Mensaje from './Mensaje.js'


const Description = () => {
  return <p>Esta es la app del bootcamp</p>
}

function App() {
  const a = 2
  const b = 2

  return (
    <div className="App">
     <Mensaje color='red' message='Estamos trabajando' />
     <Mensaje color='blue' message='en un curso' />
     <Mensaje color='yellow' message='de react' />
     <Description />
    </div>
  );
}

export default App

