import { component$ } from "@builder.io/qwik";
import { HomeHeader } from "./HomeHeader";
import { BuyNowCarousel } from "~/components/BuyNowCarousel";
import { HomeIntro } from "./HomeIntro";
import { HomeInfo } from "./HomeInfo";
import { HomePlus } from "./HomePlus";
import { HomeACP } from "./HomeACP";

export const Home = component$(() => {
  return (
    <div class="bg-black" id="home">
      <HomeHeader />
      <BuyNowCarousel />
      <HomeIntro />
      <BuyNowCarousel />
      <div class="flex items-center justify-center px-8 py-[100px] text-[80px]">
        <img
          src="assets/UwifiGrid.png"
          alt=""
          class="max-w-[1200px]"
          width={"100%"}
          height={500}
        />
      </div>
      <BuyNowCarousel />
      <div id="plan">
        <HomeInfo />
      </div>
      <HomePlus />
      <BuyNowCarousel />
      <div id="acp">
        <HomeACP />
      </div>
    </div>
  );
});
