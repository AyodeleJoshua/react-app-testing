import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counter-two";

describe("Counter", () => {
  test("counter two renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter two");
    expect(textElement).toBeInTheDocument();
  });
});
