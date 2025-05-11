import {
  useState,
  useEffect
} from "react";

import {
  useRPSDispatch,
  useRPSSelector
} from "../store";
import {
  incrementScore,
  resetChoice,
  setScore
} from "../store/rpsSlice";

import Choice from "./Choice";

import rock from "@assets/advanced/rock-paper-scissors/icon-rock.svg";
import paper from "@assets/advanced/rock-paper-scissors/icon-paper.svg";
import scissors from "@assets/advanced/rock-paper-scissors/icon-scissors.svg";


interface ChoiceType {
  borderColor: string;
  shadowColor: string;
  name: string;
  img: string;
}

const choices: ChoiceType[] = [
  {
    borderColor: "hsl(229deg 85% 63%)",
    shadowColor: "hsl(229deg 65% 46%)",
    name: "paper",
    img: paper,
  },
  {
    borderColor: "hsl(39deg 84% 51%)",
    shadowColor: "hsl(28deg 75% 45%)",
    name: "scissors",
    img: scissors,
  },
  {
    borderColor: "hsl(349deg 68% 53%)",
    shadowColor: "hsl(348deg 74% 35%)",
    name: "rock",
    img: rock,
  },
];

const checkStatus = (firstChoice: string, secondChoice: string): "win" | "lose" | "draw" => {
  const wins = ["paper,rock", "rock,scissors", "scissors,paper"];
  if (firstChoice === secondChoice) {
    return "draw";
  } else if (wins.includes(`${firstChoice},${secondChoice}`)) {
    return "win";
  } else {
    return "lose";
  }
}

export function ResultArea() {
  const { choice } = useRPSSelector((state) => state.rps);
  const dispatch = useRPSDispatch();

  const [houseChoice, setHouseChoice] = useState<ChoiceType | null>(null);
  const [status, setStatus] = useState<"win" | "lose" | "draw" | null>(null);

  useEffect(() => {
    setHouseChoice(null);
    setTimeout(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setHouseChoice(randomChoice);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!houseChoice || !choice) return;
    const result = checkStatus(choice.name, houseChoice.name);
    if (result === "win") {
      dispatch(incrementScore());
    }
    setStatus(result);
  }, [houseChoice, choice, setScore]);

  const playAgain = () => {
    dispatch(resetChoice());
  };

  // Custom animation for opponent waiting state
  const waitingAnimation = `
    @keyframes waitOpponent {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 0.2; }
    }
    .animate-wait-opponent {
      animation: waitOpponent 1s infinite;
    }
  `;

  if (!choice) return null;

  return (
    <>
      <style>{waitingAnimation}</style>
      <div className="h-[calc(100vh-170px)] flex flex-col items-center justify-center">
        <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-16">

          {/* Your Choice */}
          <div className="choice-wrapper flex flex-col items-center gap-4 relative order-1">
            <div className={`relative ${status === "win" ? "win" : ""}`}>
              <Choice {...choice} />
              {status === "win" && (
                <div className="absolute inset-0 rounded-full lg:shadow-win-pulse shadow-win-pulse-mobile" />
              )}
            </div>
            <h3 className="mb-12 lg:mb-0 text-white text-sm lg:text-base uppercase text-center tracking-wide">
              you picked
            </h3>
          </div>

          {/* Result */}
          {status ? (
            <div className="flex flex-col justify-center order-3 lg:order-2 col-span-2 lg:col-span-1 mx-auto">
              <h2 className="m-0 text-3xl lg:text-4xl text-center uppercase tracking-wider text-white">
                {status}
              </h2>
              <button
                type="button"
                onClick={playAgain}
                className="w-24 lg:w-36 mt-4 py-2 px-3 text-xs lg:text-base font-bold font-inherit uppercase tracking-wide bg-white border-none rounded-md outline-none shadow-md cursor-pointer hover:bg-gray-100 transition-colors"
              >
                play again
              </button>
            </div>
          ) : (
            <div className="order-3 lg:order-2 col-span-2 lg:col-span-1"></div>
          )}

          {/* Opponent Choice */}
          <div className="choice-wrapper flex flex-col items-center gap-4 relative order-2 lg:order-3">
            {houseChoice ? (
              <div className={`relative ${status === "lose" ? "win" : ""}`}>
                <Choice {...houseChoice} />
                {status === "lose" && (
                  <div className="absolute inset-0 rounded-full lg:shadow-win-pulse shadow-win-pulse-mobile" />
                )}
              </div>
            ) : (
              <div className="w-[100px] h-[100px] p-2 bg-black/40 rounded-full animate-wait-opponent" />
            )}
            <h3 className="mb-12 lg:mb-0 text-white text-sm lg:text-base uppercase text-center tracking-wide">
              the house picked
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}