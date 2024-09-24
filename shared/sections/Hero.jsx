import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="flex flex-col max-container px-[30px] max-md:px-[0px] max-md:relative max-md:-z-10 ">
      <h1 className="text-4xl font-bold leading-[88px] mb-[32px] max-md:text-[48px] max-md:leading-[57.2px] max-sm:text-[36px] max-sm:leading-[39.6px]">
        Монетизируйте клиентскую базу, не снижая NPS
      </h1>
      <p className="text-black w-[626px] text-2xl mb-[80px] max-md:text-sm max-md:w-[393px] max-sm:w-[288px] max-md:mb-[60px] max-sm:text-base max-sm:leading-[20.4px] max-sm:mb-[112px]">
        Найдите идеальный баланс выручки и удовлетворённости пользователей
        с платформой рекламной монетизации
      </p>

      <Button label="Заказать звонок" backgroundColor="orange" />
    </section>
  );
};

export default Hero;
