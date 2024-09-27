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
    };
  }

  handlechangevalues = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleregister = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    createUserWithEmailAndPassword(auth, email, password);
  };

  render() {
    console.log(this.state);

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
            <button>Register</button>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default Register;
