import Footer from "@/components/layouts/Footer";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/footer",
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

describe("Footer", () => {
  it("should render", () => {
    const page = render(<Footer />);
    // expect(screen.getByTestId("title").textContent).toBe("Header");
    expect(page).toMatchSnapshot();
  });
});
