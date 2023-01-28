/* eslint-disable */
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";

describe("Renders the Home Page", () => {
  it("Renders the Home Page", () => {
    const home = TestRenderer.create(
      <Router>
        <Home />
      </Router>
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});
