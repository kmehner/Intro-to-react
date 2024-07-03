import React from "react";
import Greeting from "./Greeting";
import ClassGreeting from "./ClassGreeting";

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>

      <Greeting initialName="Johnny Doe"/>

      <ClassGreeting initialName='Johnn Doe'/>
    </div>
  );
}

export default App;