// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = { text: "Click me" };
  const labelText = "Enter name:";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
  // we use parenthesis when we have multiline jsx
  // we use className in react to avoid collision of class
  // we can use {} to reference javascript variables
};

// Take the react component and show it on the screem
ReactDOM.render(<App />, document.querySelector("#root"));
