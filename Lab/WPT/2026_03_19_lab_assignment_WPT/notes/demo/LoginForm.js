import { Component } from "react";

//JSX 
class Login extends Component {

    constructor() {
        super();
        //this.msg = "Default Msg"// instance 

        this.state = { msg: "default" }//state 

        this.textHandler = this.textHandler.bind(this);

        //bind the event with current object variable 

    }

    btnHandler() {

        console.log("btnHandler")

    }
    // reading textfield data 
    //event 
    textHandler(e) {
        // console.log("textHandler")
        console.log(e.target);// element 
        console.log(e.target.name);
        console.log(e.target.value);// text onBlur 
        //this.msg = "New Msg " + e.target.value;
        this.setState({ msg: e.target.value })
        // instance 
        // bind problem   error undefined 

    }

    render() {

        return <>
            <h1>Login Form </h1>
            Enter UserName <input type="text"
                name="username" onBlur={this.textHandler} /><br />
            <input type="button" value={"Login"}
                onClick={this.btnHandler} />
            <p>Data {this.state.msg}</p>
        </>


    }
}

export default Login