import { SummaryAddOn } from "./SummaryAddOn";
import { useAppSelector } from "../store/hooks";

export function Summary() {
  const { selected, time } = useAppSelector(state => state.userPlan);
  const { data, totalPrice } = useAppSelector(state => state.addOns);

  return (
    <div id="summary">
      <div className="p-4 lg:p-2 flex flex-col bg-[#f8f9fe] rounded-lg">
        <div className="p-4 lg:p-2 flex justify-between">
          <div>
            <p className="font-bold text-[#02295a] capitalize lg:text-sm">
              {selected.userPlanTitle} ({time})
            </p>
            <a
              href="/"
              className="text-[#473dff] visited:text-[#473dff] underline lg:text-sm hover:opacity-80 transition-opacity"
            >
              Change
            </a>
          </div>
          <div className="font-bold text-[#02295a]">
            ${selected.userPlanPrice}/yr
          </div>
        </div>

        <div className="border-t border-[#e2e5f0]"></div>

        {Object.values(data)
          .filter(addOn => addOn.addOnStatus) // Only show if selected
          .map((addOn) => (
            <SummaryAddOn
              key={addOn.addOnTitle}
              title={addOn.addOnTitle}
              price={addOn.addOnPrice}
            />
          ))}
      </div>

      <div className="p-8 lg:p-4 flex justify-between">
        <p className="text-[#9699ab] lg:text-sm">
          Total (per-year)
        </p>
        <p className="font-bold text-[#473dff] lg:text-base">
          ${totalPrice}/yr
        </p>
      </div>
    </div>
  );
}