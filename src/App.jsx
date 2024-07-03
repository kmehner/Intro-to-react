import React from "react";
import Greeting from "./Greeting";
import ClassGreeting from "./ClassGreeting";

function App() {
  const customMessage = "Welcome to my React app";
  const customUserMessage =  "Here are our users:";

  return (
    <div>
      <h1>Hello, World!</h1>

      <Greeting customMessage={customMessage}
                customUserMessage={customUserMessage} />
      <ClassGreeting customMessage={customMessage}
                     customUserMessage={customUserMessage} />

    </div>
  );
}

export default App;