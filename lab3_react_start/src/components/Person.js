import React from 'react'

const Person = props => {
    return (
        <div>
            <p>I am {props.name}</p>
            <p>I am {props.age} years old,</p>
            <p>I am the {Math.floor(Math.random() * 5)} th generation</p>
            <p style={{color:"red"}}>My job function is {props.children}</p>
        </div>

    )
}

export default Person