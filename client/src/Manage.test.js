import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Manage from "./components/Manage";

describe("Manage", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            _id: "1",
            eventName: "Event 1",
            organizer: "Organizer 1",
            date: "2023-06-10",
            time: "10:00 AM",
            place: "Location 1",
            description: "Description 1",
            price: "0",
          },
          {
            _id: "2",
            eventName: "Event 2",
            organizer: "Organizer 2",
            date: "2023-06-12",
            time: "2:00 PM",
            place: "Location 2",
            description: "Description 2",
            price: "20",
          },
        ]),
    });
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  test("renders event details", async () => {
    render(
      <Router>
        <Manage />
      </Router>
    );

    // Wait for the component to fetch and render the events
    await screen.findByText("Event 1");

    // Assertions
    expect(screen.getByText("Event 1")).toBeInTheDocument();
    expect(screen.getByText("Organizer: Organizer 1")).toBeInTheDocument();
    expect(screen.getByText("Date: 2023-06-10")).toBeInTheDocument();
    expect(screen.getByText("Time: 10:00 AM")).toBeInTheDocument();
    expect(screen.getByText("Place: Location 1")).toBeInTheDocument();
    expect(screen.getByText("Description: Description 1")).toBeInTheDocument();
    expect(screen.getByText("Price: 0")).toBeInTheDocument();

    expect(screen.getByText("Event 2")).toBeInTheDocument();
    expect(screen.getByText("Organizer: Organizer 2")).toBeInTheDocument();
    expect(screen.getByText("Date: 2023-06-12")).toBeInTheDocument();
    expect(screen.getByText("Time: 2:00 PM")).toBeInTheDocument();
    expect(screen.getByText("Place: Location 2")).toBeInTheDocument();
    expect(screen.getByText("Description: Description 2")).toBeInTheDocument();
    expect(screen.getByText("Price: 20")).toBeInTheDocument();
  });
});
