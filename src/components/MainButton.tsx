import { Slot, component$ } from "@builder.io/qwik";
import { FaAngleRightSolid } from "@qwikest/icons/font-awesome";

export const MainButton = component$(
  ({
    isHollow = false,
    whiteBorder = false,
    link = "https://cb-luna.github.io/uwifi_map_services_acp_build/",
  }: {
    isHollow: boolean;
    whiteBorder: boolean;
    link: string;
  }) => {
    return (
      <div
        onClick$={() => {
          const newLink =
            isHollow &&
            link === "https://cb-luna.github.io/uwifi_map_services_acp_build/"
              ? "https://cb-luna.github.io/uwifi_map_services-build/"
              : link;
          if (newLink.startsWith("http") || newLink.startsWith("www"))
            window.open(newLink, "_blank");
          else window.open(newLink, "_self");
        }}
        class={`${isHollow ? "bg-transparent" : "bg-button-green"}
        flex w-fit cursor-pointer gap-1 overflow-clip rounded-full border-[3px] ${whiteBorder ? "border-white" : "border-[#00c207]"} items-center from-[#2ed5de] via-[#2e74de] to-[#d201d2] p-4 text-[25px] font-[200] tracking-tight text-white transition-all hover:border-y-transparent hover:border-l-[#2ed5de] hover:border-r-[#d201d2] hover:bg-gradient-to-r max-[800px]:text-[20px] max-[400px]:text-[18px]`}
      >
        <span>
          <Slot />
        </span>
        <FaAngleRightSolid />
      </div>
    );
  },
);
