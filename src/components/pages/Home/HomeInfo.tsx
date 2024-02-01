import { component$ } from "@builder.io/qwik";
import { FaCheckSolid } from "@qwikest/icons/font-awesome";
import { MainButton } from "~/components/MainButton";
import { Markdown } from "~/components/Markdown";

export const HomeInfo = component$(() => {
  return (
    <div class="flex justify-center">
      <div class="flex max-w-[1600px] items-center justify-evenly gap-8 px-8 py-12 max-[900px]:flex-col max-[500px]:px-4">
        <div class="flex flex-col gap-8 text-[50px] font-[700] max-[800px]:text-[40px] min-[900px]:w-[50%]">
          <div>
            Don't overpay for a{" "}
            <span class="text-primary-green">5G home internet </span>{" "}
            experience!
          </div>
          <div>
            JUST <span class="text-primary-green">ONE</span> PLAN.
          </div>
          <div>
            Yes, we make it <span class="text-secondary-purple">simple</span>
          </div>
          <div class="text-[30px] font-[300] max-[800px]:text-[24px]">
            Discover perfection in simplicity. Our single subscription has it
            all, without the hassle.
          </div>
          <div class="flex flex-wrap items-end gap-3 text-[40px] font-[400] max-[800px]:text-[30px]">
            <span>Only the best </span>
            <span class="flex items-end gap-4 max-[800px]:gap-2">
              for{" "}
              <img
                src="https://uwif-astro-web.vercel.app/faviui.png"
                width={60}
                height={60}
                class="pb-1 max-[800px]:w-[30px]"
              />
            </span>
          </div>
        </div>
        <div class="flex h-fit min-w-[260px] max-w-[500px] flex-col items-center gap-6 rounded-xl bg-gradient-to-b from-button-green to-secondary-purple px-6 py-12 min-[900px]:w-[50%]">
          <div class="text-[34px] font-[600]">SUPER 5G</div>
          <div class="flex items-center gap-2">
            <span class="text-[80px] font-[700] max-[900px]:text-[60px]">
              $30
            </span>
            <Markdown
              text="/month Home Internet"
              classN="text-[20px] w-[150px] max-[900px]:text-[16px] max-[900px]:w-[100px]"
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
                <div key={i} class="flex items-center gap-4">
                  <div class="flex h-fit items-center justify-center rounded-full bg-white bg-opacity-20 p-1">
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
