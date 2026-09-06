import { useState } from "react"

export default function Batter() {

    const [runs, setRuns] = useState(0);

    const handleSingleRuns = () => {
        setRuns(runs + 1);
    }

    const handleFourRuns = () =>{
        setRuns (runs + 4);
    }

    const handleSixRuns = () =>{
        setRuns (runs + 6);
    }

    const resetRuns = () => {
        setRuns(0);
    }

    return (  
        <div>
            <p>----------------</p>
            <h2>Score: {runs} </h2>
            <button onClick={handleSingleRuns}>Add Run</button><br />
            <button onClick={handleFourRuns}>Add 4 Runs</button><br/>
            <button onClick={handleSixRuns}>Add 6 Runs</button><br/>
            <button onClick={resetRuns}>Cancel Runs</button>
        </div>
    )
}