import {
  BackButton,
  MDericAttribution
} from "@shared/components";
import { HuddleDashboard } from "./HuddleDashboard";

import "../styles/style.css";

export function HuddleSISContainerPage() {
  return (
    <div className="huddle-container">
      {/* Desktop Background */}
      <div className="absolute inset-0 huddle-bg-layer" />
      <div className="absolute content z-10">
        <div className="min-h-screen flex flex-col justify-between font-sans p-4">
          <div>
            <BackButton to="/" />
          </div>

          <HuddleDashboard />

          {/* Attribution */}
          <MDericAttribution />
        </div>
      </div>
    </div>
  );
}
