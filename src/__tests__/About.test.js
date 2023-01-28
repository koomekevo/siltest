/* eslint-disable */
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import About from "../pages/About";
import React from "react";

describe("Renders the About Page", () => {
  it("Renders the About Page", () => {
    const about = TestRenderer.create(
      <Router>
        <About />
      </Router>
    ).toJSON();
    expect(about).toMatchSnapshot();
  });
});
