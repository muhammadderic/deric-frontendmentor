import {
  MainContent,
  Sidebar,
  StepButtons
} from "../components";

import { useAppSelector } from "../store/hooks";

export function MultiStepForm() {
  const step = useAppSelector(state => state.step.value);

  return (
    <div className="pt-20 lg:pt-2 relative lg:flex lg:justify-center lg:items-center">
      <div className="
        h-full lg:h-[75vh] lg:w-[50vw]
        lg:grid lg:grid-cols-[1fr_2fr] lg:grid-rows-[80%_20%]
        lg:bg-white lg:rounded-xl lg:shadow-[0_1px_4px_rgba(0,0,0,0.16)]
        lg:overflow-hidden
        relative p-4
      ">
        <Sidebar />
        {step === 0 && <MainContent title="Personal info" subtitle="Please provide your name, email address, and phone number." />}
        {step === 1 && <MainContent title="Select your plan" subtitle="You have the option of monthly or yearly billing." />}
        {step === 2 && <MainContent title="Pick add-ons" subtitle="Add-ons help enhance your gaming experience." />}
        {step === 3 && <MainContent title="Finishing up" subtitle="Double-check everything looks OK before confirming." />}
        {step === 4 && <MainContent title="" subtitle="" />}
        {step === 4 ? "" : <StepButtons />}
      </div>
    </div>
  );
}