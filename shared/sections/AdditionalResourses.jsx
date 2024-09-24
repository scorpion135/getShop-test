"use client";
import React from "react";

const AdditionalResourses = () => {
  const items = [
    {
      name: "Операторам",
      disabled: false,
    },
    {
      name: "ОTT сервисам",
      disabled: false,
    },
  ];

  const [active, setActive] = React.useState(0);
  const disabledExist = items.find((item) => item.disabled === true);

  const onClickBtn = (i) => {
    setActive(i);
  };

  React.useState(() => {
    const notDisabled = items.filter((item) => !item.disabled);
    setActive(items.indexOf(notDisabled[0]));
  }, []);

  return (
    <section
      id="about us"
      className="flex justify-between w-full max-container px-[30px] pb-[24px] max-md:gap-[79px]  max-md:px-[0px] max-sm:flex-col max-sm:gap-[22px] max-sm:justify-start max-sm:h-[286px]"
    >
      <p className="font-bold text-3xl leading-[38.4px] max-md:text-[28px] max-md:leading-[38.4px] max-md:w-[275px] w-[460px] max-sm:text-2xl ">
        Дополнительные источники выручки для разных компаний
      </p>
      <div className="flex flex-col items-start gap-[32px] max-w-[560px] max-md:w-[334px] max-md:gap-[16px] max-md:h-[31px] max-sm:w-full">
        <div
          className={`flex justify-between ${
            disabledExist ? "bg-gray4" : "bg-white"
          } rounded-[12px] w-full h-[60px] p-1`}
        >
          {items.map((item, index) => (
            <button
              key={index}
              disabled={item.disabled}
              onClick={() => onClickBtn(index)}
              className={`disabled:bg-gray4 disabled:text-gray1 ${
                active === index
                  ? "bg-black rounded-[10px] text-white"
                  : "bg-white rounded-[10px] text-black"
              } w-1/2 text-2xl font-bold max-md:text-base max-sm:text-xs max-sm:py-[5.17px]`}
            >
              {item.name}
            </button>
          ))}
        </div>
        {active === 0 ? (
          <p className="font-regular text-xl leading-8 max-md:text-sm w-full max-sm:text-base max-sm:leading-[20.4px]">
            Найдите идеальный баланс выручки и удовлетворённости пользователей с
            платформой рекламной монетизации
          </p>
        ) : (
          <p className="font-regular text-[22px] leading-8 max-md:text-sm max-sm:text-base max-sm:leading-[20.4px]">
            Дополнительные возможности обогащения данных об аудитории и
            монетизации
          </p>
        )}
      </div>
    </section>
  );
};

export default AdditionalResourses;
