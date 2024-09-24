"use client";
import React from "react";
import Image from "next/image";
import { clearCheck, fillCheck } from "../../public/assets/icons";

const Form = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [text, setText] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailFilled, setEmailFilled] = React.useState("");
  const [emailError, setEmailError] = React.useState("Это обязательное поле");

  const [formValid, setFormValid] = React.useState(false);

  React.useEffect(() => {
    if (emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Неправильно указана почта");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setIsChecked(false);
    setText("");
    alert("Форма отправлена");
    setFormValid(false);
  };

  return (
    <section
      id="contact-us"
      className="max-container flex flex-col px-[30px] pb-[15px] max-md:px-0"
    >
      <h3 className="text-3xl leading-[38.4px] font-bold mb-[64px]">
        Заполните форму
      </h3>
      <div className="w-full flex items-center gap-[40px] max-md:flex-col max-md:gap-[32px] ">
        <textarea
          name="question"
          id="question"
          cols="30"
          rows="10"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Напишите свой вопрос"
          className="bg-transparent border-[1.5px] border-gray1 outline-none rounded-xl w-[560px] pl-4 pt-3 text-lg resize-none h-[216px] focus:border-black max-md:w-full"
        ></textarea>
        <form className="flex flex-col max-md:w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            value={email}
            placeholder="Введите e-mail"
            onBlur={() => setEmailFilled(true)}
            onChange={(e) => emailHandler(e)}
            className={`outline-none pb-3 font-regular text-lg bg-gray3 placeholder:text-black border-b-[1.5px] focus:border-b-2 ${
              !emailError && "focus:border-black"
            } ${
              emailFilled && emailError
                ? "border-b-[2px] border-error mb-2"
                : "border-gray1 mb-[32px]"
            } max-md:w-full `}
          />
          {emailFilled && emailError && (
            <p className="text-error mb-2 text-[10px] font-medium">
              {emailError}
            </p>
          )}
          <div className="flex mb-[48px] relative max-md:mb-[62px] max-md:w-full max-sm:mb-[32px]">
            <Image
              src={isChecked ? fillCheck : clearCheck}
              className="cursor-pointer absolute top-[4px]"
              onClick={() => setIsChecked((prev) => !prev)}
            />
            <label htmlFor="check" className="pl-6 text-sm leading-[20px]">
              Я ознакомлен(а) с{" "}
              <span className="underline">политикой конфиденциальности</span> и
              согласен(на) на обработку{" "}
              <span className="underline">персональных данных</span>.
            </label>
          </div>

          <button
            type="submit"
            disabled={!formValid}
            className="bg-black w-[560px] h-[48px] text-white rounded-xl text-sm max-md:w-full"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
