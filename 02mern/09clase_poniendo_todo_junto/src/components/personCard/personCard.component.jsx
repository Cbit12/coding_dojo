import React , {useState} from "react";

const PersonCard = (props) => {
    console.log(props)

    const [count, setCount] = useState(props.age);

    const handleCountClick = () => {
        setCount(count + 1);
    }
    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {count}</p>
            <p>Hair color: {props.haircolor}</p>
            <button onClick={handleCountClick}>Birthday button for {props.firstName} {props.lastName}</button>
            <hr/>
            {props.children}
            <hr/>
        </div>
    )
}

export default PersonCard;