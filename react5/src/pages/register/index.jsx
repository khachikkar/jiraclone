import React from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      loading: false
    };
  }

  handlechangevalues = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleregister = async (e) => {
    e.preventDefault();

    this.setState({
        loading: true
    })
    const { email, password } = this.state;

   try{
   await createUserWithEmailAndPassword(auth, email, password);
   }catch{
console.log("error")
   }finally{
    this.setState({
        loading: false
    })
   }
  };

  render() {
    const {loading} =this.state

    return (
      <div>
        <h1>Register</h1>
        <fieldset style={{ width: 200 }}>
          <legend>Register</legend>
          <form onSubmit={this.handleregister} action="">
            <label htmlFor="">
              <p>Full Name</p>
              <input
                name="fullname"
                type="text"
                placeholder="Full Name"
                onChange={this.handlechangevalues}
              />
            </label>

            <label htmlFor="">
              <p>Email</p>
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={this.handlechangevalues}
              />
            </label>

            <label htmlFor="">
              <p>Password</p>
              <input
                name="password"
                type="text"
                placeholder="Password"
                onChange={this.handlechangevalues}
              />
            </label>

            <br />
            <br />
            <button>{loading ? "Loading..." : "Register"}</button>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default Register;
