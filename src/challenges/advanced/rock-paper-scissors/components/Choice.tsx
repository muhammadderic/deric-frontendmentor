import { useRPSDispatch } from "../store";
import { setChoice } from "../store/rpsSlice";

interface ChoiceProps {
  name: string;
  img: string;
  borderColor: string;
  shadowColor: string;
  hover?: boolean;
  className?: string;
}

function Choice({ name, img, borderColor, shadowColor, hover, className = "" }: ChoiceProps) {
  const dispatch = useRPSDispatch();

  const handleClick = () => {
    dispatch(setChoice({
      name,
      borderColor,
      shadowColor,
      img
    }));
  };

  return (
    <div
      className={`
        w-[100px] h-[100px] p-2 rounded-full cursor-pointer
        lg:w-[170px] lg:h-[170px] lg:p-5 lg:mx-auto
        ${hover ? 'hover:shadow-[0_3px_rgba(0,0,0,0.3)] hover:translate-y-2.5 transition-all' : ''}
        ${className} choice
      `}
      style={{
        backgroundColor: borderColor,
        boxShadow: `0 8px ${shadowColor}, 0 11px rgba(0, 0, 0, 0.3)`
      }}
      onClick={handleClick}
    >
      <div className="h-full flex justify-center items-center bg-white rounded-full shadow-[0_7px_inset_hsl(228,22%,78%)]">
        <img
          src={img}
          alt={name}
          className="lg:h-1/2"
        />
      </div>
    </div>
  );
}

export default Choice;