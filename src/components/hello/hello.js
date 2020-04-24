import React from "react";
import "./hello.css";

export default function Hello({ name }) {
  if (name) {
    return (
      <h1 data-testid="hello-text" className="basri-formatting">
        Hello, {name}!
      </h1>
    );
  } else {
    return <span className="basri-formatting">Hey, stranger</span>;
  }
}
