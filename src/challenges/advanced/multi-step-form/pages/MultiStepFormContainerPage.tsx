import { Provider } from "react-redux";

import {
  BackButton,
  MDericAttribution
} from "@shared/components";

import { store } from "../store";
import { MultiStepForm } from "./MultiStepForm";

export function MultiStepFormContainerPage() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-sans p-4">
        <div>
          <BackButton to="/" />
        </div>

        <MultiStepForm />

        {/* Attribution */}
        <MDericAttribution />
      </div>
    </Provider>
  );
}
