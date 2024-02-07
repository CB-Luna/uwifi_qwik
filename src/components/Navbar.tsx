import { component$ } from "@builder.io/qwik";
import { Markdown } from "./Markdown";

import { FaBarsSolid } from "@qwikest/icons/font-awesome";
import { setURL } from "~/data/constants";

export const Navbar = component$(({ data }: { data: any }) => {

  return (
    <>
      <div class="absolute left-0 right-0 top-0  h-[80px] bg-black "></div>
      <nav class="sticky top-0 z-30 flex h-[80px] items-center justify-between gap-4 border-b-2 border-white bg-transparent px-8 py-4 text-white backdrop-blur-md">
        
        {/* Logo */}
        <a href="/">
          <img
            src={setURL(data['Logo']['Icon']['data']['attributes']['url'])}
            alt={setURL(data['Logo']['Icon']['data']['attributes']['alternativeText'])}
            width={90}
            height={90}
          />
        </a>

        {/* Contact Options */}
        <div class="flex items-center gap-5 max-[800px]:hidden">
          {data['ContactOptions'].map((route: any, i: number) => {
            return (
              <a
                key={i}
                href={route["Link"]}
                class="text-[18px] max-[1200px]:text-[12px] max-[800px]:hidden"
              >
                {route["Text"]}
              </a>
            );
          })}
        </div>

        {/* Menu Options */}
        <div class="flex items-center gap-5 text-[28px] font-[600] max-[1200px]:text-[20px] max-[800px]:hidden">
          {data['MenuOptions'].map((route: any, i: number) => {
            return (
              <a
                key={i}
                href={route["Link"]}
                class="txt_shdw text-center drop-shadow-2xl hover:text-[#00c402]"
              >
                {route["Text"]}
              </a>
            );
          })}
        </div>

        {/* Feat Button */}
        <a
          href={data['FeatButton']['Link']}
          target="_blank"
          class="rounded-full bg-green-500 px-4 py-2 font-[600] max-[800px]:hidden"
        >
          {data['FeatButton']['Text']}
        </a>


        <div class="max-[800px]:hidden">
          <img
            src="https://uwif-astro-web.vercel.app/image/chatbotsmall.svg"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div class="text-[28px] min-[800px]:hidden">
          <FaBarsSolid />
        </div>
      </nav>
      <style
        dangerouslySetInnerHTML="
        txt_shdw {
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        "
      ></style>
    </>
  );
});
