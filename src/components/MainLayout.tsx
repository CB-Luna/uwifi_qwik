import { Slot, component$ } from "@builder.io/qwik";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const MainLayout = component$(({ data }: { data: any }) => {
  return (
    <>
      <Navbar />
      <Slot />
      <Footer />
    </>
  );
});
