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
                       align-center bg-orange-200 mx-auto rounded"
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
            className="text-center text-orange-600 
                                   text-5xl font-bold"
          >
            {language.language != "EN" ? "About Me :" : "Обо мне :"}
          </h2>
        </div>
        <p className="text-orange-500">
          Привет! Меня зовут Илья. В IT я больше восьми лет. За эти годы я
          занимал позиции помощника руководителя отдела внедрения, специалиста
          технической поддержки, QA-аналитика/тестировщика и аналитика поисковой
          оптимизации. Последние два года я активно изучал HTML, CSS, JS, React
          и Typescript, так как решил связать дальнейшую деятельность именно с
          разработкой. Наработав опыт в различных сферах IT, я осознал, что
          данная область подходит мне больше всего, в особенности из-за
          необходимости постоянного развития.
        </p>
      </div>
    </section>
  );
}
