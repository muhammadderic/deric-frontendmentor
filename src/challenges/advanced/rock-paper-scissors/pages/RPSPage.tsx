import { useRPSSelector } from "../store";
import {
  PickArea,
  ResultArea,
  Rules,
  RulesBtn,
  StatusBar
} from "../components";

export function RPSPage() {
  const { rulesIsOpen, choice } = useRPSSelector((state) => state.rps);

  return (
    <div className="pt-20 lg:pt-2 relative flex flex-col justify-between">
      {rulesIsOpen ? <Rules /> : undefined}
      <StatusBar />
      {choice ? <ResultArea /> : <PickArea />}
      <RulesBtn />
    </div>
  );
}