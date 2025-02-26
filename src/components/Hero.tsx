import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

export default function Hero() {
  const language = useContext(LanguageContext);
  return (
    <section
      id="hero"
      className="w-full px-10 flex gap-12 flex-col lg:flex-row
                   justify-center items-center content-center mt-40
                   mb-16 lg:mt-10 mx-auto lg:gap-0 h-[80vh]"
    >
      <div className="flex-1 flex flex-col justify-center items-center gap-5">
        <div>
          <h4 className="text-center text-orange-100 text-xl font-bold">
            {language.language != "EN"
              ? "Hi and welcome to"
              : "Привет и добро пожаловать на"}
          </h4>
          <h2 className="text-center text-orange-500 text-5xl font-bold">
            {language.language != "EN"
              ? "My Portfolio Website"
              : "Мой Сайт-Портфолио"}
          </h2>
        </div>
        <p className="text-center text-orange-100">
          {language.language != "EN"
            ? "Built using React, Typescript, Tailwind CSS"
            : "Создан при помощи React, Typescript, Tailwind CSS"}
        </p>
        <div className="bg-orange-100 hover:bg-stone-700 transition duration-200 ease-in-out text-stone-800 hover:text-stone-900 font-bold py-1 px-2 rounded inline-flex items-center">
          <img src="downloadPDF.png" className="size-7" />
          <a
            href={
              language.language != "EN"
                ? "Ananev-Ilia_CV_EN.pdf"
                : "Ananev-Ilia_CV_RU.pdf"
            }
            download="Ananev Ilia"
          >
            {language.language != "EN" ? " Download CV" : "Скачать резюме"}
          </a>
        </div>
      </div>
      <div className="flex size-56">
        <img
          src="avatar.jpg"
          alt="Hello.jpg"
          className="w-full h-full bg-cover rounded-full"
        />
      </div>
    </section>
  );
}
