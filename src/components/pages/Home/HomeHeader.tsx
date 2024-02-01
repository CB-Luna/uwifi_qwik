import { component$ } from "@builder.io/qwik";
import { MainButton } from "~/components/MainButton";

export const HomeHeader = component$(() => {
  return (
    <header class="relative z-20 h-[760px] w-full">
      <video
        class="absolute left-0 top-0 h-full w-full object-cover"
        src="https://uwif-astro-web.vercel.app/videos/uwifi-opener-final.mp4"
        autoplay
        muted
        loop
      ></video>
      <div class="absolute bottom-[70px] left-0 flex items-center gap-4 rounded-r-full  p-4 backdrop-blur-xl max-[800px]:flex-col max-[800px]:rounded-r-[30px]">
        <MainButton isHollow>BUY NOW</MainButton>
        <span class="text-[22px] font-[700] text-white">OR</span>
        <MainButton>APPLY FOR FREE WIFI</MainButton>
      </div>
    </header>
  );
});
