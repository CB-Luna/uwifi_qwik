import { component$ } from "@builder.io/qwik";

const BuyNowCard = component$(() => {
  return (
    <div class="flex items-center gap-8 text-white">
      <img
        src="https://uwif-astro-web.vercel.app/image/uwifi_stroke.png"
        width={70}
        height={70}
      />
      <span class="mr-4 w-[200px] text-[24px] font-[300]">BUY NOW</span>
    </div>
  );
});

export const BuyNowCarousel = component$(() => {
  return (
    <>
      <div class="flex h-[110px] gap-8 overflow-hidden border-y border-white bg-black">
        <div id="buyNowCarousel1" class="flex gap-8">
          {Array(10)
            
            .map((_, i) => (
              <BuyNowCard key={i} />
            ))}
        </div>
        <div id="buyNowCarousel2" class="flex gap-8">
          {Array(10)
            
            .map((_, i) => (
              <BuyNowCard key={i} />
            ))}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={`
    #buyNowCarousel1 {
        animation: autoscroll 50s linear infinite;
    }
    #buyNowCarousel2 {
        animation-delay: 50s;
        animation: autoscroll-hide 50s linear infinite;
    }

    @keyframes autoscroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
    @keyframes autoscroll-hide {
        0% {
            transform: translateX(0);
        }
        100% {
            display: none;
            transform: translateX(-100%);
        }
    }
    `}
      ></style>
    </>
  );
});
