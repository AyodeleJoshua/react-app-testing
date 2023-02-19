import { render, screen } from "@testing-library/react";
import Greet from ".";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="Joshua" />);
  const textElement = screen.getByText("Hello Joshua");
  expect(textElement).toBeInTheDocument();
});
