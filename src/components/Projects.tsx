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
        <div className="w-80 rounded">
          <a
            href="https://coiper.github.io/MovieSearcher/"
            className="w-full h-full"
          >
            <img
              src="movie-searcher.jpg"
              alt="Movie searcher"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/MovieSearcher/"
            >
              Movie Searcher & Watched List
            </a>
          </h2>
          <p className="text-orange-500">
            This project help searching movies and storing watched movies on
            locale storage. Built using{" "}
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
        <div className="w-80 rounded">
          <a
            href="https://tj-garden-hotel.netlify.app/"
            className="w-full h-full"
          >
            <img
              src="tj-garden.jpg"
              alt="TJ Garden Hotel"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://tj-garden-hotel.netlify.app/"
            >
              TJ Garden Hotel Management
            </a>
          </h2>
          <p className="text-orange-500">
            Project's aim is to simplify and optimize cabin management and
            bookings. With the help of authentication, it ensures security and a
            personalized user experience for accommodation workers. Built using{" "}
            <span className="font-bold">
              Vite, React Query, Styled Components, React Hook Form, Supabase,
              with authentication, charts and dark mode.{" "}
            </span>
            Deployed to Netlify.
          </p>
        </div>
      </div>

      {/* Music Player Project */}

      <div
        className="rounded p-10 bg-orange-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-5/6"
      >
        <div className="w-80 rounded">
          <a
            href="https://coiper.github.io/Music%20Player/"
            className="w-full h-full"
          >
            <img
              src="music-player.jpg"
              alt="Music player"
              className="w-full h-full 
                                        bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/Music%20Player/"
            >
              Music Player
            </a>
          </h2>
          <p className="text-orange-500">
            Simple music player that reminds of the famous old but gold Winamp
            application. Built with{" "}
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
        <div className="w-80 rounded">
          <a
            href="https://coiper.github.io/Platformer%20Game/"
            className="w-full h-full"
          >
            <img
              src="platformer.jpg"
              alt="Simple Platformer Game"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/Platformer%20Game/"
            >
              Simple Platformer Game
            </a>
          </h2>
          <p className="text-orange-500">
            Simple platformer game where you have to reach milestones right to
            the end. Built with <span className="font-bold">Vanilla JS</span>.
          </p>
        </div>
      </div>

      {/* RPG game project */}

      <div
        className="rounded p-10 bg-orange-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-5/6"
      >
        <div className="w-80 rounded">
          <a href="https://coiper.github.io/TextRPG/" className="w-full h-full">
            <img
              src="rpg-game.jpg"
              alt="Simple RPG Game"
              className="w-full h-full 
                                        bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/TextRPG/"
            >
              Simple RPG Game
            </a>
          </h2>
          <p className="text-orange-500">
            Simple Role Playing Game in which you have to beat monsters, gain
            experience, buy weapons and defeat dragon in the end. Built with
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
        <div className="w-80 rounded">
          <a
            href="https://coiper.github.io/Calorie%20Counter/"
            className="w-full h-full"
          >
            <img
              src="calorie-counter.jpg"
              alt="Calorie Counter"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/Calorie%20Counter/"
            >
              Calorie Counter
            </a>
          </h2>
          <p className="text-orange-500">
            Small calorie counter application that helps calculate your intake
            and remaining calories due to daily budget. Built with
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
        <div className="w-80 rounded">
          <a
            href="https://coiper.github.io/Shopping%20Cart/"
            className="w-full h-full"
          >
            <img
              src="shopping-cart.jpg"
              alt="Shopping Cart"
              className="w-full h-full 
                                        bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/Shopping%20Cart/"
            >
              Shopping Cart
            </a>
          </h2>
          <p className="text-orange-500">
            Simple application that demonstrates shopping cart feature with
            random desserts menu. Built with
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
        <div className="w-80 rounded">
          <a
            href="https://coiper.github.io/Todo%20App/"
            className="w-full h-full"
          >
            <img
              src="todo-app.jpg"
              alt="Todo Application"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://coiper.github.io/Todo%20App/"
            >
              Todo Application
            </a>
          </h2>
          <p className="text-orange-500">
            Small and simple Todo list application. Built with
            <span className="font-bold"> Vanilla JS</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
