// FUNCTIONAL COMPONENT

import { useState } from 'react';
import React from 'react';
import styles from './Greeting.module.css';

function Greeting(props) {
    const [name, setName] = useState(props.initialName)

    // Logged in State
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // Event handlers
    const handleLoginClick = () => {
        setIsLoggedIn(true); 
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);;
        setName(props.initialName) // Reset the name to the initial name
    }

    const changeName = () => {
        setName('Jane Doe')
    }

    return (
        <div>
            <p className={styles.greeting}>
								{isLoggedIn ? `Hello, ${name}! Welcome back!` : props.customMessage}
            </p>

            {/* Buttons that are conditionally rendered */}
            {!isLoggedIn ? (
                <button onClick={handleLoginClick}>Log In</button>
            ) : (
                <button onClick={handleLogoutClick}>Log Out</button>
            )}
        </div>
    )
}

Greeting.defaultProps = {   
    initialName: 'John Doe',
};

export default Greeting;

// function Greeting() {
//     // Name state variable
//     // setName is a function that updates the name variable
//     // useState is a hook that initializes the name to the default value of 'John Doe'

//     // <value>, <function to change the value> = useState(<default value>)
//     const [name, setName] = useState('John Doe')

//     const changeName = () => {
//         // Using the setName function to update the name variable to 'Jane Doe'
//         // ["John Doe", setName("John Doe => Jane Doe")]
//         // ["Jane Doe", setName("Jane Doe => x")]
//         setName('Jane Doe')
//     }

//     return (
//         <div>
//             <h2 className={styles.greeting}>Welcome, {name}! This is a functional component greeting</h2>
//             <button onClick={changeName}>Change Name</button>
//         </div> 
//     )
// }