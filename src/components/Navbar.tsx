import { component$ } from "@builder.io/qwik";
import { Markdown } from "./Markdown";

export const Navbar = component$(() => {
  const navRoutes = [
    { name: "HOME", path: "/" },
    { name: "ACP", path: "/#acp" },
    { name: "PLAN", path: "/#plan" },
    { name: "HOW IT WORKS", path: "/how" },
    { name: "FAQ", path: "/#faq" },
  ];

  return (
    <>
      <div class="absolute left-0 right-0 top-0  h-[80px] bg-black "></div>
      <nav class="sticky top-0 z-30 flex h-[80px] items-center justify-between gap-4 border-b-2 border-white bg-transparent px-8 py-4 text-white backdrop-blur-md">
        <a href="/">
          <img
            src="https://uwif-astro-web.vercel.app/image/uwifilogo.png"
            alt=""
            width={90}
            height={90}
          />
        </a>
        <a
          href="/"
          class="text-[18px] max-[1200px]:text-[12px] max-[800px]:hidden"
        >
          <Markdown text="**CALL NOW** (123) 456-789-000" />
        </a>
        <div class="flex items-center gap-5 text-[28px] font-[800] max-[1200px]:text-[20px] max-[800px]:hidden">
          {navRoutes.map((route: any, i: number) => {
            return (
              <a
                key={i}
                href={route["path"]}
                class="txt_shdw text-center drop-shadow-2xl hover:text-[#00c402]"
              >
                {route["name"]}
              </a>
            );
          })}
        </div>
        <a
          href="https://uwifi-web.vercel.app/login"
          target="_blank"
          class="rounded-md bg-green-500 px-4 py-2 font-[600] max-[800px]:hidden"
        >
          Login
        </a>
        <div class="max-[800px]:hidden">
          <img
            src="https://uwif-astro-web.vercel.app/image/chatbotsmall.svg"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div class="min-[800px]:hidden">Menu</div>
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
