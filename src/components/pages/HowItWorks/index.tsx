import { component$ } from "@builder.io/qwik";
import { MainButton } from "~/components/MainButton";
import { SectionSteps } from "./sectionSteps";
import { Paragraph } from "./paragraph";

export const HowItWorks = component$(() => {
  const dataParagraph = [
    {
      image: "https://uwif-astro-web.vercel.app/image/App1.png",
      title: "Setup’s quick. Just download the app.",
      description:
        "Step-by-step, we’ll make setup a breeze for your T-Mobile 5G Wi-Fi Gateway.",
    },
    {
      image: "https://uwif-astro-web.vercel.app/image/App2.png",
      title: "Location matters.",
      description:
        "For the best possible connection, use the interactive placement assistant in the app to pinpoint the ideal location for your gateway.",
    },
    {
      image: "https://uwif-astro-web.vercel.app/image/App3.png",
      title: "Keep an eye on your internet connection.",
      description:
        "Make sure your internet connection is at its best and get help tackling issues with your Wi-Fi network manager.",
    },
    {
      image: "https://uwif-astro-web.vercel.app/image/App4.png",
      title: "See who’s online.",
      description:
        "Quickly identify each device that’s connected to your network.",
    },
    {
      image: "https://uwif-astro-web.vercel.app/image/App5.png",
      title: "Set parental controls.",
      description:
        "A few simple taps and you can control which devices connect to Wi-Fi and when. You have the power.",
    },
  ];

  return (
    <div
      class="flex flex-col  items-center justify-center bg-black"
      id="header"
    >
      <div class="mt-[2rem] flex w-full flex-col  items-start justify-center gap-5 p-10">
        <h1 class="text-[46px] md:text-[60px]">
          <span class="text-primary-green">How</span> it works?
        </h1>
        <p class="text-3xl font-bold md:text-[40px]">
          Simple. Unbox and plug it in!
        </p>
      </div>

      <SectionSteps />

      <div class="my-5 flex flex-col  items-center justify-center gap-5 p-10 md:items-start">
        <h2 class="text-[46px] md:text-[60px]">
          <span class="text-primary-green">U-wifi</span> Mobile App
        </h2>
        <p class="text-3xl font-bold md:text-[42px]">
          Take control of your home internet with one{" "}
          <span class="text-secondary-purple">simple app</span>{" "}
        </p>
      </div>

      {dataParagraph.map((paragraph: any, key: any) => (
        <Paragraph
          key={key}
          image={paragraph["image"]}
          description={paragraph["description"]}
          title={paragraph["title"]}
          direction={key % 2 == 0 ? "left" : "rigth"}
        />
      ))}

      <div
        id="banner"
        class="flex h-[200px] w-full flex-col items-center justify-center gap-4"
        style={`background-image:url("https://uwif-astro-web.vercel.app/image/baner.png");
      background-size:cover;
      background-repeat: no-repeat;`}
      >
        <h1 class="text-center text-3xl font-extrabold text-white md:text-[40px]">
          A WINDOW INTO 5G WIRELESS INTERNET
        </h1>
        <p class="text-center text-xl md:text-2xl">
          How 5G wireless technology connects you to the world from the comfort
          of your home.
        </p>
      </div>

      <div
        id="image"
        class="my-10 flex h-[150px] w-3/4 items-center justify-center"
      >
        <img
          class="h-full w-full object-contain"
          src="https://uwif-astro-web.vercel.app/image/conection.svg"
          alt=""
          width="934"
          height="155"
        />
      </div>

      <div class="flex flex-col items-center justify-center gap-16 p-10 md:flex-row">
        <div class="flex flex-col items-center justify-center gap-6">
          <h2 class="text-left text-xl font-bold md:text-3xl">
            How our 5G internet is different
          </h2>
          <p class="text-justify text-xl md:text-2xl">
            While cable internet relies on wired connections, UWIFI Internet
            uses the power of over-the-air 5G to provide reliable connectivity
            where wires can’t reach. Plus, we won’t tangle you up in long-term
            contracts.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-6">
          <h2 class="text-left text-xl font-bold md:text-3xl">
            How our 5G home internet works
          </h2>
          <p class="text-justify text-xl md:text-2xl">
            UWIFI 5G network is built on a series of cell sites that use radio
            waves to send and receive data. Your gateway converts the nearest 5G
            signal into Wi-Fi, allowing you to access the internet wirelessly.
          </p>
        </div>
      </div>

      <h2 class="mt-5 text-center text-3xl font-bold md:text-[40px]">
        Does the placement of your 5G gateway matter?
      </h2>
      <div class="my-5 flex flex-wrap items-center justify-center gap-5 p-10 md:justify-between">
        <div class="flex w-full flex-col items-start justify-center gap-4 md:w-2/3">
          <h2 class="text-xl font-bold md:text-3xl">Yes, and here’s why.</h2>
          <p class="text-justify text-lg md:text-2xl">
            Similar to plants thriving on sunlight, your gateway requires 5G
            radio waves for optimal wireless performance. Placing the gateway
            near a window facilitates a strong connection to the closest 5G cell
            tower or data hub, resulting in faster download and upload speeds,
            lower latency, and increased capacity compared to locations with
            weaker connections.
          </p>
          <MainButton isHollow>Device Details</MainButton>
        </div>
        <div class="flex h-[300px] w-2/3 flex-row rounded-lg bg-slate-400 md:w-1/4"></div>
      </div>
    </div>
  );
});
