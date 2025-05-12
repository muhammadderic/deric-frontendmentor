import { Provider } from "react-redux";

import { Calculator } from "./Calculator";
import { store } from "../store";

import '../styles/calculator-theme.css';

export function CalcContainerPage() {
  return (
    <Provider store={store}>
      <div>
        <Calculator />
      </div>
    </Provider>
  );
}
