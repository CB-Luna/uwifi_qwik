import { type DocumentHeadValue } from "@builder.io/qwik-city";

// Strapi por dominio
export const strapiURL = "https://strapi.iamet.cbluna-dev.com";

export const gqlURL = `${strapiURL}/graphql`;

export const setURL = (url: string) => {
  return `${strapiURL}${url}`;
};

export const customLocale = (locale: string) => {
  return locale === "es" ? "es-419" : locale;
};

export const headSEO = (SEOdata: any) => {
  let schemaScripts = [];
  if (SEOdata.schema) {
    schemaScripts = SEOdata.schema
      .split(`<script type="application/ld+json">`)
      .flatMap((scr: string) =>
        scr.split(`<script type='application/ld+json'>`),
      )
      .flatMap((script: string) => {
        return script.replace("</script>", "");
      });
    // .filter((script: string) => script !== null);
  }

  return <DocumentHeadValue>{
    title: SEOdata.MetaTitle,
    scripts: [
      ...schemaScripts.map((script: string) => {
        return {
          props: {
            type: "application/ld+json",
          },
          script: script,
        };
      }),
    ],
    meta: [
      {
        name: "description",
        content: SEOdata.MetaDescription,
      },
      // {
      //   name: "robots",
      //   content: SEOdata.preventIndexing ? "noindex" : "index",
      // },
      {
        name: "keywords",
        content: SEOdata.Keywords,
      },
    ],
  };
};

export const mediaUrl = `
data {
    attributes {
        url
        alternativeText
        caption
    }
}
`;

export const iconContent = `
data {
    attributes {
        url
    }
}
`;

export const btnContent = `
Text
Link
Icon{
  ${iconContent}
}
`;

export const sectionSEO = `
SEO {
    MetaTitle
    MetaDescription
    Keywords
    PreventIndexing
    Schema
}
`;


// Query for the Members Grid. Used in:
// - Leadership Team Page
// - Board of Directors Page
export const sectionBoardMembers = `
MembersGrid{
           Picture{
         ${mediaUrl}
        }
        FirstName
        LastName
        Position
        SocialMedia{
          Icon{
            ${mediaUrl}
          }
          Link
        }
      }
`;



