import React from 'react'

export default function User(props) {
    return (
        <h1>
            name : {props.UserObj.name}<br/>
            age : {props.UserObj.age}<br/>

            <button onClick={props.clickHandler}>클릭</button>
        </h1>
        
    )
}
