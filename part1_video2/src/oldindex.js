import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const rootElement = document.getElementById("root");

const Counter = ({number}) => {
  return <h1>{number}</h1>
}

const App = (props) => {
  const [contadorValue, updateContador] = useState(0);

const handleClick = () => {
  updateContador(contadorValue + 1);
}

const handleClickReset = () => {
  updateContador(0);
}

const isEven = contadorValue % 2 === 0;
const mensajePar = isEven ? "Es par" : "Es impar";

return (
  <div>
    <p>El valor del contador es:</p>
    <Counter number={contadorValue} />
    <small>{mensajePar}</small><br />
    <button onClick={handleClick}>Incrementar</button>
    <button onClick={handleClickReset}>Reset</button>
    </div>
  );

};

ReactDOM.render(
  <App />,
  rootElement
);
