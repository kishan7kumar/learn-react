import React, { Component } from "react";
import axios from "axios";
export class ProfileClass extends Component {
  // NOTE render method is very important here, it returns the JSX
  // NOTE Here acc to react life cycle the constructor is called first and then render method.
  // NOTE The sequence of executions is constructor -> render -> componentDidMount
  constructor(props) {
    super(props); // NOTE: used to access properties of parent component
    this.state = {
      name: "NA",
      location: "NA",
    };
  }

  // NOTE: Here because of async the componentDidMount will be called after the parent componentDidMount
  async componentDidMount() {
    const client = axios.create({
      baseURL: " https://api.github.com/users/kishan7kumar",
    });
    const resp = await client.get("");
    this.setState({
      name: resp.data.name,
      location: resp.data.location,
    });
    this.timer = setTimeout(() => {
      console.log("timer on");
    }, 1000);
  }
  // NOTE: Called after every subsequent render when state is changed
  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name) {
      console.log("state changed");
    }
    console.log("ComponentDidUpdate called");
  }

  /* NOTE: It will called when the component is removed from the DOM
   * Every time we call something in componentDidMount, we have to make sure to clear that in componentWillUnmount, or else it will called again and again
   */
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("profile component unmounted");
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.location}</p>
      </div>
    );
  }
}

export default ProfileClass;
