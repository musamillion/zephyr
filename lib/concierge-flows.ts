export type ConciergeFlowId =
  | "start"
  | "flightStatus"
  | "terminal"
  | "arrivals"
  | "preOrder"
  | "staff"
  | "lounge"
  | "dutyFree";

export type ConciergeOption = {
  label: string;
  next?: ConciergeFlowId;
  href?: string;
};

export type ConciergeFlow = {
  message: string;
  options: ConciergeOption[];
};

export const conciergeFlows: Record<ConciergeFlowId, ConciergeFlow> = {
  start: {
    message:
      "Welcome to Zephyr International Airport. I'm your AER Concierge - I can help with flight information, terminal facilities, getting around the island, or pre-ordering from our airside shops. What do you need?",
    options: [
      { label: "My flight status", next: "flightStatus" },
      { label: "Terminal & facilities", next: "terminal" },
      { label: "Getting to the island", next: "arrivals" },
      { label: "Pre-order & shops", next: "preOrder" }
    ]
  },
  flightStatus: {
    message:
      "For live flight information, head to our Flights page for the latest departures and arrivals. Is there anything else I can help with?",
    options: [
      { label: "Back to start", next: "start" },
      { label: "Terminal info", next: "terminal" },
      { label: "Speak to staff", next: "staff" }
    ]
  },
  terminal: {
    message:
      "Zephyr International has a single terminal with Gates A1-A8 airside. The Zephyr Lounge is located near Gate A2. Duty free, dining, and retail are all airside past security. What are you looking for?",
    options: [
      { label: "Lounge access", next: "lounge" },
      { label: "Dining", href: "/eat-drink" },
      { label: "Duty free", next: "dutyFree" },
      { label: "Back to start", next: "start" }
    ]
  },
  arrivals: {
    message:
      "Welcome to the island. From the Arrivals Hall you'll find currency exchange, tourist information, licensed taxis, and car hire - all landside. The island is approximately 20 minutes from the airport. What can I help you with?",
    options: [
      { label: "Getting around", href: "/near-me" },
      { label: "Where to stay", href: "/stay" },
      { label: "Things to do", href: "/things-to-do" },
      { label: "Back to start", next: "start" }
    ]
  },
  preOrder: {
    message:
      "Our pre-order service lets you shop from airside retailers and collect at your gate. It's currently in preview - register your interest and we'll notify you when it launches.",
    options: [
      { label: "Register interest", href: "/book-a-demo" },
      { label: "Back to start", next: "start" }
    ]
  },
  staff: {
    message:
      "A member of the airport team can help at the nearest information point in the Check-In Hall or Arrivals Hall.",
    options: [{ label: "Back to start", next: "start" }]
  },
  lounge: {
    message:
      "The Zephyr Lounge is airside near Gate A2, with day passes available subject to capacity.",
    options: [{ label: "Back to start", next: "start" }]
  },
  dutyFree: {
    message:
      "Retail and duty free are airside after security. Pre-order preview partners include Duty Free and Island Provisions.",
    options: [
      { label: "Pre-order preview", href: "/pre-order" },
      { label: "Back to start", next: "start" }
    ]
  }
};
