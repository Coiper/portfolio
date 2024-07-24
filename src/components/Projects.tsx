import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

export default function Projects({
  tabProjectsRef,
}: {
  tabProjectsRef: React.RefObject<HTMLDivElement>;
}) {
  const language = useContext(LanguageContext);
  return (
    <section
      ref={tabProjectsRef}
      id="projects"
      className="my-20 w-full flex flex-col gap-6 align-center mx-auto"
    >
      <h2 className="text-5xl text-orange-500 font-bold text-center">
        {language.language != "EN" ? "My Projects" : "Мои проекты"}
      </h2>

      {/* Movie Seatcher Project */}

      <div
        className="rounded p-10 bg-orange-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-5/6"
      >
        <div className="w-80 rounded overflow-hidden">
          <a
            href="https://coiper.github.io/MovieSearcher/"
            className="w-full h-full"
          >
            <img
              src="movie-searcher.jpg"
              alt="Movie searcher"
              className="w-full h-full rounded hover:scale-110 hover:opacity-80 transition duration-500 ease-in-out"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/MovieSearcher/"
            >
              {language.language != "EN"
                ? "Movie Searcher & Watched List"
                : "Поисковик фильмов"}
            </a>
          </h2>
          <p className="text-orange-500">
            {language.language != "EN"
              ? "This project help searching movies and storing watched movies in locale storage. Built using "
              : "Приложение позволяет находить фильмы по названию и сохранять информацию о просмотренных фильмах в локальном хранилище. Создано при помощи "}
            <span className="font-bold">
              React, Typescript, Vite, Data Fetching, React Hooks (useEffect,
              useState, useRef, useContext, Custom hooks).
            </span>
          </p>
        </div>
      </div>

      {/* TJ Garden Project */}

      <div
        className="rounded p-10 bg-orange-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-5/6"
      >
        <div className="w-80 rounded overflow-hidden">
          <a
            href="https://tj-garden-hotel.netlify.app/"
            className="w-full h-full"
          >
            <img
              src="tj-garden.jpg"
              alt="TJ Garden Hotel"
              className="w-full h-full rounded hover:scale-110 hover:opacity-80 transition duration-500 ease-in-out"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://tj-garden-hotel.netlify.app/"
            >
              {language.language != "EN"
                ? "TJ Garden Hotel Management"
                : "Управление TJ Garden отелем"}
            </a>
          </h2>
          <p className="text-orange-500">
            {language.language != "EN"
              ? "Project's aim is to simplify and optimize cabin management and bookings. With the help of authentication, it ensures security and a personalized user experience for accommodation workers. Built using "
              : "Цель проекта упростить и оптимизировать менеджмент работы отеля и букинга. Используя инструмент аутентификации, приложение гарантирует безопасность использования для работников отеля. Создано при помощи "}
            <span className="font-bold">
              {language.language != "EN"
                ? "Vite, React Query, Styled Components, React Hook Form, Supabase, with authentication, charts and dark mode."
                : "Vite, React Query, Styled Components, React Hook Form, Supabase, c аутентификацией, графиками и тёмной темой. "}
            </span>
            {language.language != "EN"
              ? "Deployed to Netlify."
              : "Развернуто на Netlify."}
          </p>
        </div>
      </div>

      {/* Music Player Project */}

      <div
        className="rounded p-10 bg-orange-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-5/6"
      >
        <div className="w-80 rounded overflow-hidden">
          <a
            href="https://coiper.github.io/Music%20Player/"
            className="w-full h-full"
          >
            <img
              src="music-player.jpg"
              alt="Music player"
              className="w-full h-full rounded hover:scale-110 hover:opacity-80 transition duration-500 ease-in-out"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/Music%20Player/"
            >
              {language.language != "EN" ? "Music Player" : "Аудиоплеер"}
            </a>
          </h2>
          <p className="text-orange-500">
            {language.language != "EN"
              ? "Simple music player that reminds of the famous old but gold Winamp application. Built with"
              : "Простой музыкальный проигрыватель, который напоминает старый добрый Winamp. Создан при помощи "}
            <span className="font-bold">Vanilla JS</span>.
          </p>
        </div>
      </div>

      {/* Platformer game project */}

      <div
        className="rounded p-10 bg-orange-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-5/6"
      >
        <div className="w-80 rounded overflow-hidden">
          <a
            href="https://coiper.github.io/Platformer%20Game/"
            className="w-full h-full"
          >
            <img
              src="platformer.jpg"
              alt="Simple Platformer Game"
              className="w-full h-full rounded hover:scale-110 hover:opacity-80 transition duration-500 ease-in-out"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/Platformer%20Game/"
            >
              {language.language != "EN"
                ? "Simple Platformer Game"
                : "Незамысловатая игра платформер"}
            </a>
          </h2>
          <p className="text-orange-500">
            {language.language != "EN"
              ? "Simple platformer game where you have to reach milestones right to the end. Built with "
              : "Простая игра платформер, в которой нужно добираться до контрольных точек и дойти до финиша. Создана при помощи "}
            <span className="font-bold">Vanilla JS</span>.
          </p>
        </div>
      </div>

      {/* RPG game project */}

      <div
        className="rounded p-10 bg-orange-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-5/6"
      >
        <div className="w-80 rounded overflow-hidden">
          <a href="https://coiper.github.io/TextRPG/" className="w-full h-full">
            <img
              src="rpg-game.jpg"
              alt="Simple RPG Game"
              className="w-full h-full rounded hover:scale-110 hover:opacity-80 transition duration-500 ease-in-out"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/TextRPG/"
            >
              {language.language != "EN"
                ? "Simple RPG Game"
                : "Простая RPG игра"}
            </a>
          </h2>
          <p className="text-orange-500">
            {language.language != "EN"
              ? "Simple Role Playing Game in which you have to beat monsters, gain experience, buy weapons and defeat dragon in the end. Built with "
              : "Простая текстовая ролевая игра, в которой нужно побеждать монстров, набирать опыт, покупать оружие и, в конце концов, сразиться с драконом. Создана при помощи "}
            <span className="font-bold"> Vanilla JS</span>.
          </p>
        </div>
      </div>

      {/* Calorie counter  */}

      <div
        className="rounded p-10 bg-orange-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-5/6"
      >
        <div className="w-80 rounded overflow-hidden">
          <a
            href="https://coiper.github.io/Calorie%20Counter/"
            className="w-full h-full"
          >
            <img
              src="calorie-counter.jpg"
              alt="Calorie Counter"
              className="w-full h-full rounded hover:scale-110 hover:opacity-80 transition duration-500 ease-in-out"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/Calorie%20Counter/"
            >
              {language.language != "EN"
                ? "Calorie Counter"
                : "Счётчик калорий"}
            </a>
          </h2>
          <p className="text-orange-500">
            {language.language != "EN"
              ? "Small calorie counter application that helps calculate your intake and remaining calories due to daily budget. Built with "
              : "Маленький счётчик калорий, который помогает посчитать потребление согласно заданной дневной нормы. Создан с "}
            <span className="font-bold"> Vanilla JS</span>.
          </p>
        </div>
      </div>

      {/* Shopping cart */}

      <div
        className="rounded p-10 bg-orange-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-5/6"
      >
        <div className="w-80 rounded overflow-hidden">
          <a
            href="https://coiper.github.io/Shopping%20Cart/"
            className="w-full h-full"
          >
            <img
              src="shopping-cart.jpg"
              alt="Shopping Cart"
              className="w-full h-full rounded hover:scale-110 hover:opacity-80 transition duration-500 ease-in-out"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/Shopping%20Cart/"
            >
              {language.language != "EN" ? "Shopping Cart" : "Корзина покупок"}
            </a>
          </h2>
          <p className="text-orange-500">
            {language.language != "EN"
              ? "Simple application that demonstrates shopping cart feature with random desserts menu. Built with "
              : "Простое приложение, которое демонстрирует работу корзины покупок на примере меню из десертов. Создана при помощи "}
            <span className="font-bold"> Vanilla JS</span>.
          </p>
        </div>
      </div>

      {/* Todo App */}

      <div
        className="rounded p-10 bg-orange-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-5/6"
      >
        <div className="w-80 rounded overflow-hidden">
          <a
            href="https://coiper.github.io/Todo%20App/"
            className="w-full h-full"
          >
            <img
              src="todo-app.jpg"
              alt="Todo Application"
              className="w-full h-full rounded hover:scale-110 hover:opacity-80 transition duration-500 ease-in-out"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/Todo%20App/"
            >
              {language.language != "EN" ? "Todo Application" : "Список дел"}
            </a>
          </h2>
          <p className="text-orange-500">
            {language.language != "EN"
              ? "Small and simple Todo list application. Built with "
              : "Маленькое и просто приложение для ведения списка дел. Создано при помощи "}
            <span className="font-bold"> Vanilla JS</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
