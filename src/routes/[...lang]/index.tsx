import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { MainLayout } from "~/components/MainLayout";
import { Home } from "~/components/pages/Home";
import { headSEO } from "~/data/constants";
import { homeQuery } from "~/data/gql_queries/pages/home_query";
import { getPageData } from "~/services/graphql";

export const usePageData = routeLoader$(async (req) => {
  const lang = req.params["lang"] == "" ? "en" : "es-419";
  return await getPageData(homeQuery, lang);
});

export default component$(() => {
  const signalData = usePageData();
  const data = signalData.value;

  return (
    <MainLayout data={data["layoutData"]}>
      <Home />
    </MainLayout>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const pageData = resolveValue(usePageData);
  let seoData;
    seoData =
    pageData["pageData"]["data"]["uwifiHome"]["data"]["attributes"]["SEO"];
  return headSEO(seoData);
};

