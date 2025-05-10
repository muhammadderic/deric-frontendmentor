import { MainContentTitle } from "./MainContentTitle";
import { Confirmation } from "./Confirmation";
import { PersonalInfo } from "./PersonalInfo";
import { UserPlan } from "./UserPlan";
import { Summary } from "./Summary";
import { AddOns } from "./AddOns";

import { useAppSelector } from "../store/hooks";

interface MainContentProps {
  title: string;
  subtitle: string;
}

export function MainContent({
  title,
  subtitle
}: MainContentProps) {
  const step = useAppSelector(state => state.step.value);

  return (
    <div className={`
      w-[90%] p-5 lg:p-4 xl:p-12
      mx-auto
      bg-white rounded-xl
      shadow-[0_1px_4px_rgba(0,0,0,0.16)] lg:shadow-none
      relative z-[100]
    `}>
      {step !== 4 && <MainContentTitle title={title} subtitle={subtitle} />}
      {step === 0 && <PersonalInfo />}
      {step === 1 && <UserPlan />}
      {step === 2 && <AddOns />}
      {step === 3 && <Summary />}
      {step === 4 && <Confirmation />}
    </div>
  )
}