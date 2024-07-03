
import React, { Component } from 'react';
import './styles.css';

class ClassGreeting extends Component {

    constructor(props){
      super(props);

      // Setting the State
      this.state = {
        name: this.props.initialName,
      };

      this.toggleLogin = this.toggleLogin.bind(this);
    }

    toggleLogin() {  
      this.setState(prevState => ({
        isLoggedIn: !prevState.isLoggedIn 
      })); 
    }
 
    render() {
      const { name, isLoggedIn } = this.state;

      return (
          <div>
              <p className="greeting">
                  {isLoggedIn ? `Hello, ${name}! Welcome back!` : this.props.customMessage}
              </p>
              {!isLoggedIn ? (
                  <button onClick={this.toggleLogin}>Log In</button>
              ) : (
                  <button onClick={this.toggleLogin}>Log Out</button>
              )}
          </div>
      );
  }
  
}

ClassGreeting.defaultProps = {
  initialName: 'John Doe',
};

export default ClassGreeting;


// Previous class - name State and changeName event handler 
// class ClassGreeting extends Component {

//   constructor(props){
//     super(props);

//     // Setting the State of name 
//     this.state = {
//       name: this.props.initialName,
//     };

//     // This line binds the changeName method to the current instance of the ClassGreeting component. Without this line of code, the changeName method would not actually be able to access the state object.
//     this.changeName = this.changeName.bind(this);
//   }

//   // Setting up a method to change the name property in the state object
//   changeName() {  
//     this.setState({name: 'Jane Doe'});
//   }

//   // Render() returns the JSX code that will be rendered to the DOM. It's called every time the component's state changes.
//   render() {

//     // Accessing the name property from the state object 
//     const name = this.state.name;

//     return (
//       <div>
//         <h2>{this.props.customMessage}, {this.state.name}</h2>

//         {/* Setting up an event listener on the button so when the button is clicked, the changeName method is called, triggering a state update */}
//         <button onClick={this.changeName}>Change Name</button>
//       </div>
//     );
    
//   }
// }