import { component$ } from "@builder.io/qwik";
import { MainButton } from "~/components/MainButton";

export const HomeIntro = component$(() => {
  return (
    <div class="flex justify-center">
      <div class="flex max-w-[1600px] items-center gap-8 px-8 py-[140px] max-[900px]:flex-col">
        <div class="flex flex-col items-center gap-4 min-[900px]:w-[60%]">
          <span class="w-fit bg-gradient-to-r from-secondary-purple to-primary-green bg-clip-text text-[90px] font-[800] text-transparent max-[900px]:text-[60px] max-[500px]:text-[40px]">
            The best internet
          </span>
          <div class="flex flex-wrap items-end gap-4 text-[90px] font-[300] max-[900px]:text-[50px] max-[500px]:text-[40px]">
            <span>connection </span>
            <span class="flex items-end gap-8">
              for{" "}
              <img
                src="https://uwif-astro-web.vercel.app/faviui.png"
                width={80}
                height={80}
                class="pb-2 max-[900px]:w-[50px]"
              />
            </span>
          </div>
          <p class="text-[36px] leading-10 max-[900px]:text-[24px]">
            In our fast-paced world, imagine a high-speed home internet service
            that keeps you connected, outpaces the competition, all at a
            pleasantly surprising low cost!
          </p>
          <div class="flex items-center gap-4 max-[800px]:flex-col">
            <MainButton isHollow>BUY NOW</MainButton>
            <span class="text-[22px] font-[700] text-white">OR</span>
            <MainButton>APPLY FOR FREE WIFI</MainButton>
          </div>
        </div>
        <div class="flex items-center justify-center min-[900px]:w-[40%]">
          <img
            src="https://s3-alpha-sig.figma.com/img/e059/542a/4d1794e0567615e3760a3d4dbc43a95a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ers1Gk7SvN2XLduk1YBdk4yzptrCSFVQMQrZjAVoPzuNyIw-PQkzvzgne3nz55DvQXca1uMJnFJ3AvXwvelgMULk4RTbAXj0aW9sv0ZJVKzmJ2V7ze0qb-05EJuo~kBIxJxpWKvXP4ACblwLbEq8jD33g8wV0aTMQgLeh68ZijCcxVu7OGwg~knqB19HKDksbPWwGPccgyO5kCaqt8o6d-UctcVcmI84ZSMCnK9zmj4fYy-fQmrQs-Z9VkOPny62yN2yD2VN5sZ3eXX8OLgaEsJhqUXoA4vOorBdtV8vvQmleIGXKRENqZW1uSP~J56a2P4pCUqSZCA4-b9qLN99-w__"
            alt=""
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
});
