import { useState } from "react"
import "../styles/CounterSizeGenerator.css";
function CounterSizeGenerator(props){
    const [size, setSize] = useState(0);

    function handleChangeSize(event){
        const counterSize = parseInt(event.target.value);
        setSize(counterSize);

        props.updateCounterSize(counterSize)
    }
    return(
        <div>
            <span className = "Size">Size: </span>
            <input type="number" min="0" value={size} onChange ={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;