import Contact from "@/components/layouts/Contact";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/contact",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
      isReady: true,
    };
  },
}));

describe("Contact", () => {
  it("should render", () => {
    const page = render(<Contact />);
    // expect(screen.getByTestId("title").textContent).toBe("Header");
    expect(page).toMatchSnapshot();
  });
});
