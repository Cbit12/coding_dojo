import React from "react";

const PersonCard = (props) => {
    console.log(props)
    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair color: {props.haircolor}</p>
            <hr/>
            {props.children}
            <hr/>
        </div>
    )
}

export default PersonCard;