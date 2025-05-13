import {
  BackButton,
  MDericAttribution
} from "@shared/components";
import { HuddleDashboard } from "./HuddleDashboard";

import "../styles/style.css";

export function HuddleSISContainerPage() {
  return (
    <div className="min-h-screen huddle-container">
      {/* Desktop Background */}
      <div className="z-10 huddle-bg-layer">
        <div className="flex flex-col justify-between font-sans p-4">
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
