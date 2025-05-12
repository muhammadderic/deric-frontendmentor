import {
  BackButton,
  MDericAttribution
} from "@shared/components";

import { Calculator } from "./Calculator";

export function CalcContainerPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between font-sans p-4">
      <div>
        <BackButton to="/" />
      </div>

      <Calculator />

      {/* Attribution */}
      <MDericAttribution />
    </div>
  );
}
