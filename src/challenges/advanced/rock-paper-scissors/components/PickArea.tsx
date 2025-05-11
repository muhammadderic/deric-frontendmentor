import Choice from "./Choice";

import triangle from "@assets/advanced/rock-paper-scissors/bg-triangle.svg";
import rock from "@assets/advanced/rock-paper-scissors/icon-rock.svg";
import paper from "@assets/advanced/rock-paper-scissors/icon-paper.svg";
import scissors from "@assets/advanced/rock-paper-scissors/icon-scissors.svg";

export function PickArea() {
  return (
    <div className="w-full h-full my-8 lg:my-0 flex justify-center items-center">
      <div
        className="h-full grid grid-cols-2 gap-12 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${triangle})`,
          backgroundSize: "200px",
        }}
      >
        <Choice
          img={paper}
          borderColor={"hsl(229deg 85% 63%)"}
          shadowColor={"hsl(229deg 65% 46%)"}
          hover={true}
          name="paper"
        />
        <Choice
          img={scissors}
          borderColor={"hsl(39deg 84% 51%)"}
          shadowColor={"hsl(28deg 75% 45%)"}
          hover={true}
          name="scissors"
        />
        <div className="col-span-2 mx-auto">
          <Choice
            img={rock}
            borderColor={"hsl(349deg 68% 53%)"}
            shadowColor={"hsl(348deg 74% 35%)"}
            hover={true}
            name="rock"
          />
        </div>
      </div>
    </div>
  );
}