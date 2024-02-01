import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MainLayout } from "~/components/MainLayout";
import { Home } from "~/components/pages/Home";

export default component$(() => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
});

export const head: DocumentHead = {
  title: "Home | U-wifi",
  meta: [
    {
      name: "description",
      content: "U-wifi.",
    },
  ],
};
