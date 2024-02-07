import { component$ } from "@builder.io/qwik";
import { MainButton } from "~/components/MainButton";

export const HomeHeader = component$(() => {
  return (
    <header class="relative z-20 h-[760px] flex justify-center w-full">
      <video
        class="absolute left-0 top-0 h-full w-full object-cover"
        src="public/assets/u-wifi-opener-prod.mp4"
        autoplay
        muted
        loop
      ></video>
      <div class="absolute bottom-[50px] flex items-center gap-4 flex-col">
      <div class="rounded-full p-4 backdrop-blur-xl bg-black/40 max-[800px]:flex-col inline-flex items-center gap-2 ">
        <MainButton isHollow={false} whiteBorder={false} link="">Apply for free WiFi</MainButton>
        <span class=" font-[700] text-white">Or</span>
        <MainButton isHollow={true} whiteBorder={true} link="">Buy Now</MainButton>
      </div>
      <span>Hola</span>
      </div>
    </header>
  );
});
