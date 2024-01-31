import { Slot, component$ } from "@builder.io/qwik";
import { FaAngleRightSolid } from "@qwikest/icons/font-awesome";

export const MainButton = component$(
  ({
    isHollow = false,
    whiteBorder = false,
  }: {
    isHollow: boolean;
    whiteBorder: boolean;
  }) => {
    return (
      <div
        class={`${isHollow ? "bg-transparent" : "bg-button-green"}
        flex w-fit gap-1 overflow-clip rounded-full border-[3px] ${whiteBorder ? "border-white" : "border-[#00c207]"} from-[#2ed5de] via-[#2e74de] to-[#d201d2] p-4 text-[25px] font-[200] tracking-tight text-white transition-all hover:border-y-transparent hover:border-l-[#2ed5de] hover:border-r-[#d201d2] hover:bg-gradient-to-r`}
      >
        <span>
          <Slot />
        </span>
        <FaAngleRightSolid />
      </div>
    );
  },
);
