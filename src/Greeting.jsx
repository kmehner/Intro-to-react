// FUNCTIONAL COMPONENT

import { useState } from 'react';
import React from 'react';
import styles from './Greeting.module.css';

function Greeting(props) {
    const [name, setName] = useState(props.initialName)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [users, setUsers] = useState(["Alice", "Bob", "Charlie", "David", "Eve"]) 

    // Event handlers
    const handleLoginClick = () => {
        setIsLoggedIn(true); 
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);;
        setName(props.initialName) // Reset the name to the initial name
    }

    return (
        <div>
            <p className={styles.greeting}>
								{isLoggedIn ? `Hello, ${name}! Welcome back!` : props.customMessage}
            </p>

            {!isLoggedIn ? (
                <button onClick={handleLoginClick}>Log In</button>
            ) : (
                <button onClick={handleLogoutClick}>Log Out</button>
            )}

            {/* Listing our users */}
            <p className={styles.greeting}> 
                {props.customUserMessage}
            </p>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>

        </div>
    )
}

Greeting.defaultProps = {   
    initialName: 'John Doe',
};

export default Greeting;
