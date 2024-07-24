import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

export default function Skills({
  tabSkillsRef,
}: {
  tabSkillsRef: React.RefObject<HTMLDivElement>;
}) {
  const language = useContext(LanguageContext);
  return (
    <section
      ref={tabSkillsRef}
      id="skills"
      className="px-10 w-full my-40 mx-auto"
    >
      <h2 className="text-center text-6xl text-orange-500 font-bold">
        {language.language != "EN"
          ? "Education & Experience"
          : "Образование и опыт"}
      </h2>
      <div
        className="mt-10 flex gap-5 justify-center 
                            flex-wrap mx-auto max-w-xl"
      >
        <ol className="space-y-4 text-orange-100 list-inside">
          <li>
            <p className="text-orange-300 text-xl font-bold">
              {language.language != "EN" ? "Education" : "Образование"}
            </p>
            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
              <li>
                <span className="font-bold">
                  {language.language != "EN"
                    ? "Kazan Institute of Economics, Management and Law,"
                    : "Институт экономики, управления и права, Казань,"}
                </span>{" "}
                <span className="text-orange-300"> 2009-2012</span>
                <p>
                  {language.language != "EN"
                    ? "Applied Computer Science in Economics, Master's Degree"
                    : "Прикладная информатика в экономике, Высшее специальное"}
                </p>
              </li>
              <li>
                <span className="font-bold">
                  {language.language != "EN"
                    ? "Kazan State Technical University,"
                    : "Казанский государственный технический университет,"}{" "}
                </span>
                <span className="text-orange-300"> 2006-2009</span>
                <p>
                  {language.language != "EN"
                    ? "Automated Systems for Information Processing and Management"
                    : "Автоматизированные системы обработки информации и управления"}
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="text-orange-300 text-xl font-bold">
              {language.language != "EN"
                ? "Experience in IT"
                : "Опыт работы в IT"}
            </p>
            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
              <li>
                <span className="font-bold">
                  {language.language != "EN"
                    ? 'JSC "AVANTA Solutions",'
                    : 'ООО "АВАНТА Солюшенс"'}
                </span>
                <span className="text-orange-300"> 2022-2023</span>
                <p>
                  {language.language != "EN"
                    ? "QA Analyst, Procter & Gamble outsourcing project"
                    : "QA Аналитик, Тестировщик SAP"}
                </p>
                <p>
                  {language.language != "EN"
                    ? "End-to-end and regression testing"
                    : "End-to-end и регрессионное тестирование"}
                </p>
              </li>
              <li>
                <span className="font-bold">Telus International,</span>
                <span className="text-orange-300"> 2019-2022</span>
                <p>
                  {language.language != "EN"
                    ? "Map Search Analyst"
                    : "Аналитик поисковой оптимизации"}
                </p>
                <p>
                  {language.language != "EN"
                    ? "Online mapping and routing related tasks"
                    : "Оптимизация картографического сервиса"}
                </p>
              </li>
              <li>
                <span className="font-bold">
                  {language.language != "EN"
                    ? 'JSC "CIT "Bisoft",'
                    : 'ООО "ЦИТ "Бисофт"'}
                </span>
                <span className="text-orange-300"> 2016-2018</span>
                <p>
                  {" "}
                  {language.language != "EN"
                    ? "Technical support engineer"
                    : "Инженер технической поддержки"}
                </p>
                <p>
                  {language.language != "EN"
                    ? "Technical customer support. Training and consultancy service."
                    : "Осуществление тех. поддержки. Обучение и консультации пользователей."}
                </p>
              </li>
              <li>
                <span className="font-bold">
                  {language.language != "EN"
                    ? 'JSC "Gorizonty rosta",'
                    : 'ООО "Горизонты роста'}
                </span>
                <span className="text-orange-300"> 2014-2016</span>
                <p>
                  {language.language != "EN"
                    ? "Assistant project manager"
                    : "Помощник руководителя проекта"}
                </p>
                <p>
                  {language.language != "EN"
                    ? "System implementation. Technical support. Developing instructions and technical specifications."
                    : "Внедрение системы. Тех. поддержка. Написание инструкций и технических спецификаций."}
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="text-orange-300 text-xl font-bold">
              {language.language != "EN"
                ? "Educational courses and exams"
                : "Обучающие курсы и программы"}
            </p>
            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
              <li>
                <span className="font-bold">
                  TypeScript 5+ Fundamentals, v4,{" "}
                </span>
                <span className="text-orange-300">2024</span>
                <p>
                  {language.language != "EN"
                    ? "Frontend Masters, Web-Development"
                    : "Frontend Masters, Веб-разработка"}
                </p>
              </li>
              <li>
                <span className="font-bold">
                  The Ultimate React Course 2024: React, Next.js, Redux & More,
                </span>
                <span className="text-orange-300"> 2024</span>
                <p>
                  {" "}
                  {language.language != "EN"
                    ? "Udemy, Web-Development"
                    : "Udemy, Веб-разработка"}
                </p>
              </li>
              <li>
                <span className="font-bold">
                  JavaScript Algorithms and Data Structures,
                </span>
                <span className="text-orange-300"> 2023</span>
                <p>
                  {language.language != "EN"
                    ? "freeCodeCamp, Web-Development"
                    : "freeCodeCamp, Веб-разработка"}
                </p>
              </li>
              <li>
                <span className="font-bold">
                  Front End Development Libraries,
                </span>
                <span className="text-orange-300"> 2023</span>
                <p>
                  {language.language != "EN"
                    ? "freeCodeCamp, Web-Development"
                    : "freeCodeCamp, Веб-разработка"}
                </p>
              </li>
              <li>
                <span className="font-bold">
                  Google Data Analytics Professional Certificate,
                </span>
                <span className="text-orange-300"> 2021</span>
                <p>
                  {language.language != "EN"
                    ? "Google, Data Analytics"
                    : "Google, Дата-аналитика"}
                </p>
              </li>
              <li>
                <span className="font-bold">IELTS General Training,</span>
                <span className="text-orange-300"> 2018</span>
                <p>
                  {language.language != "EN"
                    ? "International Examination Centre, CEFR Level B2"
                    : "Международный экзаменационный центр, Оценка CEFR B2"}
                </p>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
