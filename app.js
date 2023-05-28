const heading = React.createElement(
  "h1",
  {
    id: "headingOne",
  },
  "this is header"
);

const parent = React.createElement(
  "div",
  {},
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is header"),
    React.createElement("h2", {}, "this is header2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
