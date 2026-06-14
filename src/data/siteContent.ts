export const nav = [
  { label: "Overview", href: "#overview" },
  { label: "Why Starfruit", href: "#why" },
  { label: "Purchasing", href: "#purchasing" },
  { label: "Fulfillment", href: "#fulfillment" },
  { label: "Assessment", href: "#assessment" },
  { label: "Design Approach", href: "#notes" },
];

export const contact = {
  phone: "(786) 305-7470",
  phoneHref: "tel:+17863057470",
  email: "fresh@starfruitexpress.com",
  hours: "Mon – Fri · 9:00 AM – 7:00 PM",
  region: "Florida",
};

export interface SectionSource {
  id: string;
  title: string;
  originalPage: string;
  originalPurpose: string;
  designFocus: string;
  interpretation: string;
  explores: string;
}

export const sources: SectionSource[] = [
  {
    id: "hero",
    title: "Homepage Hero",
    originalPage: "Home",
    originalPurpose:
      "Frame Starfruit Express as a partner that helps restaurants uncover hidden profits and reduce operational stress.",
    designFocus:
      "Connect the established brand promise to a concrete operational moment above the fold.",
    interpretation:
      "I kept the original focus on saving restaurant operators time and money, then explored a more product-led presentation. The editorial headline introduces the brand promise, while the order preview gives visitors a quick visual example of how purchasing and fulfillment may come together.",
    explores:
      "A clearer connection between Starfruit's established message and the operational experience behind it, while preserving the approachable restaurant-focused personality of the original website.",
  },
  {
    id: "why",
    title: "Traditional vs. Starfruit",
    originalPage: "Home - Typical Tuesday",
    originalPurpose:
      "Show the day-to-day reality of a typical restaurant Tuesday through texts from reps, scattered spreadsheets, last-minute substitutions, and Starfruit's coordinated view.",
    designFocus:
      "Present the typical Tuesday idea as a scannable restaurant workflow on desktop and mobile.",
    interpretation:
      "I kept the original 'typical Tuesday' idea because it communicates the day-to-day reality of restaurant operations well. I presented it as a side-by-side workflow to show my interpretation of the difference between managing several disconnected tasks and having one coordinated view.",
    explores:
      "A visual way of communicating the same story, allowing restaurant operators to understand the experience quickly on both desktop and mobile.",
  },
  {
    id: "purchasing",
    title: "Purchasing Intelligence",
    originalPage: "Home - Solutions / Profits",
    originalPurpose:
      "Communicate that Starfruit gives operators visibility into supplier pricing, rebates, and missed margin recovery.",
    designFocus:
      "Show supplier visibility, rebate awareness, and margin context inside one purchasing moment.",
    interpretation:
      "I preserved the original emphasis on supplier visibility, rebates, and restaurant profitability. I then explored how those benefits might look inside a practical order-management interface, using a single purchasing example to keep the concept easy to follow.",
    explores:
      "How Starfruit's existing purchasing message could translate into a tangible product experience, while keeping the focus on useful information and operator decision-making.",
  },
  {
    id: "fulfillment",
    title: "Cold-Chain Fulfillment",
    originalPage: "Contact - Why Choose Us",
    originalPurpose:
      "Reassure operators that Starfruit delivers in temperature-controlled vehicles with a responsive operations team.",
    designFocus:
      "Make the fulfillment promise visible through staged delivery and shipment details.",
    interpretation:
      "I retained the existing emphasis on temperature-controlled vehicles, dependable fulfillment, and responsive service. I presented those qualities through a five-stage delivery journey to show how restaurant operators might experience the service from pickup through delivery.",
    explores:
      "A more visual expression of Starfruit's established fulfillment promise, using temperature, ETA, and shipment details to make the service feel tangible and easy to follow.",
  },
  {
    id: "assessment",
    title: "Savings Assessment",
    originalPage: "Contact - Send a Message",
    originalPurpose:
      "Convert restaurant operators into a conversation with the Starfruit team through the current contact path.",
    designFocus: "Start the contact path with restaurant context before a sales conversation.",
    interpretation:
      "I kept the original goal of starting a conversation with restaurant operators and explored a more guided assessment format. The questions are based on the information that would help provide useful context, such as locations, suppliers, purchasing volume, and operational priorities.",
    explores:
      "A focused extension of the current contact experience that begins with the restaurant operator's situation while preserving Starfruit's useful-first, approachable tone.",
  },
];
