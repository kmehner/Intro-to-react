
import React, { Component } from 'react';
import './styles.css';

/*   Constructor() method is a method used to initialize an object's state in a class-based component.
  Super() method is used to call the constructor of the parent class. 
    aka it can access and call the React.Component class's functions 
  THIS.STATE is an object that holds the state of the component.
    In this case, the state object has a property called name with the value 'John Doe'. */

class ClassGreeting extends Component {

    constructor(props){
      super(props);

      // Setting the State of name 
      this.state = {
        name: this.props.initialName,
      };

      // This line binds the changeName method to the current instance of the ClassGreeting component. Without this line of code, the changeName method would not actually be able to access the state object.
      this.changeName = this.changeName.bind(this);
    }

    // Setting up a method to change the name property in the state object
    changeName() {  
      this.setState({name: 'Jane Doe'});
    }
 
    // Render() returns the JSX code that will be rendered to the DOM. It's called every time the component's state changes.
    render() {

      // Accessing the name property from the state object 
      const name = this.state.name;

      return (
        <div>
          <h2>Hello, {name}! This is a class-based greeting</h2>

          {/* Setting up an event listener on the button so when the button is clicked, the changeName method is called, triggering a state update */}
          <button onClick={this.changeName}>Change Name</button>
        </div>
      );
      
    }
}

ClassGreeting.defaultProps = {
  initialName: 'John Doe',
};

export default ClassGreeting;