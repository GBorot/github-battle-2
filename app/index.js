import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return <div>Hello Gautier!!</div>;
  }
}

ReactDOM.render(
  // React element
  <App />,
  // Where to render the element to
  document.getElementById("app")
);
