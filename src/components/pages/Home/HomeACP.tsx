import { component$ } from "@builder.io/qwik";
import { MainButton } from "~/components/MainButton";

import {
  FaWifiSolid,
  FaPencilSolid,
  FaBoxOpenSolid,
} from "@qwikest/icons/font-awesome";

export const HomeACP = component$(() => {
  return (
    <div class="flex items-center justify-center">
      <div class="flex w-full max-w-[1200px] flex-col items-center justify-center gap-8 px-8 py-16">
        <div class="text-[70px] font-[400]">
          We are an <span class="text-secondary-purple">ACP</span> provider
        </div>
        <p class="max-w-[900px] text-center text-[28px] leading-9">
          We're keeping people connected by participation in the FCC's
          Affordable Connectivity Program. Qualifying households will be able to
          receive a $30/mo discount on their U-wifi Plan.
        </p>
        <div class="flex items-center gap-4 py-12 max-[900px]:flex-col">
          <img
            src="https://uwif-astro-web.vercel.app/image/fc.png"
            alt=""
            width={220}
            height={220}
          />
          <div class="flex flex-col gap-4 text-[32px] font-[700]">
            <span>AFFORDABLE</span>
            <span>CONNECTIVITY</span>
            <span>PROGRAM</span>
          </div>
        </div>
        <div class="flex items-center gap-4 max-[800px]:flex-col">
          <MainButton isHollow>BUY NOW</MainButton>
          <span class="text-[24px] font-[600]">OR</span>
          <MainButton>APPLY FOR FREE WIFI</MainButton>
        </div>
        <div class="flex items-center gap-4 py-16 max-[1000px]:flex-col">
          {[
            {
              icon: FaPencilSolid,
              title: "Enroll",
              text: "Complete a short questionnaire to check if you qualify for Lifeline and the Affordable Connectivity Program (ACP), a federal initiative ensuring broadband access for all Americans.",
            },
            {
              icon: FaBoxOpenSolid,
              title: "Activate",
              text: "Once you're approved, we'll send your 5G device for free. When your package arrives, just follow the instructions and you'll be connected in no time!",
            },
            {
              icon: FaWifiSolid,
              title: "Use",
              text: "Keeping your service is as simple as doing what you love.",
            },
          ].map(
            (item: { icon: any; title: string; text: string }, i: number) => {
              return (
                <div
                  key={i}
                  class="flex h-[420px] max-w-[300px] flex-col items-center gap-4 rounded-2xl border-2 border-white p-8 text-center text-[20px] font-[400] text-white max-[1000px]:h-fit "
                >
                  <div class="mb-4 text-[50px]">
                    <item.icon></item.icon>
                  </div>
                  <h2 class="text-[32px] font-[600]">{item.title}</h2>
                  <p class="text-justify text-[22px]">{item.text}</p>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
});
