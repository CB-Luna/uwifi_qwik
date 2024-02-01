import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MainLayout } from "~/components/MainLayout";
import { HowItWorks } from "~/components/pages/HowItWorks";

export default component$(() => {
  return (
    <>
      <MainLayout data={null}>
        <HowItWorks />
      </MainLayout>
    </>
  );
});

export const head: DocumentHead = {
  title: "How it works? | U-wifi",
  meta: [
    {
      name: "description",
      content: "U-wifi",
    },
  ],
};
