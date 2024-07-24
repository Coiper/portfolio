import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

export default function About({
  tabAboutRef,
}: {
  tabAboutRef: React.RefObject<HTMLDivElement>;
}) {
  const language = useContext(LanguageContext);
  return (
    <section
      ref={tabAboutRef}
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center mx-auto
                       rounded-xl bg-gradient-to-b from-stone-700  to-stone-800 p-0.5 shadow-lg"
    >
      <div className="flex-1">
        <img
          src="photo.jpg"
          alt="About"
          className="rounded w-full h-full bg-cover"
        />
      </div>
      <div
        className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6"
      >
        <div>
          <h2
            className="text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-200 to-orange-300
                                   text-5xl font-bold"
          >
            {language.language != "EN" ? "About Me :" : "Обо мне :"}
          </h2>
        </div>
        <p className="text-orange-200 font-bold">
          {language.language != "EN"
            ? "Hello there! My name is Ilia. I have over 8 years of IT experience. Given that I managed to work as an assistant project manager, technical support engineer, QA analyst/tester and map search analyst. For the last 2 years I've been actively studying HTML, CSS, JS, React and Typescript, since I decided to combine my professional life particularly with the development. As I got some experience in different IT fields I did realise that this professional direction suits me best, especially given the need for both professional and personal growth."
            : "Привет! Меня зовут Илья. В IT я больше восьми лет. За эти годы я занимал позиции помощника руководителя отдела внедрения, специалиста технической поддержки, QA-аналитика/тестировщика и аналитика поисковой оптимизации. Последние два года я активно изучал HTML, CSS, JS, React и Typescript, так как решил связать дальнейшую деятельность именно с разработкой. Наработав опыт в различных сферах IT, я осознал, что данная область подходит мне больше всего, в особенности из-за необходимости постоянного развития."}
        </p>
      </div>
    </section>
  );
}
