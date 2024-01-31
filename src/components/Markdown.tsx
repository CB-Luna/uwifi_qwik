import { component$ } from "@builder.io/qwik";
import { parse } from "marked";

export const Markdown = component$(
  ({ text, classN = "" }: { text: string; classN?: string }) => {
    return (
      <div
        dangerouslySetInnerHTML={parse(text)}
        class={`text-primary-blue [&>*>a]:text-secondary-red flex list-outside flex-col gap-3 [&>h1]:text-[36px] [&>h1]:font-[600] [&>h2]:text-[32px] [&>h3]:text-[26px] [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-3  ${classN}`}
      ></div>
    );
  },
);
