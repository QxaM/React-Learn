import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Async component", () => {
  test("Renders posts if request succeeds", async () => {
    // Given
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    // When

    // Then
    const listItemElements = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 1000 }
    ); //1s default
    expect(listItemElements).not.toHaveLength(0);
  });
});
