// src/ClassGreeting.jsx

import React, { Component } from 'react';

class ClassGreeting extends Component {
  //  The render method returns a paragraph element with a welcome message. 
  // The difference from a functional component is that the render method is a class method.
 
    render() {
        return <p>This is a class-based greeting!</p>;
    }
}
export default ClassGreeting;