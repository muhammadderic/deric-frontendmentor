import {
  useAppDispatch,
  useAppSelector
} from "../store/hooks";
import {
  addOnsSelected,
  priceAddOnsSelected
} from "../store/slices/addOnsSlice";
import { validatePersonalInfo } from "../store/slices/personalInfoSlice";
import {
  changeStep,
  changeStepFromStepOne
} from "../store/slices/stepSlice";

export function StepButtons() {
  const dispatch = useAppDispatch();
  const step = useAppSelector(state => state.step.value);
  const personalInfoData = useAppSelector(state => state.personalInfo.data);
  const userPlanSelected = useAppSelector(state => state.userPlan.selected);

  const handleNext = () => {
    if (step === 0) {
      // 1. Always trigger validation UI (to show errors if empty)
      dispatch(validatePersonalInfo());

      // 2. Check if every value in the data object is NOT empty
      // .trim() handles cases where a user might just type spaces
      const isValid = Object.values(personalInfoData).every(value => value.trim() !== "");

      if (isValid) {
        dispatch(changeStepFromStepOne({ direction: "next", personalInfoValid: isValid }));
      } else {
        console.log("Please fill in all fields.");
        // Optional: Trigger a local toast or alert here
      }
    }
    if (step > 0 && step <= 4) {
      if (step === 2) {
        dispatch(addOnsSelected());
        dispatch(priceAddOnsSelected());
      }
      dispatch(changeStep({ direction: "next" }));
    }
  };

  const handlePrev = () => {
    dispatch(changeStep({ direction: "prev" }));
  };

  const handleSubmit = () => {
    const data = {
      personalInfoData,
      userPlanSelected,
      addOnsSelected,
    };
    console.log(data);
    dispatch(changeStep({ direction: "last" }));
  };

  const buttonAlignment = step === 0 ? "ml-auto" : "";

  return (
    <div className={`
      w-full mt-8 p-4
      flex justify-between
      bg-white
      relative bottom-0
      lg:w-full lg:px-12 lg:mx-auto lg:items-center lg:col-start-2
      xl:px-12 xl:py-8
    `}>
      {step !== 0 && (
        <button
          className="px-4 py-2 lg:px-4 lg:py-2 xl:px-8 xl:py-4 bg-[#02295a] text-white rounded cursor-pointer hover:bg-white hover:text-[#02295a] transition-colors"
          onClick={handlePrev}
        >
          Go Back
        </button>
      )}

      {(step === 3) ? (
        <button
          className={`
            px-4 py-2 lg:px-4 lg:py-2 xl:px-8 xl:py-4
            bg-[#473dff] text-white rounded cursor-pointer
            hover:bg-white hover:text-[#473dff] transition-colors
            ${buttonAlignment}}
          `}
          onClick={handleSubmit}
        >
          {step === 3 ? "Confirm" : "Next Step"}
        </button>
      ) : (
        <button
          className={`
            px-4 py-2 lg:px-4 lg:py-2 xl:px-8 xl:py-4
            bg-[#02295a] text-white rounded cursor-pointer
            hover:bg-white hover:text-[#02295a] transition-colors
            ${step === 0 ? "ml-auto" : ""}
          `}
          onClick={handleNext}
        >
          Next Step
        </button>
      )}
    </div>
  );
}