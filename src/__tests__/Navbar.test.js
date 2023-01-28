/* eslint-disable */
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import React from "react";

describe("Renders the Navbar", () => {
  it("Renders the Navbar", () => {
    const navbar = TestRenderer.create(
      <Router>
        <Navbar />
      </Router>
    ).toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
