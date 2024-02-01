import { component$ } from "@builder.io/qwik";
import { MainButton } from "~/components/MainButton";

export const HomeIntro = component$(() => {
  return (
    <div class="flex justify-center">
      <div class="flex max-w-[1600px] gap-8 px-8 py-[140px]">
        <div class="flex w-[60%] flex-col gap-4">
          <span class="w-fit bg-gradient-to-r from-secondary-purple to-primary-green bg-clip-text text-[90px] font-[800] text-transparent">
            The best internet
          </span>
          <div class="flex items-end gap-8">
            <span class="text-[90px] font-[300]">connection for</span>
            <img
              src="https://uwif-astro-web.vercel.app/faviui.png"
              width={80}
              height={80}
              class="pb-2"
            />
          </div>
          <p class="text-[36px] leading-10">
            In our fast-paced world, imagine a high-speed home internet service
            that keeps you connected, outpaces the competition, all at a
            pleasantly surprising low cost!
          </p>
          <div class="flex items-center gap-4">
            <MainButton isHollow>BUY NOW</MainButton>
            <span class="text-[22px] font-[700] text-white">OR</span>
            <MainButton>APPLY FOR FREE WIFI</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
});
