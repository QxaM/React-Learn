import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("render Helo Wrold as a text", () => {
    // Given
    render(<Greeting />);

    // When

    // Then
    const element = screen.getByText("Hello World!");
    expect(element).toBeInTheDocument();
  });

  test("Renders 'good to see you' if the button was NOT clicked", () => {
    // Given
    render(<Greeting />);

    // When

    // Then
    const element = screen.getByText("good to see you", { exact: false });
    expect(element).toBeInTheDocument();
  });

  test("Renders 'Chagned!' if the button WAS clicked", () => {
    // Given
    render(<Greeting />);

    // When
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Then
    const element = screen.getByText("Changed!", { exact: false });
    expect(element).toBeInTheDocument();
  });
});
