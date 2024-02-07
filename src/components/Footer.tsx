import { component$ } from "@builder.io/qwik";
import { MainButton } from "./MainButton";

import { FaArrowUpSolid } from "@qwikest/icons/font-awesome";
import { setURL } from "~/data/constants";

export const Footer = component$(({ data }: { data: any }) => {

  return (
    <>
      <footer class="relative z-10 flex min-h-[200px] w-full flex-col items-center justify-center gap-14 bg-black p-16 text-white">
        <span class="purple-ball-blured" />

        <MainButton isHollow whiteBorder link={data['Button']['Link']}>
          {data['Button']['Text']}
        </MainButton>

        {/* Slogan */}
        <span class="text-[24px]">{data['Slogan']}</span>

        <div class="flex w-full items-center justify-between gap-10 max-[800px]:flex-col">
          <div class="flex flex-col gap-4">
            <div class="flex border-white [&>*]:h-[80px] [&>*]:w-[80px] [&>*]:p-4 [&>:not(:last-child)]:border-r-2">
              
              {/* Social Media */}
              {data['SocialMedia'].map((route: any, i: number) => {
                return (
                  <a
                  key={i}
                  target="_blank"
                  href={route['Link']}
                  >
                    <div class="w-[35px] h-[35px] flex justify-center">
                    <img
                      class="icono-svg-color"
                      width={35}
                      height={35}
                      src={setURL(route['Icon']['data']['attributes']['url'])}
            
                    />
                    </div>
                  </a>
                );
              })}
            </div>

            <div class="flex items-center justify-evenly text-center text-[18px] leading-6 [&>*]:w-[100px]">
              <span>Privacy Policy</span>
              <span>Terms and Conditions</span>
            </div>
          </div>
          <div class="text-[30px]">Contact Us</div>
          <div class="flex flex-col gap-2">
            <button
              class="mb-8 flex items-center gap-1 rounded-full border-2 border-white px-4 py-3 text-[20px]"
              onClick$={() => {
                window.scrollTo(0, 0);
              }}
            >
              <FaArrowUpSolid />
              <span>Back to top</span>
            </button>
            <span>© 2021 U-wifi</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
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
