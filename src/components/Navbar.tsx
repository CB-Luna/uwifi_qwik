import { component$ } from "@builder.io/qwik";

export const Navbar = component$(() => {
  const navRoutes = [
    { name: "HOME", path: "/" },
    { name: "ACP", path: "/#acp" },
    { name: "PLAN", path: "/#plan" },
    { name: "HOW IT WORKS", path: "/#howit" },
    { name: "APP", path: "/#app" },
    { name: "5G", path: "/#5g" },
  ];

  return (
    <>
      <div class="absolute left-0 right-0 top-0  h-[80px] bg-black "></div>
      <nav class="sticky top-0 z-10 flex h-[80px] items-center justify-between gap-4 border-b-2 border-white bg-transparent px-8 py-4 text-white backdrop-blur-md">
        <a href="/">Logo</a>
        <a href="/" class="max-[1200px]:text-[12px] max-[800px]:hidden">
          (123) 456-789-000
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
          href="/"
          class="rounded-md bg-green-500 px-4 py-2 font-[600] max-[800px]:hidden"
        >
          Login
        </a>
        <div class="max-[800px]:hidden">Bot</div>
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
