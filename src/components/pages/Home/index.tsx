import { component$ } from "@builder.io/qwik";
import { HomeHeader } from "./HomeHeader";
import { BuyNowCarousel } from "~/components/BuyNowCarousel";
import { HomeIntro } from "./HomeIntro";

export const Home = component$(() => {
  return (
    <div class="bg-black">
      <HomeHeader />
      <BuyNowCarousel />
      <HomeIntro />
      <BuyNowCarousel />
      <div class="flex items-center justify-center p-8 text-[80px]">
        <img
          src="assets/UwifiGrid.png"
          alt=""
          class="max-w-[1200px]"
          width={"100%"}
          height={500}
        />
      </div>
      <BuyNowCarousel />
    </div>
  );
});
