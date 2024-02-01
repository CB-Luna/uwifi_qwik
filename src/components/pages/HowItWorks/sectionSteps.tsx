import { component$ } from "@builder.io/qwik";
import { MainButton } from "~/components/MainButton";

export const SectionSteps = component$(() => {
  return <div class="flex flex-wrap p-8 justify-center items-center my-5 gap-4">
  <div class="md:w-3/4 w-full flex flex-col gap-2 justify-start items-start">
    <div class="flex flex-row justify-start items-center gap-5">
        <svg class="object-cover w-[clamp(50px,5vw,150px)] h-[clamp(50px,10vw,180px)]" alt-arial="mark icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 131" fill="none" data-astro-cid-cdiqt7qs=""> <path d="M49.68 12.1316C39.432 12.1316 29.6038 16.4613 22.3574 24.1681C15.111 31.8749 11.04 42.3276 11.04 53.2267C11.04 70.0288 20.8766 86.2379 31.6738 98.7954C37.1975 105.189 43.2212 111.073 49.68 116.384C56.1387 111.077 62.1624 105.197 67.6862 98.8071C78.4834 86.2379 88.32 70.0347 88.32 53.2267C88.32 42.3276 84.249 31.8749 77.0026 24.1681C69.7562 16.4613 59.928 12.1316 49.68 12.1316ZM49.68 130.803L46.5502 128.513L46.5336 128.501L46.5005 128.472L46.3901 128.39L45.9761 128.079C43.6904 126.312 41.4556 124.471 39.2748 122.56C33.6851 117.677 28.4228 112.384 23.5262 106.721C12.2434 93.5939 0 74.5786 0 53.2267C1.96337e-07 39.2136 5.23413 25.7744 14.5509 15.8656C23.8677 5.95683 36.504 0.390137 49.68 0.390137C62.856 0.390137 75.4923 5.95683 84.8091 15.8656C94.1259 25.7744 99.36 39.2136 99.36 53.2267C99.36 74.5786 87.1166 93.5998 75.8338 106.721C69.4409 114.116 62.4272 120.876 54.8798 126.916C54.2509 127.416 53.6161 127.907 52.9754 128.39L52.8595 128.472L52.8264 128.501L52.8154 128.507L49.68 130.797V130.803ZM49.68 41.4853C46.752 41.4853 43.9439 42.7223 41.8735 44.9243C39.8031 47.1262 38.64 50.1127 38.64 53.2267C38.64 56.3408 39.8031 59.3273 41.8735 61.5292C43.9439 63.7312 46.752 64.9682 49.68 64.9682C52.608 64.9682 55.4161 63.7312 57.4865 61.5292C59.5569 59.3273 60.72 56.3408 60.72 53.2267C60.72 50.1127 59.5569 47.1262 57.4865 44.9243C55.4161 42.7223 52.608 41.4853 49.68 41.4853ZM27.6 53.2267C27.6 46.9987 29.9263 41.0257 34.0671 36.6218C38.2079 32.2179 43.824 29.7438 49.68 29.7438C55.536 29.7438 61.1521 32.2179 65.2929 36.6218C69.4337 41.0257 71.76 46.9987 71.76 53.2267C71.76 59.4548 69.4337 65.4278 65.2929 69.8317C61.1521 74.2356 55.536 76.7097 49.68 76.7097C43.824 76.7097 38.2079 74.2356 34.0671 69.8317C29.9263 65.4278 27.6 59.4548 27.6 53.2267Z" fill="white" data-astro-cid-cdiqt7qs=""></path> </svg>
      
      <p class="font-extrabold text-[40px]">1</p>
      <p class="md:text-3xl text-xl">Confirm internet coverage at your address</p>
    </div>
    <div class="flex flex-row gap-5 justify-start items-center">
      <svg class="w-[clamp(50px,5vw,150px)] h-[clamp(50px,10vw,180px)]" alt-arial="Receive icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 129 121" fill="none" data-astro-cid-cdiqt7qs=""> <path d="M52.2222 81.6459L69.5556 87.7659C69.5556 87.7659 112.889 78.5859 118.667 78.5859C124.444 78.5859 124.444 84.7059 118.667 90.8259C112.889 96.9459 92.6667 115.306 75.3333 115.306C58 115.306 46.4444 106.126 34.8889 106.126C23.3333 106.126 6 106.126 6 106.126" stroke="white" stroke-width="10.189" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-cdiqt7qs=""></path> <path d="M6 73.9014C11.7778 67.3532 23.3333 57.531 34.8889 57.531C46.4444 57.531 73.8889 70.6273 78.2222 77.1755C82.5556 83.7236 69.5556 93.5458 69.5556 93.5458" stroke="white" stroke-width="10.189" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-cdiqt7qs=""></path> <path d="M40.6665 35.7455V11.2655C40.6665 7.88552 43.2532 5.14551 46.4443 5.14551H115.778C118.969 5.14551 121.555 7.88552 121.555 11.2655V60.2255" stroke="white" stroke-width="10.189" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-cdiqt7qs=""></path> <path d="M95.5554 5.14551H66.6665V32.6855H95.5554V5.14551Z" fill="bg-primaryColor" stroke="white" stroke-width="10.189" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-cdiqt7qs=""></path> </svg>
      <p class="font-extrabold text-[40px]">2</p>
      <p class="md:text-3xl text-xl">Receive your 5G Wi-Fi gateway device.</p>
    </div>
    <div class="flex flex-row gap-5 justify-start items-center">
      <img class="object-contain w-[clamp(50px,5vw,150px)] h-[clamp(50px,10vw,180px)]" src="https://uwif-astro-web.vercel.app/image/movilconlogo.png" alt="" width="284" height="522" />

      <p class="font-extrabold text-[40px]">3</p>
      <p class="md:text-3xl text-xl">Download our app and get set up in minutes.</p>
    </div>
  </div>
  <div class="flex flex-col md:w-1/5 w-1/3 justify-center items-center gap-5">
    <img class="w-3/4" src="https://uwif-astro-web.vercel.app/image/movilconlogo.png" alt="" 
    width="284" height="522"/>
    <MainButton isHollow link="https://uwif-astro-web.vercel.app/signup">Download App</MainButton>
  </div>
</div>
});