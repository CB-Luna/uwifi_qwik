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

  return <div class="flex flex-col  bg-black justify-center items-center" id="header">
    <div class="flex flex-col text-[42px] md:items-start items-center font-bold justify-center">
      <h1><span class="text-primary-green">How</span> it works?</h1>
      <p>Simple set up in less than <span class="text-primary-green">15 minutes!</span></p>
    </div>

    <SectionSteps />

    <div class="flex flex-col p-10 md:text-[42px] text-3xl md:items-start my-5 items-center font-bold justify-center">
      <h2><span class="text-primary-green">U-wifi</span> Mobile App</h2>
      <p>Take control of your home internet with one <span class="text-secondary-purple">simple app</span> </p>
    </div>

    {dataParagraph.map((paragraph: any, key: any) => (
      <Paragraph key={key} image={paragraph['image']} description={paragraph['description']} title={paragraph['title']} direction={key % 2 == 0 ? "left" : "rigth"} />
    ))}

    <div id="banner" class="w-full h-[200px] gap-4 flex flex-col justify-center items-center" style={`background-image:url("https://uwif-astro-web.vercel.app/image/baner.png");
      background-size:cover;
      background-repeat: no-repeat;`}>
      <h1 class="text-white font-extrabold text-center md:text-[40px] text-3xl">A WINDOW INTO 5G WIRELESS INTERNET</h1>
      <p class="text-center md:text-2xl text-xl">How 5G wireless technology connects you to the world from the comfort of your home.</p>
    </div>

    <div id="image" class="w-3/4 h-[150px] my-10 flex justify-center items-center">
      <img class="h-full w-full object-contain" src="https://uwif-astro-web.vercel.app/image/conection.svg" alt=""
        width="934" height="155" />
    </div>

    <div class="p-10 flex md:flex-row flex-col items-center justify-center gap-16">
      <div class="flex flex-col items-center justify-center gap-6">
        <h2 class="md:text-3xl text-xl font-bold text-left">How our 5G internet is different</h2>
        <p class="md:text-2xl text-xl text-justify">While cable internet relies on wired connections, UWIFI Internet uses the power of over-the-air 5G to provide reliable connectivity where wires can’t reach. Plus, we won’t tangle you up in long-term contracts.</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-6">
        <h2 class="md:text-3xl text-xl font-bold text-left">How our 5G home internet works</h2>
        <p class="md:text-2xl text-xl text-justify">UWIFI 5G network is built on a series of cell sites that use radio waves to send and receive data. Your gateway converts the nearest 5G signal into Wi-Fi, allowing you to access the internet wirelessly.</p>
      </div>
    </div>

    <h2 class="md:text-[40px] text-3xl text-center font-bold">Does the placement of your 5G gateway matter?</h2>
    <div class="flex flex-wrap gap-5 items-center justify-center p-10 my-5">
      <div class="flex flex-col md:w-2/3 w-full justify-center items-start gap-4">
        <h2 class="md:text-3xl text-xl font-bold">How our 5G internet is different</h2>
        <p class="md:text-2xl text-lg text-justify">window facilitates a strong connection to the closest 5G cell tower or data hub, resulting in faster download and upload speeds, lower latency, and increased capacity compared to locations with weaker connections.</p>
        <MainButton isHollow>Device Details</MainButton>
      </div>
      <div class="md:w-[20%] w-2/3 flex flex-row bg-slate-400 h-[300px] rounded-lg"></div>
    </div>
  </div>;
});
