import { component$ } from "@builder.io/qwik";

export const HomePlus = component$(() => {
  return (
    <div class="flex items-center justify-center py-12 text-center">
      <div class="flex w-full max-w-[1200px] flex-col items-center gap-4 px-8">
        <div
          class="grid w-full items-center px-12"
          style={{
            gridTemplateColumns: "1fr 200px 1fr",
          }}
        >
          <div class="h-0 w-full rounded-full border-2"></div>
          <h2 class="flex items-center justify-center px-8 text-center text-[40px] font-[600]">
            PLUS
          </h2>
          <div class="h-0 rounded-full border-2"></div>
        </div>
        <div class="mb-4 mt-[120px] text-[80px] font-[700] max-[600px]:text-[60px]">
          <span class="text-primary-green">FREE</span> TABLET!*
        </div>
        <img
          src="https://uwif-astro-web.vercel.app/image/uwifitablet.png"
          alt=""
          class="z-20"
          width={500}
          height={500}
        />
        <div class="text-[20px] opacity-60">
          *Free tablet if you are subject of the ACP program
        </div>
      </div>
    </div>
  );
});
