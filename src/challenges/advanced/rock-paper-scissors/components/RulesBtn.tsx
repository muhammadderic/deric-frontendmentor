import { useRPSDispatch } from "../store";
import { setRulesIsOpen } from "../store/rpsSlice";

export function RulesBtn() {
  const dispatch = useRPSDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(setRulesIsOpen(true))}
      className="w-[30%] lg:w-[10%] my-4 mx-auto lg:my-4 lg:mr-4 lg:mb-12 lg:ml-auto py-2 px-8 font-inherit font-bold tracking-[3px] uppercase bg-transparent text-white border border-white rounded-md cursor-pointer hover:bg-white/10 transition-colors"
    >
      Rules
    </button>
  );
}