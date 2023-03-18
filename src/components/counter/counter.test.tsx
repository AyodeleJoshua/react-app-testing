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

  test("renders a count of 2 after clicking increament button", async () => {
    user.setup();
    render(<Counter />);
    const increamentButton = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(increamentButton);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("2");
  });

  test("renders the count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButtonElement = screen.getByRole("button", { name: "Set" });
    await user.click(setButtonElement);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
