import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>PAGE NOT FOUND!!!</h1>
      <Link to="/">
        <button>GO BACK</button>
      </Link>
    </div>
  );
}

export default Error404;
