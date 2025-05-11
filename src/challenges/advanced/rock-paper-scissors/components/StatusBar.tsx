import { useRPSSelector } from "../store";
import logo from "@assets/advanced/rock-paper-scissors/logo.svg";

export function StatusBar() {
  const { score } = useRPSSelector((state) => state.rps);

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-full lg:max-w-[60%] mx-auto p-4 lg:p-2 lg:px-8 flex justify-between items-center border-3 lg:border-5 border-solid border-white rounded-lg lg:h-[150px]">
        <img
          src={logo}
          alt="logo"
          className="h-16 lg:h-24"
        />

        <div className="py-2 px-4 lg:py-4 lg:px-8 xl:py-4 xl:px-12 flex flex-col justify-between bg-white text-center rounded-lg">
          <p className="m-0 tracking-wide uppercase text-sm lg:text-2xl xl:text-3xl">
            score
          </p>
          <p className="m-0 text-3xl lg:text-4xl xl:text-6xl font-bold">
            {score}
          </p>
        </div>
      </div>
    </div>
  );
}