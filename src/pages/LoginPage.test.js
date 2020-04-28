import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, fireEvent } from "@testing-library/react";
// import { act } from "react-dom/test-utils";

import LoginPage from "./LoginPage";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("test email address entry text field", () => {
  const { getByTestId} = render(<LoginPage />);
  let targetNode = getByTestId("LoginPage-Ref1").querySelector("input"); //MUI framework special! otherwise not needed this deep
  fireEvent.change(targetNode, { target: { value: "abcd" } });
  expect(targetNode).toHaveValue("abcd");
});
