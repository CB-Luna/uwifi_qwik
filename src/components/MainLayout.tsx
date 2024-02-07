import { Slot, component$ } from "@builder.io/qwik";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const MainLayout = component$(({ data }: { data: any }) => {
  const layoutData = data["data"];
  return (
    <>
      <Navbar data={layoutData['uwifiMenu']['data']['attributes']} />
      <Slot />
      <Footer data={layoutData['uwifiFooter']['data']['attributes']}/>
    </>
  );
});
