import { Provider } from "react-redux";

import {
  BackButton,
  MDericAttribution
} from "@shared/components";

import '@assets/styles/rps-styles.css';

import { store } from "../store";
import { RPSPage } from "./RPSPage";

export function RPSContainerPage() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-sans p-4 rps-root">
        <div>
          <BackButton to="/" />
        </div>

        <RPSPage />

        {/* Attribution */}
        <MDericAttribution />
      </div>
    </Provider>
  );
}
