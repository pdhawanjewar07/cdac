import { Component } from "react";
import type { ChangeEvent } from "react";

type State = {
  username: string;
  password: string;
  show_greeting: boolean;
};


class LoginFormClassComponent extends Component<{}, State>{
  //
  constructor(props: {}){
    //
    super(props);
    this.state = {
      username: "",
      password: "",
      show_greeting: false,
    };
  }

  set_username = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState(() => ({
      username: e.target.value,
    }))
  }

  set_password = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState(() => ({
      password: e.target.value,
    }))
  }

  log_in = () => {
    if (this.state.username === "iet" && this.state.password === "123"){
      //
      this.setState(() => ({
        show_greeting: true,
      }))
    }
    else{
      alert("Who are you bro? 👀");
    } 
  }


  render(){
    return (
      <>
      <label htmlFor="username">Username: </label>
      <input onChange={this.set_username} id="username" type="text" />
      ------
      <label htmlFor="password">Password: </label>
      <input onChange={this.set_password} id="password" type="password" />
      {/* <p>Username: {this.state.username}</p> */}
      {/* <p>Password: {this.state.password}</p> */}

      <br /><br />
      <button onClick={this.log_in}>Lock In Bro 🦅</button>

      {this.state.show_greeting && (<p>Wassup {this.state.username}, Welcome Back 🤟</p>)}
      </>
    );
  }

}




export default LoginFormClassComponent;