
import React, { Component } from 'react';
import '../src/styles.css';

class ClassGreeting extends Component {
  //  The render method returns a paragraph element with a welcome message. 
  // The difference from a functional component is that the render method is a class method.
 
    render() {

      // Adding CSS from styles.css -> className instead of Style attribute 
        return <p className='greeting'>This is a class-based greeting!</p>;
    }
}
export default ClassGreeting;