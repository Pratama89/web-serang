import { render, screen } from "@testing-library/react";
import { describe } from "node:test"; 
import ComponentCarousel from "@/components/layouts/Carousel";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/carousel",
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

describe("ComponentCarousel", () => {
  it("should render", () => {
    const page = render(<ComponentCarousel />);
    // expect(screen.getByTestId("title").textContent).toBe("Header");
    expect(page).toMatchSnapshot();
  });
});
