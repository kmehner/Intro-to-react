import React from "react";
import Greeting from "./Greeting";
import ClassGreeting from "./ClassGreeting";

function App() {
  const customMessage = "Welcome to my React app";

  return (
    <div>
      <h1>Hello, World!</h1>

      <Greeting customMessage={customMessage}/>

      <ClassGreeting customMessage={customMessage} />

    </div>
  );
}

export default App;