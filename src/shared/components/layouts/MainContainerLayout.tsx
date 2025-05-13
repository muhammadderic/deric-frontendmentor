import { Outlet } from "react-router-dom";

import {
  BackButton,
  MDericAttribution
} from "@shared/components";

export function MainContainerLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-sans p-4">
      <div>
        <BackButton to="/" />
      </div>

      <Outlet />

      {/* Attribution */}
      <MDericAttribution />
    </div>
  );
}
