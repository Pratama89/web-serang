import About from "@/components/layouts/About";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

describe("About", () => {
  it("should render", () => {
    const page = render(<About />);
    // expect(screen.getByTestId("title").textContent).toBe("About");
    expect(page).toMatchSnapshot();
  });
});