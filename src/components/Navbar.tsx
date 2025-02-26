import { useContext } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LanguageContext } from "./LanguageProvider";

interface NavbarPropTypes {
  tabContactRef: React.RefObject<HTMLDivElement> | null;
  tabAboutRef: React.RefObject<HTMLDivElement>;
  tabSkillsRef: React.RefObject<HTMLDivElement>;
  tabProjectsRef: React.RefObject<HTMLDivElement>;
}

export default function Navbar({
  tabContactRef,
  tabAboutRef,
  tabSkillsRef,
  tabProjectsRef,
}: NavbarPropTypes) {
  const language = useContext(LanguageContext);
  return (
    <nav
      className="w-full px-5 sm:px-10 py-5 shadow-xl 
                        backdrop-blur-lg fixed top-0 z-10"
    >
      <div
        className="container flex flex-col lg:flex-row
                            gap-5 justify-between w-full 
                            items-center mx-auto"
      >
        <h3 className="text-3xl text-orange-500 font-bold">
          {language.language != "EN" ? "Ananev Ilia" : "Ананьев Илья"}
        </h3>
        <ul className="flex gap-3 align-center p-1 flex-wrap">
          <li>
            <button
              className="text-sm text-orange-100 sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-orange-600"
              onClick={() =>
                tabAboutRef?.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              {language.language != "EN" ? "About" : "Обо мне"}
            </button>
          </li>
          <li>
            <button
              className="text-sm text-orange-100 sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-orange-600"
              onClick={() =>
                tabSkillsRef?.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              {language.language != "EN"
                ? "Education & Experience"
                : "Образование и опыт"}
            </button>
          </li>
          <li>
            <button
              className="text-sm text-orange-100 sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-orange-600"
              onClick={() =>
                tabProjectsRef?.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              {language.language != "EN" ? "Projects" : "Проекты"}
            </button>
          </li>
          <li>
            <button
              className="text-sm text-orange-100 sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-orange-600"
              onClick={() =>
                tabContactRef?.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              {language.language != "EN" ? "Contact" : "Контакты"}
            </button>
          </li>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
