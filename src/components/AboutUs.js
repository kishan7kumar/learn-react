import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

/* NOTE: React Lifecycle has two phases
 *  1. Render Phase:- React first tries to run constructor and render function
 *  2. Commit phase:- This phase is where React is actually modifying the DOM. In this phase
 *     the ComponentDidMount is called
 *  Now, because Render Phase is faster to perform React tries to complete the render phase first and then
 *  moves to commit phase. So for multiple children render phase is done first.
 */

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }

  componentDidMount() {
    // NOTE: Best place to make an API call
    console.log("Parent didmount called");
  }

  render() {
    console.log("Parent render called");
    return (
      <>
        <div>AboutUs</div>
        <Outlet />
        <ProfileClass />
      </>
    );
  }
}

export default AboutUs;
