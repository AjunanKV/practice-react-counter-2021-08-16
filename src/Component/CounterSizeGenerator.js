import { useState } from "react"

function CounterSizeGenerator(props){
    const [size, setSize] = useState(0);

    function handleChangeSize(event){
        setSize(parseInt(event.target.value));

        props.updateCounterSize(parseInt(event.target.value))
    }

    return(
        <div>
            <span className = "Size">Size: </span>
            <input type="number" min="0" value={size} onChange ={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;