import React, { Component } from "react";

export class ProfileClass extends Component {
  // NOTE render method is very important here, it returns the JSX
  // NOTE Here acc to react life cycle the constructor is called first and then render method.
  // NOTE The sequence of executions is constructor -> render -> componentDidMount
  constructor(props) {
    super(props); // used to access properties of parent component
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(this.props.name + " constructor called");
  }

  componentDidMount() {
    console.log(this.props.name + " componentDidMount Called");
  }

  render() {
    console.log(this.props.name + " render called");
    const { count } = this.state;
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h1>this is ProfileClass component</h1>
        <p>{count}</p>
        <button
          onClick={() => {
            this.setState({ count: 23, count2: 24 }); // NOTE: We don't mutate the state directly so use setState() instead
          }}
        >
          Set Count
        </button>
      </div>
    );
  }
}

export default ProfileClass;
