import { component$ } from "@builder.io/qwik";
import { MainButton } from "~/components/MainButton";

export const HomeHeader = component$(() => {
  return (
    <header class="relative z-20 h-[760px] w-full">
      <video
        class="absolute left-0 top-0 h-full w-full object-cover"
        src="https://uwif-astro-web.vercel.app/videos/u-wifi-opener.mp4"
        autoplay
        muted
        loop
      ></video>
      <div class="absolute bottom-[70px] left-0 flex h-[100px] items-center gap-4 rounded-r-full bg-black bg-opacity-90 p-4">
        <MainButton isHollow>BUY NOW</MainButton>
        <span class="text-[22px] font-[700] text-white">OR</span>
        <MainButton>APPLY FOR FREE WIFI</MainButton>
      </div>
    </header>
  );
});
