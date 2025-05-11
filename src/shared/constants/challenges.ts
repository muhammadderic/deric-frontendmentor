import type { ChallengeGroups } from "@shared/types/types";

export const challenges: ChallengeGroups = {
  newbie: [
    { title: "QR Code", path: "/newbie/qr-code" },
  ],
  junior: [
    { title: "Age Calculator", path: "/junior/age-calc" },
    { title: "News Homepage", path: "/junior/news-homepage" },
  ],
  intermediate: [
    { title: "E-Commerce Product Page", path: "/inter/ecom-prod" },
    { title: "Interactive Comments", path: "/inter/interactive-comments" },
  ],
  advanced: [
    { title: "Multi-Step Form", path: "/adv/multi-step-form" },
    { title: "Rock Paper Scissors", path: "/adv/rps" },
  ],
};