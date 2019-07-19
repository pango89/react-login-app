import React, { Fragment } from "react";
import { compose } from "recompose";
import {
  FormControl,
  TextField,
  withStyles,
  Button,
  IconButton,
  InputAdornment
} from "@material-ui/core";
import { VisibilityOutlined, VisibilityOffOutlined } from "@material-ui/icons";
import ErrorIcon from "@material-ui/icons/Error";
import { login } from "../../authentication/authenticationActions";

const styles = () => ({
  loginContainer: {
    textAlign: "center",
    background: "url(../../images/Login.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
  },
  formControl: {
    width: 499,
    float: "right",
    height: "50%",
    textAlign: "center"
    // background:
    //   "linear-gradient(rgba(52,169,147,0.5),rgba(8,40,47,0.7),rgba(8,40,47,0.6))"
  },
  controlsContainer: {
    paddingTop: 300
  },
  textField: {
    width: 300
  },
  notchedOutline: {
    borderWidth: 2
  },
  notchedOutlineColor: {
    borderColor: ["#36A993", "!important"]
  },
  input: {
    color: "#fff",
    fontWeight: 300
  },
  label: {
    color: ["#36A993", "!important"]
  },
  button: {
    width: 300,
    height: 60,
    marginTop: 20,
    letterSpacing: "1px",
    fontWeight: 600,
    textTransform: "none",
    fontSize: 20
  },
  iconHide: {
    color: "#36A993"
  },
  iconVisible: {
    color: "#FFFFFF"
  }
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
      isPasswordHidden: true
    };
  }

  togglePasswordVisiblity = () => {
    this.setState({
      isPasswordHidden: !this.state.isPasswordHidden
    });
  };

  onLoginClick = async () => {
    const input = {
      username: this.state.username,
      password: this.state.password
    };

    this.setState({
      loading: true
    });

    const response = await login(input);
    if (response.error) {
      this.setState({
        loading: false,
        errorMessage: response.error_description
      });
    } else {
      this.setState({
        loading: false,
        errorMessage: ERROR_MESSAGES.EMPTY
      });
      // this.props.history.push("/IBPlanning/Shipments");
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.loginContainer}>
        <FormControl variant="outlined" className={classes.formControl}>
          <div>
            <img src="" />
          </div>
          <div>
            <img src="" />
          </div>
          <div className={classes.controlsContainer}>
            <Fragment>
              <TextField
                id="userame-input"
                label="Username"
                type="text"
                margin="normal"
                autoFocus
                autoComplete="false"
                variant="outlined"
                className={classes.textField}
                InputProps={{
                  classes: {
                    notchedOutline: `${classes.notchedOutlineColor} ${
                      classes.notchedOutline
                    }`,
                    input: classes.input
                  }
                }}
                InputLabelProps={{
                  className: classes.label
                }}
              />
              <TextField
                id="password-input"
                label="Password"
                type={this.state.isPasswordHidden ? "password" : "text"}
                margin="normal"
                autoComplete="false"
                variant="outlined"
                className={classes.textField}
                InputProps={{
                  classes: {
                    notchedOutline: `${classes.notchedOutlineColor} ${
                      classes.notchedOutline
                    }`,
                    input: classes.input
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={this.togglePasswordVisiblity}>
                        {this.state.isPasswordHidden ? (
                          <VisibilityOffOutlined className={classes.iconHide} />
                        ) : (
                          <VisibilityOutlined className={classes.iconVisible} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                InputLabelProps={{
                  className: classes.label
                }}
              />
              <Button
                id="signin-btn"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.onLoginClick}
              >
                Sign In
              </Button>
            </Fragment>
          </div>
        </FormControl>
      </div>
    );
  }
}

export default compose(withStyles(styles))(LoginForm);
