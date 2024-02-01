import { component$ } from "@builder.io/qwik";
import { MainButton } from "./MainButton";

import { FaArrowUpSolid } from "@qwikest/icons/font-awesome";

export const Footer = component$(() => {
  return (
    <>
      <footer class="relative z-10 flex min-h-[200px] w-full flex-col items-center justify-center gap-14 bg-black p-16 text-white">
        <span class="purple-ball-blured" />
        <MainButton isHollow whiteBorder link="/#">
          Discover all we have for U
        </MainButton>
        <span class="text-[24px]">Live, Feel the Experience.</span>
        <div class="flex w-full items-center justify-between gap-10 max-[800px]:flex-col">
          <div class="flex flex-col gap-4">
            <div class="flex border-white [&>*]:h-[80px] [&>*]:w-[80px] [&>*]:p-4 [&>:not(:last-child)]:border-r-2">
              <svg
                alt-arial="instagram icon"
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="56"
                viewBox="0 0 54 56"
                fill="none"
                data-astro-cid-5vkyrosh=""
              >
                <path
                  d="M15.66 0.861572H38.34C46.98 0.861572 54 8.00085 54 16.7876V39.853C54 44.0769 52.3501 48.1277 49.4133 51.1144C46.4765 54.1012 42.4933 55.7791 38.34 55.7791H15.66C7.02 55.7791 0 48.6398 0 39.853V16.7876C0 12.5638 1.64989 8.51293 4.58671 5.52621C7.52353 2.53949 11.5067 0.861572 15.66 0.861572ZM15.12 6.35332C12.5421 6.35332 10.0698 7.39479 8.24692 9.24862C6.42407 11.1024 5.4 13.6168 5.4 16.2385V40.4022C5.4 45.8665 9.747 50.2873 15.12 50.2873H38.88C41.4579 50.2873 43.9302 49.2459 45.7531 47.392C47.5759 45.5382 48.6 43.0239 48.6 40.4022V16.2385C48.6 10.7742 44.253 6.35332 38.88 6.35332H15.12ZM41.175 10.4721C42.0701 10.4721 42.9286 10.8338 43.5615 11.4774C44.1944 12.1211 44.55 12.9942 44.55 13.9045C44.55 14.8148 44.1944 15.6878 43.5615 16.3315C42.9286 16.9752 42.0701 17.3368 41.175 17.3368C40.2799 17.3368 39.4214 16.9752 38.7885 16.3315C38.1556 15.6878 37.8 14.8148 37.8 13.9045C37.8 12.9942 38.1556 12.1211 38.7885 11.4774C39.4214 10.8338 40.2799 10.4721 41.175 10.4721ZM27 14.5909C30.5804 14.5909 34.0142 16.0374 36.5459 18.6122C39.0777 21.1869 40.5 24.6791 40.5 28.3203C40.5 31.9616 39.0777 35.4537 36.5459 38.0285C34.0142 40.6032 30.5804 42.0497 27 42.0497C23.4196 42.0497 19.9858 40.6032 17.4541 38.0285C14.9223 35.4537 13.5 31.9616 13.5 28.3203C13.5 24.6791 14.9223 21.1869 17.4541 18.6122C19.9858 16.0374 23.4196 14.5909 27 14.5909ZM27 20.0827C24.8517 20.0827 22.7915 20.9506 21.2724 22.4954C19.7534 24.0403 18.9 26.1356 18.9 28.3203C18.9 30.5051 19.7534 32.6003 21.2724 34.1452C22.7915 35.6901 24.8517 36.5579 27 36.5579C29.1483 36.5579 31.2085 35.6901 32.7276 34.1452C34.2466 32.6003 35.1 30.5051 35.1 28.3203C35.1 26.1356 34.2466 24.0403 32.7276 22.4954C31.2085 20.9506 29.1483 20.0827 27 20.0827Z"
                  fill="white"
                  data-astro-cid-5vkyrosh=""
                ></path>{" "}
              </svg>
              <svg
                alt-arial="facebook icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="58"
                viewBox="0 0 32 58"
                fill="none"
                data-astro-cid-5vkyrosh=""
              >
                {" "}
                <g clip-path="url(#clip0_489_1779)" data-astro-cid-5vkyrosh="">
                  {" "}
                  <path
                    d="M27.9141 32.8818L29.3361 22.5816H20.4451V15.8975C20.4451 13.0796 21.6871 10.3328 25.6691 10.3328H29.7111V1.5633C29.7111 1.5633 26.0431 0.867432 22.5361 0.867432C15.2141 0.867432 10.4281 5.80076 10.4281 14.7314V22.5816H2.28906V32.8818H10.4281V57.7819H20.4451V32.8818H27.9141Z"
                    fill="white"
                    data-astro-cid-5vkyrosh=""
                  ></path>{" "}
                </g>{" "}
                <defs data-astro-cid-5vkyrosh="">
                  {" "}
                  <clipPath id="clip0_489_1779" data-astro-cid-5vkyrosh="">
                    {" "}
                    <rect
                      width="32"
                      height="56.9145"
                      fill="white"
                      transform="translate(0 0.867432)"
                      data-astro-cid-5vkyrosh=""
                    ></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
              <svg
                alt-arial="twitter icon"
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="51"
                viewBox="0 0 54 51"
                fill="none"
                data-astro-cid-5vkyrosh=""
              >
                {" "}
                <path
                  d="M42.5272 0.856934H50.8072L32.7173 22.0071L54 50.7819H37.3365L24.2865 33.3279L9.351 50.7819H1.0665L20.4165 28.1588L0 0.859235H17.0865L28.8832 16.8128L42.5272 0.856934ZM39.6225 45.7142H44.2102L14.5935 5.66002H9.6705L39.6225 45.7142Z"
                  fill="white"
                  data-astro-cid-5vkyrosh=""
                ></path>{" "}
              </svg>
            </div>
            <div class="flex items-center justify-evenly text-center text-[18px] leading-6 [&>*]:w-[100px]">
              <span>Privacy Policy</span>
              <span>Terms and Conditions</span>
            </div>
          </div>
          <div class="text-[30px]">Contact Us</div>
          <div class="flex flex-col gap-2">
            <button
              class="mb-8 flex items-center gap-1 rounded-full border-2 border-white px-4 py-3 text-[20px]"
              onClick$={() => {
                window.scrollTo(0, 0);
              }}
            >
              <FaArrowUpSolid />
              <span>Back to top</span>
            </button>
            <span>© 2021 U-wifi</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
      <style>
        {`
     .purple-ball-blured{
      top: -80%;
  position: absolute;
      width: clamp(200px, 50vw, 400px);
  height: clamp(150px, 50vw, 250px);
  border-radius: 50px;
  
      background: linear-gradient(180deg, #2603FB 0%, #DC06FF 100%);
  filter: blur(250px);
  z-index: -1;
  }
    `}
      </style>
    </>
  );
});
