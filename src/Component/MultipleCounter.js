import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";

function MultipleCounter(){
    
    const[counterSize,setCounterSize]=useState(0);

    function updateCounterSize(counterSize){
        setCounterSize(counterSize);
    }
    return(
        <div>
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize={counterSize}></CounterGroup>
        </div>
    )
}
export default MultipleCounter;