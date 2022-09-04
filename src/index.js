import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import './index.css'

const Counter = () => {

    const[number, setNumber] = useState(0)

    const incrementHandler = () => {
        setNumber(number+1)
    }

    const decrementHandler = () => {
        setNumber(number-1)
    }


    return (
        <div className="counter-box">
            <h1>Compteur avec useState</h1>
            <h2>{number}</h2>
            <div className="button-box">
                <button className="btn" onClick={incrementHandler}>Augmenter</button>
                <button className="btn" onClick={decrementHandler}>Diminuer</button>
            </div>
        </div>
    );
}

ReactDOM.render(<Counter/>, document.getElementById('root'));
