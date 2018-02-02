import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';
import SearchBar from 'material-ui-search-bar'


class FirstScreen extends Component{
  constructor(props){
  super(props);
}
render(){
  return(
    <div>
      <MuiThemeProvider>
        <div>
        <AppBar
           title="Register"
         />
         <TextField
           hintText="Enter your First Name"
           floatingLabelText="First Name"
           //onChange = {(event,newValue) => this.setState({first_name:newValue})}
           />
         <br/>
         <TextField
           hintText="Enter your Last Name"
           floatingLabelText="Last Name"
           //onChange = {(event,newValue) => this.setState({last_name:newValue})}
           />
         <br/>
         <TextField
           //hintText={userhintText}
           //floatingLabelText={userLabel}
           //onChange = {(event,newValue) => this.setState({email:newValue})}
           />
         <br/>
         <TextField
           type = "password"
           hintText="Enter your Password"
           floatingLabelText="Password"
           //onChange = {(event,newValue) => this.setState({password:newValue})}
           />
         <br/>
         //<RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event,this.props.role)}/>
        </div>
       </MuiThemeProvider>
    </div>
      );
}

}
export default FirstScreen;
