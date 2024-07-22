export default function Projects({
  tabProjectsRef,
}: {
  tabProjectsRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section
      ref={tabProjectsRef}
      id="projects"
      className="my-20 w-full flex flex-col gap-6 align-center mx-auto"
    >
      <h2 className="text-5xl text-orange-500 font-bold text-center">
        My Projects
      </h2>

      {/* Movie Seatcher Project */}

      <div
        className="p-10 bg-orange-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://coiper.github.io/MovieSearcher/"
            className="w-full h-full"
          >
            <img
              src="movie-searcher.jpg"
              alt="Movie searcher"
              className="w-full h-full 
                                        bg-cover rounded"
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
            locale storage. Built using React, Typescript, Vite, Data Fetching,
            React Hooks (useEffect, useState, useRef, useContext, Custom hooks)
          </p>
        </div>
      </div>

      {/* TJ Garden Project */}

      <div
        className="p-10 bg-orange-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full"
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
              TJ Garden Hotel
            </a>
          </h2>
          <p className="text-orange-500">
            Built using React Query, Styled Components, React Hook Form,
            Supabase, with advanced compound component pattern, authentication,
            charts, dark mode, professional application planning and
            development.
          </p>
        </div>
      </div>

      {/* Music Player Project */}

      <div
        className="p-10 bg-orange-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full"
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
            This project help searching movies and storing watched movies on
            locale storage. Built using React, Typescript, Vite, Data Fetching,
            React Hooks (useEffect, useState, useRef, useContext, Custom hooks)
          </p>
        </div>
      </div>

      {/* Platformer game project */}

      <div
        className="p-10 bg-orange-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full"
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
            Built using React Query, Styled Components, React Hook Form,
            Supabase, with advanced compound component pattern, authentication,
            charts, dark mode, professional application planning and
            development.
          </p>
        </div>
      </div>

      {/* RPG game project */}

      <div
        className="p-10 bg-orange-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full"
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
            This project help searching movies and storing watched movies on
            locale storage. Built using React, Typescript, Vite, Data Fetching,
            React Hooks (useEffect, useState, useRef, useContext, Custom hooks)
          </p>
        </div>
      </div>

      {/* Calorie counter  */}

      <div
        className="p-10 bg-orange-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full"
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
            Built using React Query, Styled Components, React Hook Form,
            Supabase, with advanced compound component pattern, authentication,
            charts, dark mode, professional application planning and
            development.
          </p>
        </div>
      </div>

      {/* Shopping cart */}

      <div
        className="p-10 bg-orange-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full"
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
            This project help searching movies and storing watched movies on
            locale storage. Built using React, Typescript, Vite, Data Fetching,
            React Hooks (useEffect, useState, useRef, useContext, Custom hooks)
          </p>
        </div>
      </div>

      {/* Todo App */}

      <div
        className="p-10 bg-orange-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://coiper.github.io/Todo%20App/"
            className="w-full h-full"
          >
            <img
              src="tj-garden.jpg"
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
            Built using React Query, Styled Components, React Hook Form,
            Supabase, with advanced compound component pattern, authentication,
            charts, dark mode, professional application planning and
            development.
          </p>
        </div>
      </div>
    </section>
  );
}
