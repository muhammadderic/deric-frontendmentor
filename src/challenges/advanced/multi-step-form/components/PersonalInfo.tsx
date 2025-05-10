import type { PersonalInfoData } from "../store/types";
import {
  useAppDispatch,
  useAppSelector
} from "../store/hooks";
import { updatePersonalInfo } from "../store/slices/personalInfoSlice";

export function PersonalInfo() {
  const dispatch = useAppDispatch();
  const {
    name,
    email,
    phone
  } = useAppSelector(state => state.personalInfo.data);
  const {
    errorName,
    errorEmail,
    errorPhone
  } = useAppSelector(state => state.personalInfo.errors);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Cast 'name' to the specific type required by your action
    const name = e.target.name as keyof PersonalInfoData;
    const value = e.target.value;

    dispatch(updatePersonalInfo({ name, value }));
  };

  return (
    <form>
      <div className="pb-4 flex flex-col gap-2 lg:gap-0">
        <label
          htmlFor="name"
          className="text-sm text-[#02295a] lg:mb-0.5"
        >
          Name
        </label>
        <input
          className="px-4 py-2 lg:py-[0.6rem] xl:py-[0.8rem] border border-[#9699ab] rounded focus:border-[#473dff] outline-none transition-colors"
          type="text"
          id="name"
          name="name"
          defaultValue={name}
          onChange={handleChange}
          placeholder="e.g. Stephen King"
        />
        <p className={`text-sm font-bold text-[#ed3548] ${errorName ? "" : "hidden"} lg:absolute lg:right-12`}>
          This field is required
        </p>
      </div>

      <div className="pb-4 flex flex-col gap-2 lg:gap-0">
        <label
          htmlFor="email"
          className="text-sm text-[#02295a] lg:mb-0.5"
        >
          Email Address
        </label>
        <input
          className="px-4 py-2 lg:py-[0.6rem] xl:py-[0.8rem] border border-[#9699ab] rounded focus:border-[#473dff] outline-none transition-colors"
          type="text"
          id="email"
          name="email"
          defaultValue={email}
          onChange={handleChange}
          placeholder="e.g. stephenking@lorem.com"
        />
        <p className={`text-sm font-bold text-[#ed3548] ${errorEmail ? "" : "hidden"} lg:absolute lg:right-12`}>
          This field is required
        </p>
      </div>

      <div className="pb-4 flex flex-col gap-2 lg:gap-0">
        <label
          htmlFor="phone"
          className="text-sm text-[#02295a] lg:mb-0.5"
        >
          Phone Number
        </label>
        <input
          className="px-4 py-2 lg:py-[0.6rem] xl:py-[0.8rem] border border-[#9699ab] rounded focus:border-[#473dff] outline-none transition-colors"
          type="tel"
          id="phone"
          name="phone"
          defaultValue={phone}
          onChange={handleChange}
          placeholder="e.g. +1 234 567 890"
        />
        <p className={`text-sm font-bold text-[#ed3548] ${errorPhone ? "" : "hidden"} lg:absolute lg:right-12`}>
          This field is required
        </p>
      </div>
    </form>
  );
}