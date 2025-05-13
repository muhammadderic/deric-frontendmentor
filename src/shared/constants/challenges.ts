import type { ChallengeGroups } from "@shared/types/types";

export const challenges: ChallengeGroups = {
  advanced: [
    { title: "Multi-Step Form", path: "/adv/multi-step-form" },
    { title: "Rock Paper Scissors", path: "/adv/rps" },
    { title: "REST Countries API", path: "/adv/countries" },
  ],
  intermediate: [
    { title: "E-Commerce Product Page", path: "/inter/ecom-prod" },
    { title: "Interactive Comments", path: "/inter/interactive-comments" },
    { title: "Calculator", path: "/inter/calc" },
  ],
  junior: [
    { title: "Age Calculator", path: "/junior/age-calc" },
    { title: "News Homepage", path: "/junior/news-homepage" },
  ],
  newbie: [
    { title: "QR Code", path: "/newbie/qr-code" },
    { title: "Huddle Dashboard", path: "/newbie/huddle-sis" },
    { title: "Single Price Grid", path: "/newbie/single-price-grid" },
    { title: "Intro Signup Form", path: "/newbie/intro-signup-form" },
  ],
};