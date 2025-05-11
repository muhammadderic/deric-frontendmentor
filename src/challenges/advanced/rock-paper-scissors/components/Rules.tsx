import { useRPSDispatch } from "../store";
import { setRulesIsOpen } from "../store/rpsSlice";

import imageRules from "@assets/advanced/rock-paper-scissors/image-rules.svg";

export function Rules() {
  const dispatch = useRPSDispatch();

  return (
    <div className="fixed inset-0 z-10">
      {/* Overlay - hidden on mobile, visible on desktop */}
      <div className="hidden lg:block absolute inset-0 bg-black/50 z-5"></div>

      {/* Main container */}
      <div className="relative z-20 w-full h-full flex justify-center items-center lg:h-1/2 lg:max-w-[30%] lg:mx-auto lg:my-0 lg:p-10 lg:rounded-lg bg-white">
        <div className="h-4/5 lg:h-full flex flex-col lg:flex-row justify-between lg:justify-center lg:items-center lg:relative">
          <h2 className="order-1 uppercase text-[35px] lg:text-3xl lg:absolute lg:left-0 lg:top-0 text-black text-center lg:m-0">
            rules
          </h2>

          <button
            type="button"
            onClick={() => dispatch(setRulesIsOpen(false))}
            className="order-3 lg:order-2 text-4xl lg:text-2xl lg:absolute lg:right-0 lg:top-0 bg-transparent border-none outline-none cursor-pointer opacity-25 hover:opacity-100 transition-opacity duration-100"
          >
            x
          </button>

          <img
            src={imageRules}
            alt="rules"
            className="order-2 lg:order-3 w-full lg:w-4/5 lg:mt-8"
          />
        </div>
      </div>
    </div>
  );
}