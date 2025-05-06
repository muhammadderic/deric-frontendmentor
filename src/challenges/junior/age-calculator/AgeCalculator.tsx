import { useState } from "react";
import { ArrowDown } from "lucide-react";

import { BackButton } from "@components/BackButton";
import { MDericAttribution } from "@components/MDericAttribution";

export default function AgeCalculator() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [errorDay, setErrorDay] = useState(false);
  const [errorMonth, setErrorMonth] = useState(false);
  const [errorYear, setErrorYear] = useState(false);

  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // reset errors
    setErrorDay(false);
    setErrorMonth(false);
    setErrorYear(false);

    const d = parseInt(day);
    const m = parseInt(month);
    const y = parseInt(year);

    let valid = true;

    if (!(d >= 1 && d <= 31)) {
      setErrorDay(true);
      valid = false;
    }
    if (!(m >= 1 && m <= 12)) {
      setErrorMonth(true);
      valid = false;
    }
    if (!(y >= 1 && y <= new Date().getFullYear())) {
      setErrorYear(true);
      valid = false;
    }

    if (!valid) return;

    // calculate age
    const today = new Date();
    let calcYear = today.getFullYear() - y;
    let calcMonth = today.getMonth() + 1 - m;
    let calcDay = today.getDate() - d;

    if (calcDay < 0) {
      calcDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      calcMonth--;
    }
    if (calcMonth < 0) {
      calcMonth += 12;
      calcYear--;
    }

    setAge({
      years: calcYear.toString(),
      months: calcMonth.toString(),
      days: calcDay.toString(),
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-200 font-sans p-4">
      <div>
        <BackButton to="/" />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[90%] md:w-[60%] lg:w-[40%] bg-white p-8 rounded-2xl rounded-br-[4rem] shadow">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row justify-between border-b-2 border-gray-300 pb-6"
          >
            <div className="flex gap-4">
              {/* Day */}
              <div className="flex flex-col">
                <label
                  htmlFor="day"
                  className={`text-xs font-bold tracking-[3px] ${errorDay ? "text-red-500" : "text-gray-500"
                    }`}
                >
                  DAY
                </label>
                <input
                  type="number"
                  id="day"
                  placeholder="DD"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className={`w-20 sm:w-24 p-2 text-xl font-bold rounded-md border ${errorDay ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-purple-500`}
                />
                {errorDay && (
                  <p className="text-red-500 text-xs mt-1">Must be a valid day</p>
                )}
              </div>

              {/* Month */}
              <div className="flex flex-col">
                <label
                  htmlFor="month"
                  className={`text-xs font-bold tracking-[3px] ${errorMonth ? "text-red-500" : "text-gray-500"
                    }`}
                >
                  MONTH
                </label>
                <input
                  type="number"
                  id="month"
                  placeholder="MM"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className={`w-20 sm:w-24 p-2 text-xl font-bold rounded-md border ${errorMonth ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-purple-500`}
                />
                {errorMonth && (
                  <p className="text-red-500 text-xs mt-1">
                    Must be a valid month
                  </p>
                )}
              </div>

              {/* Year */}
              <div className="flex flex-col">
                <label
                  htmlFor="year"
                  className={`text-xs font-bold tracking-[3px] ${errorYear ? "text-red-500" : "text-gray-500"
                    }`}
                >
                  YEAR
                </label>
                <input
                  type="number"
                  id="year"
                  placeholder="YYYY"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className={`w-24 sm:w-28 p-2 text-xl font-bold rounded-md border ${errorYear ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-purple-500`}
                />
                {errorYear && (
                  <p className="text-red-500 text-xs mt-1">Must be a valid year</p>
                )}
              </div>
            </div>

            {/* Submit button */}
            <div className="relative mt-6 md:mt-0 md:w-20 flex justify-center">
              <button
                type="submit"
                className="cursor-pointer absolute -bottom-8 md:-bottom-16 bg-purple-500 hover:bg-purple-700 p-4 rounded-full transition text-white"
              >
                <ArrowDown size={64} />
              </button>
            </div>
          </form>

          {/* Show Age */}
          <div className="mt-8 text-5xl md:text-6xl font-extrabold italic leading-snug">
            <div className="flex">
              <p className="text-purple-500">{age.years}</p>
              <p className="ml-2">years</p>
            </div>
            <div className="flex">
              <p className="text-purple-500">{age.months}</p>
              <p className="ml-2">months</p>
            </div>
            <div className="flex">
              <p className="text-purple-500">{age.days}</p>
              <p className="ml-2">days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attribution */}
      <MDericAttribution />
    </div>
  );
}
