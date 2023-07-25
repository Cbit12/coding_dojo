import React, {useState} from 'react'

const CounterButton = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
    const [count, setCount] = useState(0);

  // ---------------------------------------------
  // II) HANDLERS AND AUX FUNCTIONS
  // ---------------------------------------------
    const handleOnClickIncrementCount = (e) => {
        let newCount = count + 1;
        setCount(newCount)
        }

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
    return (
    <div>
        {/* Increment Button */}
        <button onClick={handleOnClickIncrementCount}>
        Birthday Button for {props.firstName} {props.lastName}
        </button>
    </div>
    )
}

export default CounterButton;