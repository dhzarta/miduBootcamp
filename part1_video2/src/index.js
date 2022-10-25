import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "./styles.css";

    const WarningNotUsed = () => {
        return <h3>Todavia no se ha usado el contador</h3>
    }

    const ListOfClicks = ({clicks}) => {
        return <p>{clicks.join(", ")}</p>
    }

    const InitialCounterState = {
        left: 2,
        right: 3,
        mensaje: "Bienvenidos!!"
    }

    const App = () => {
        //const [left, setLeft] = useState(0)
        //const [right, setRight] = useState(0)
        const [counters, setCounters] = useState (InitialCounterState)
        const [clicks, setClicks] = useState ([])

        const handleClickLeft = () => {
            const newCountersState = {
                ...counters,
                left: counters.left + 1,
            }
            setCounters(newCountersState);
            setClicks(prevClicks => ([...prevClicks, 'L']))
    
        }
        const handleClickRight = () => {
            const newCountersState = {
                ...counters,
                right: counters.right + 1,
            }
            setCounters(newCountersState);
            setClicks(prevClicks => ([...prevClicks, 'R']))
        }

        const handleClickReset = () => {
            setCounters(InitialCounterState);
            setClicks([]);
        }

        return (
        <div>
            {counters.left}
            <button onClick={handleClickLeft}>left</button>
            <button onClick={handleClickRight}>right</button>
            {counters.right}
            <p><button onClick={handleClickReset}>Reset</button></p>
            <p>Clicks totales: {clicks.length}</p>
            <h2>{InitialCounterState.mensaje}</h2>
            {clicks.length === 0 ? (
                <WarningNotUsed />
            ) : (
                <ListOfClicks clicks={clicks} />
            )}
        </div>
        );
    };
    

const rootElement = document.getElementById("root");

ReactDOM.render(
    <App />,
    rootElement
  );