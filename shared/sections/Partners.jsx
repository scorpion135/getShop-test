import Button from "../components/Button.jsx";
import Image from "next/image";

import { clickwave, novasphere, zyphronix } from "./../../public/assets/images";

const Partners = () => {
  return (
    <section className="flex items-center max-container pl-[30px] max-md:pl-0 max-sm:flex-col max-sm:items-start">
      <h3 className="text-2xl font-bold mr-[95px] max-md:text-base max-md:leading-[20.4px] max-md:mr-[70px] max-md:w-[140px] max-sm:mb-[21px]">
        Наши партнеры по монетизации
      </h3>
      <div className="flex items-center gap-[80px] max-md:gap-[55.7px] max-sm:gap-[8px] max-sm:flex-wrap max-sm:justify-center">
        <Image
          src={clickwave}
          className="max-md:w-[121.41px] max-md:h-[37.7px] max-sm:w-[138.39px] max-sm:h-[43px] max-sm:-translate-x-[10px] "
        ></Image>
        <Image
          src={zyphronix}
          className="max-md:w-[69.85px] max-md:h-[48.51px] max-sm:w-[84.64px] max-sm:h-[58.78px] max-sm:order-2 "
        ></Image>
        <Image
          src={novasphere}
          className="max-md:w-[131.4px] max-md:h-[41.48px] max-sm:w-[140.9px] max-sm:h-[47.32px]"
        ></Image>
      </div>
    </section>
  );
};

export default Partners;
