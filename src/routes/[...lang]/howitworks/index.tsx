import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { MainLayout } from "~/components/MainLayout";
import { HowItWorks } from "~/components/pages/HowItWorks";
import { homeQuery } from "~/data/gql_queries/pages/home_query";
import { getPageData } from "~/services/graphql";

export const usePageData = routeLoader$(async (req) => {
  const lang = req.params["lang"] == "" ? "en" : "es-419";
  return await getPageData(homeQuery, lang);
});

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
