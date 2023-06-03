import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError();
  return (
    <>
      <div>Something went wrong!!</div>
      <h2>{err.statusText}</h2>
    </>
  );
}

export default ErrorPage;
