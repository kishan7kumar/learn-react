import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello thi is hard</h1>;
const title = () => {
  return <h2>thsi is title</h2>;
};
const HeadingComponent = () => {
  return (
    <React.Fragment>
      <div>{title()}this is heading</div>
      <div>this is second heading</div>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <HeadingComponent></HeadingComponent>
  </div>
);
