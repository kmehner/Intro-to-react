import React from "react";
import Greeting from "./Greeting";
import ClassGreeting from "./ClassGreeting";

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Greeting />

      {/* Passing through the prop (property) */}
      <ClassGreeting initialName='Johnn Doe'/>
    </div>
  );
}

export default App;