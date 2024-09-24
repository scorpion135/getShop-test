import React from "react";
import Image from "next/image";
import {
  bullet,
  line1,
  line2,
  layer,
  line12x,
  line22x,
  line1rotate,
  line2rotate,
} from "./../../public/assets/icons";

const Balance = ({ sectionRefs, width }) => {
  return (
    <section
      id="advantages"
      className="max-container pb-[66px] max-md:pb-[21px] max-sm:pb-0 "
      ref={(el) => (sectionRefs.current[0] = el)}
    >
      <h2 className="font-bold mb-[80px] max-md:mb-[60px] text-3xl leading-[38.4px] text-center max-sm:text-start max-sm:text-2xl max-sm:leading-[30.6px] max-sm:mb-[31px]">
        Баланс между выручкой и удовлетворённостью пользователей
      </h2>

      <div className="flex flex-1 items-center pl-[60px] max-md:pl-[24px] max-sm:flex-col max-sm:pt-[24px]">
        <div className="mr-[80px] py-[32px] max-md:mr-[16px] max-md:w-[173px] max-sm:pl-[0px] max-sm:w-[241px] max-sm:pb-[24px]">
          <Image src={bullet} alt="Иконка" className="max-md:mb-[16px]" />
          <h3 className="font-bold w-[184px] text-2xl mb-[16px] max-md:w-[123px] max-md:text-base max-md:leading-[20.4px] max-sm:text-[20px] max-sm:leading-[25.5px] max-sm:w-[241px]">
            Частотность под контролем
          </h3>
          <p className="text-lg w-[228px] max-md:w-[130px] max-md:text-xs max-sm:text-sm max-sm:leading-[17.85px] max-sm:w-[241px]">
            Чтобы не ронять NPS и не увеличивать отток пользователей
          </p>
        </div>
        <div className="flex mr-[30px] max-md:mr-[24px] max-sm:flex-col max-sm:items-center">
          <Image
            src={width <= 350 ? line1rotate : width <= 848 ? line12x : line1}
            className=""
          ></Image>

          <div className="bg-orange w-[120px] h-[120px] rounded-[10px] flex justify-center items-center max-md:w-[80px] max-md:h-[80px]">
            <Image
              src={layer}
              className="max-md:w-[53.33px] max-md:h-[49.88px]"
            ></Image>
          </div>
          <Image
            src={width <= 350 ? line2rotate : width <= 848 ? line22x : line2}
            className=""
          ></Image>
        </div>
        <div className="py-[32px] max-md:w-[153px] max-sm:pt-[24px] max-sm:w-[241px] max-sm:pb-[24px]">
          <Image src={bullet} alt="Иконка" className="max-md:mb-[16px]" />
          <h3 className="font-bold w-[236px] text-2xl mb-[16px] max-md:text-base max-md:w-[168px] max-md:leading-[20.4px] max-sm:text-[20px] max-sm:leading-[25.5px] max-sm:w-[241px]">
            Максимальная выручка
          </h3>
          <p className="text-lg w-[228px] max-md:text-xs max-md:w-[153px] max-sm:text-sm max-sm:leading-[17.85px] max-sm:w-[241px]">
            За счёт заполенения всех рекламных мест по высокой цене
          </p>
        </div>
      </div>
    </section>
  );
};

export default Balance;
