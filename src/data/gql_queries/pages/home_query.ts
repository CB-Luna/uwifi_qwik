import { btnContent, iconContent, mediaUrl, sectionSEO } from "~/data/constants";

export const homeQuery = (locale: string) => {
  return `
  query QueryHome{
    uwifiHome{
     data{
      attributes{
        MarqueeButton{
          ${btnContent}
        }
        HeroVideo{
          ${mediaUrl}
        }
        HeroButtons{
          ${btnContent}
        }
        PrimaryParagraph{
          Headings{
            Heading
          }
          IconLogo{
            ${mediaUrl}
          }
          Textblock
          Media{
            ${mediaUrl}
          }
          Caption
          Buttons{
            ${btnContent}
          }
          }
        BentoGrid{
          data{
            attributes{
              url
            }
          }
        }
        PricingParagraph{
          Headings{
            Heading
          }
          IconLogo{
            ${mediaUrl}
          }
          Textblock
          Media{
            ${mediaUrl}
          }
          Caption
          Buttons{
            ${btnContent}
          }
        }
        PricingTable{
          Title
          Price
          Pricetime
          Subtitle
          Description
          Features{
            Icon{
              ${iconContent}
            }
            Title
            Content
          }
          Buttons{
            ${btnContent}
          }
        }
        TabletParagraph{
          Headings{
            Heading
          }
          Textblock
          Media{
            ${mediaUrl}
          }
        }
        ACPParagraph{
          Headings{
            Heading
          }
          Textblock
          Media{
            ${mediaUrl}
          }
          Caption
          Buttons{
            ${btnContent}
          }
        }
        InstallSteps{
          Icon{
            ${iconContent}
          }
          Title
          Content
        }
        ${sectionSEO}
        }
      }
    } 
  }
`;
};