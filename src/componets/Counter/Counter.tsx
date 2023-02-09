import {useState} from "react";
import classes from './Counter.module.scss'


export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(prev => prev + 1)
    }
    return (
        <div className={classes.counter}>
            <p>{count}</p>
            <button onClick={handleIncrement}>increment</button>
        </div>
    );
};

