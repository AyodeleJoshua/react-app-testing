import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from ".";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const increamentButton = screen.getByRole("button", { name: "Increment" });
    expect(increamentButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking increament button", async () => {
    user.setup();
    render(<Counter />);
    const increamentButton = screen.getByRole("button", { name: "Increment" });
    await user.click(increamentButton);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("1");
  });
});
