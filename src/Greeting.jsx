// src/Greeting.jsx
// A functional component that returns a paragraph element with a welcome message.

// Importing useState from the react library 
import { useState } from 'react';
import React from 'react';
import styles from './Greeting.module.css';

function Greeting() {
    // Name state variable
    // setName is a function that updates the name variable
    // useState is a hook that initializes the name to the default value of 'John Doe'

    // <value>, <function to change the value> = useState(<default value>)
    const [name, setName] = useState('John Doe')

    const changeName = () => {
        // Using the setName function to update the name variable to 'Jane Doe'
        // ["John Doe", setName("John Doe => Jane Doe")]
        // ["Jane Doe", setName("Jane Doe => x")]
        setName('Jane Doe')
    }

    return (
        <div>
            <h2 className={styles.greeting}>Welcome, {name}! This is a functional component greeting</h2>
            <button onClick={changeName}>Change Name</button>
        </div> 
    )
}
export default Greeting;