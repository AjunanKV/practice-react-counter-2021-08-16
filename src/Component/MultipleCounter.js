import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import "../styles/MultipleCounter.css";
function MultipleCounter(){
    
    const[counterSize,setCounterSize]=useState(0);

    function updateCounterSize(counterSize){
        setCounterSize(counterSize);
    }
    return(
        <div>
            <h1 className = "Title">Multiple Counters: </h1>
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize={counterSize}></CounterGroup>
        </div>
    )
}
export default MultipleCounter;