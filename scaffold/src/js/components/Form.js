import React, { Component } from "react";
import ReactDOM from "react-dom";


class Form extends Component {
  constructor() {
    super();
    this.state = {
      mode: "",
      waiting: true               //this flag will be used to check whether the component is ready to load.
    };
  }
  
  /**
   * The component is mounted and now ready to be deployed in the document. 
   */
  componentDidMount() {
     var appState = {};

     /**
      * Here we will create a temporary Virtual DOM object to detect the development/product mode. 
      */
     var ele = React.createElement("div");
     
     /**
      * This is where we are detecting the mode of the app. If key '_self' exist in virtual DOM then it's 
      * "development" mode otherwise it is "production" mode. 
      */
     appState.mode = ('_self' in ele) ? 'development' : 'production';    
     
     /**
      * Setting up the flag to false so as to denote the app is ready to render. 
      */
     appState.waiting = false;
     
     this.setState(appState);
  }

  render() {
    var domTxt = 'Please wait';
    if (!this.state.waiting) {
      domTxt = "This app is running in " + this.state.mode + " mode.";
    }
    return (
      <h1>{domTxt}</h1>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;