// src/Greeting.jsx
// A functional component that returns a paragraph element with a welcome message.

import React from 'react';
import styles from './Greeting.module.css';

function Greeting() {

    // Adding some inline styling 
    const greetingStyle = {
    color: "blue",
    backgroundColor: "lightblue",
    padding: "10px",
    fontFamily: "Arial",
    textAlign: "center"
    };

    // Adding the inline styling to the paragraph tag 
    // return <p style={greetingStyle}>Welcome to the world of React!</p>;
    return <p className={styles.greeting}>Welcome to the world of React!</p>;
}
export default Greeting;