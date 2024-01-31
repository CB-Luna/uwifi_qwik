import { component$ } from "@builder.io/qwik";
import { MainButton } from "./MainButton";

export const Footer = component$(() => {
  return (
    <>
      <footer class="relative z-10 flex min-h-[200px] w-full flex-col items-center justify-center gap-14 bg-black p-16 text-white">
        <span class="purple-ball-blured" />
        <MainButton isHollow whiteBorder>
          Discover all we have for U
        </MainButton>
        <span class="text-[24px]">Live, Feel the Experience.</span>
        <div class="flex"></div>
      </footer>
      <style>
        {`
     .purple-ball-blured{
      top: -80%;
  position: absolute;
      width: clamp(200px, 50vw, 400px);
  height: clamp(150px, 50vw, 250px);
  border-radius: 50px;
  
      background: linear-gradient(180deg, #2603FB 0%, #DC06FF 100%);
  filter: blur(250px);
  z-index: -1;
  }
    `}
      </style>
    </>
  );
});
