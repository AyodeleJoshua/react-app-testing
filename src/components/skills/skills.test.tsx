import { render, screen } from "@testing-library/react";
import Skills from ".";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "Javascript "];
  test("Render skills correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Log in" });
    expect(loginButton).toBeInTheDocument();
  });

  test("start learning button not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start learning button is eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);
    // logRoles(view.container);
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 2000 }
    );
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});
