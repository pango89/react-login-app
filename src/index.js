import React from "react";
import ReactDOM from "react-dom";
import RoutesMapper from "./routes/routesMapper";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RoutesMapper />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
