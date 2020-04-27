import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
// import {render} from "@react-library/react"
import { act } from "react-dom/test-utils";

import LandingPage from "./LandingPage";

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

it("renders without crashing", () => {
  // const div = document.createElement("div")
  act(() => {
    render(<LandingPage />, container);
  });
});

it("includes headline 'Track your books' ", () => {
  act(() => {
    render(<LandingPage />, container);
  });
  const target = container.querySelector('[data-testid="LandingPage-Ref1"]');
  expect(target).toHaveTextContent("Track your books");
});

it("includes body text 'A personal library -  allows...' ", () => {
  act(() => {
    render(<LandingPage />, container);
  });
  const target = container.querySelector('[data-testid="LandingPage-Ref2"]');
  expect(target).toHaveTextContent(
    "A personal library - allows you log your books, whom you lent them to, when you lent them. Add and delete books. Search based on whom you lent them to. Yours, don't forget them."
  );
});
