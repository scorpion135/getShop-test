import React from "react";
import Button from "../components/Button";
import { lap, laptop } from "../../public/assets/images";
import { bullet } from "./../../public/assets/icons";
import Image from "next/image";

const OurWork = ({ sectionRefs, width }) => {
  return (
    <section
      id="our-work"
      ref={(el) => (sectionRefs.current[1] = el)}
      className="flex justify-between items-center px-[30px] max-container relative z-10 max-md:px-0"
    >
      <div className="flex flex-1 flex-col max-container max-sm:mb-[400px]">
        <h2 className="text-3xl leading-[38.4px] font-bold mb-[32px] max-md:text-[28px] max-md:leading-[33.6px] max-md:w-[260px] max-sm:text-2xl">
          Подробные отчеты для вас и<br /> правообладателей
        </h2>
        <ul className="flex flex-col gap-[20px] mb-[80px] max-md:w-[334px] max-md:mb-[32px]">
          <li className="flex gap-3">
            <Image src={bullet}></Image>
            <p className="text-xl max-md:text-sm max-sm:w-[248px]">
              Выручка, CTR, показы и другие
              <br /> показатели в реальном времени.
            </p>
          </li>
          <li className="flex gap-3">
            <Image src={bullet}></Image>
            <p className="text-xl max-md:text-sm max-sm:w-[225px]">
              Инструменты контроля качества трафика.
            </p>
          </li>
          <li className="flex gap-3">
            <Image src={bullet}></Image>
            <p className="text-xl max-md:text-sm max-sm:w-[248px]">
              Ежемесячные автоматические отчёты
              <br /> для каждого правообладателя.
            </p>
          </li>
        </ul>
        <Button label="Заказать звонок" backgroundColor="black" />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <Image
          src={width <= 350 ? lap : laptop}
          alt="laptop"
          className="absolute z-9 -right-[200px] max-md:-right-[120px] max-md:w-[399px] max-md:h-[266px] max-sm:w-[501px] max-sm:h-[335px] max-sm:bottom-[20px] max-sm:left-[19px]"
        />
      </div>
    </section>
  );
};

export default OurWork;
