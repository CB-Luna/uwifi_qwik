import { component$ } from "@builder.io/qwik";

export const Paragraph = component$(({ image, title, description, direction }: { image: string, title: string, description: string, direction: "left" | "rigth" }) => {
  return <div class={`flex ${direction == "left" ? "md:flex-row" : "md:flex-row-reverse"} flex-col gap-6 justify-center items-center min-h-[350px] my-5 p-10`}>
    <div class="w-1/3  h-[300px]">
      <img class="w-full h-full object-contain" src={image} alt=""
        width="210" height="425" />
    </div>
    <div class="flex flex-col gap-4 justify-center items-start md:w-2/3 w-full">
      <h2 class="md:text-[42px] text-3xl font-bold">{title}</h2>
      <p class="md:text-3xl text-2xl">{description}</p>
    </div>
  </div>
});