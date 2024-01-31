import { component$ } from "@builder.io/qwik";
import { FaCheckSolid } from "@qwikest/icons/font-awesome";
import { MainButton } from "~/components/MainButton";
import { Markdown } from "~/components/Markdown";

export const HomeInfo = component$(() => {
  return (
    <div class="flex justify-center">
      <div class="flex max-w-[1600px] items-center gap-8 px-8 py-12">
        <div class="flex w-[60%] flex-col gap-8 text-[50px] font-[700]">
          <div>
            Don't overpay for a{" "}
            <span class="text-primary-green">stable 5G</span> home internet
            experience.
          </div>
          <div>
            JUST <span class="text-primary-green">ONE</span> PLAN?
          </div>
          <div>
            Yes, we make it <span class="text-secondary-purple">simple</span>
          </div>
          <div class="text-[30px] font-[300]">
            Discover perfection in simplicity. Our single subscription has it
            all, without the hassle.
          </div>
          <div class="flex items-end gap-4">
            <span class="text-[40px] font-[400]">Only the best for</span>
            <img
              src="https://uwif-astro-web.vercel.app/faviui.png"
              width={60}
              height={60}
              class="pb-2"
            />
          </div>
        </div>
        <div class="flex h-fit w-[50%] flex-col items-center gap-6 rounded-xl bg-gradient-to-b from-button-green to-secondary-purple px-6 py-12">
          <div class="text-[34px] font-[600]">SUPER 5G</div>
          <div class="flex items-center gap-2">
            <span class="text-[80px] font-[700]">$30</span>
            <Markdown
              text="/month with **AutoPay**"
              classN="text-[20px] w-[150px]"
            />
          </div>
          <div class="text-center text-[34px] font-[600]">
            FREE for ACP Subscribers
          </div>
          <div class="mt-4 flex flex-col gap-2 self-start text-[22px]">
            {[
              "5G Wi-Fi Gateway device included",
              "**FREE** 2 Day Shipping",
              "Plug and Play **Self Install**",
              "Redundancy included",
              "Portable (take with U)",
            ].map((item: string, i: number) => {
              return (
                <div key={i} class="flex gap-4">
                  <div class="flex items-center justify-center rounded-full bg-white bg-opacity-20 p-1">
                    <FaCheckSolid />
                  </div>
                  <Markdown text={item} />
                </div>
              );
            })}
          </div>
          <MainButton isHollow>BUY NOW</MainButton>
          <span class="text-[24px] font-[600]">OR</span>
          <MainButton>APPLY FOR FREE WIFI</MainButton>
          <Markdown
            classN="text-[22px] mt-4"
            text="**CALL NOW!** (123)456-789-000"
          />
          <div class="text-[22px] underline opacity-60">See more details</div>
        </div>
      </div>
    </div>
  );
});
