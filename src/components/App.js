import React, { Component, useState } from "react";
import "../styles/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mail: "",
      gen: "male",
      phon: "",
      pass: "",
      error: "",
      username: ""
    };
  }
  handlenamechange = (event) => {
    this.setState({ name: event.target.value });
  };
  handlemailchange = (event) => {
    this.setState({ mail: event.target.value });
  };
  handlegenchange = (event) => {
    this.setState({ gen: event.target.value });
  };
  handlephonchange = (event) => {
    this.setState({ phon: event.target.value });
  };
  handlepasschange = (event) => {
    this.setState({ pass: event.target.value });
  };
  handlesubmit = () => {
    const alphanumeric = /^[0-9a-zA-Z ]+$/;
    const number = /^[0-9]*$/;
    if (
      this.state.name === "" ||
      this.state.mail === "" ||
      this.state.gen === "" ||
      this.state.phon === "" ||
      this.state.pass === ""
    ) {
      this.setState({ error: "All fields are mandatory" });
      return;
    }
    if (!this.state.name.match(/^[0-9a-zA-Z ]+$/)) {
      this.setState({ error: "Name is not alphanumeric" });
      return;
    }
    if (this.state.mail.indexOf("@") < 1) {
      this.setState({ error: "Email must contain @" });
      return;
    }
    if (
      this.state.gen !== "male" &&
      this.state.gen !== "female" &&
      this.state.gen !== "other"
    ) {
      this.setState({ error: "Please identify as male, female or others" });
      return;
    }
    if (!this.state.phon.match(/^[0-9]*$/)) {
      this.setState({ error: "Phone Number must contain only numbers" });
      return;
    }
    if (this.state.pass.length < 6) {
      this.setState({ error: "Password must contain atleast 6 letters" });
      return;
    }
    let user = this.state.mail.substring(0, this.state.mail.indexOf("@"));
    this.setState({
      username: user,
      name: "",
      mail: "",
      gen: "male",
      phon: "",
      pass: "",
      error: ""
    });
  };
  render() {
    return (
      <>
        <div id="main"></div>
        <div>
          {this.state.error && <div>{this.state.error}</div>}
          {this.state.username && <div>Hello {this.state.username}</div>}
        </div>
        <label>Name</label>
        <input
          data-testid="name"
          value={this.state.name}
          onChange={this.handlenamechange}
        />
        <br />
        <label>Email address</label>
        <input
          data-testid="email"
          value={this.state.mail}
          onChange={this.handlemailchange}
        />
        <br />
        <label>Gender</label>
        <input
          data-testid="gender"
          value={this.state.gen}
          onChange={this.handlegenchange}
        />
        <br />
        <label>Phone Number</label>
        <input
          data-testid="phoneNumber"
          value={this.state.phon}
          onChange={this.handlephonchange}
        />
        <br />
        <label>Password</label>
        <input
          data-testid="password"
          type="password"
          value={this.state.pass}
          onChange={this.handlepasschange}
        />
        <br />
        <button data-testid="submit" onClick={this.handlesubmit}>
          Submit
        </button>
      </>
    );
  }
}
