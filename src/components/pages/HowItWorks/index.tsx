import { component$ } from "@builder.io/qwik";
import { MainButton } from "~/components/MainButton";
import { SectionSteps } from "./sectionSteps";
import { Paragraph } from "./paragraph";

export const HowItWorks = component$(() => {
  const dataParagraph = [{
    image: "https://uwif-astro-web.vercel.app/image/App1.png",
    title: "Setup’s quick. Just download the app.",
    description: "Step-by-step, we’ll make setup a breeze for your T-Mobile 5G Wi-Fi Gateway."
  },
  {
    image: "https://uwif-astro-web.vercel.app/image/App2.png",
    title: "Location matters.",
    description: "For the best possible connection, use the interactive placement assistant in the app to pinpoint the ideal location for your gateway."
  },
  {
    image: "https://uwif-astro-web.vercel.app/image/App3.png",
    title: "Keep an eye on your internet connection.",
    description: "Make sure your internet connection is at its best and get help tackling issues with your Wi-Fi network manager."
  },
  {
    image: "https://uwif-astro-web.vercel.app/image/App4.png",
    title: "See who’s online.",
    description: "Quickly identify each device that’s connected to your network."
  },
  {
    image: "https://uwif-astro-web.vercel.app/image/App5.png",
    title: "Set parental controls.",
    description: "A few simple taps and you can control which devices connect to Wi-Fi and when. You have the power."
  }]

  return <div class="flex flex-col p-10 bg-black" id="header">
    <div class="flex flex-col text-[42px] md:items-start items-center font-bold justify-center">
      <h1><span class="text-primary-green">How</span> it works?</h1>
      <p>Simple set up in less than <span class="text-primary-green">15 minutes!</span></p>
    </div>

    <SectionSteps />

    <div class="flex flex-col text-[42px] md:items-start my-5 items-center font-bold justify-center">
      <h2><span class="text-primary-green">U-Wifi</span> Mobile App</h2>
      <p>Take control of your home internet with one <span class="text-secondary-purple">simple app</span> </p>
    </div>

    {dataParagraph.map((paragraph: any, key: any) => (
      <Paragraph image={paragraph['image']} description={paragraph['description']} title={paragraph['title']} direction={key % 2 == 0 ? "left" : "rigth"} />
    ))}
  </div>;
});
