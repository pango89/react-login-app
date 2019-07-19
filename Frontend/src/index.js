import React from "react";
import ReactDOM from "react-dom";
import RoutesMapper from "./routes/routesMapper";
import { lightTheme } from "./themes/theme-context";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "./index.scss";
import "./styles/font-family.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: lightTheme
    };
  }

  render() {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <RoutesMapper />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
