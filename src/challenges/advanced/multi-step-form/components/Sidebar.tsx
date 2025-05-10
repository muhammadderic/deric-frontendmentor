import { useAppSelector } from '../store/hooks';
import { SidebarItem } from './SidebarItem';

export function Sidebar() {
  const step = useAppSelector(state => state.step.value);

  return (
    <div className={`
      w-full h-[25%] lg:h-full
      pt-4 lg:p-6 xl:p-8
      flex justify-center gap-2 lg:flex-col lg:justify-start lg:gap-6 xl:gap-8
      lg:row-span-2 lg:rounded-xl
      absolute top-0 left-0 lg:relative
      z-0
      bg-cover bg-center
      bg-[url('@assets/multi-step-from/bg-sidebar-mobile.svg')]
      lg:bg-[url('@assets/multi-step-from/bg-sidebar-desktop.svg')]
    `}>
      <SidebarItem number="1" title="Step 1" text="Your info" status={step === 0} />
      <SidebarItem number="2" title="Step 2" text="Select plan" status={step === 1} />
      <SidebarItem number="3" title="Step 3" text="Add-ons" status={step === 2} />
      <SidebarItem number="4" title="Step 4" text="Summary" status={step === 3} />
    </div>
  );
}