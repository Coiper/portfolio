export default function Projects({
  tabProjectsRef,
}: {
  tabProjectsRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section
      ref={tabProjectsRef}
      id="projects"
      className="my-20 w-full flex flex-col gap-5 align-center mx-auto"
    >
      <h2 className="text-5xl text-orange-500 font-bold text-center">
        My Projects
      </h2>
      <div
        className="p-10 bg-orange-300 flex flex-col justify-center items-center
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
              alt="Project 1"
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
          <p>
            This project help searching movies and storing watched movies on
            locale storage. Built using React, Typescript, Vite, React Hooks
            (useState, useRef, useContext, Custom hooks)
          </p>
        </div>
      </div>
      <div
        className="p-10 bg-orange-300 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
            className="w-full h-full"
          >
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png"
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline text-orange-600 hover:text-orange-600"
              href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
            >
              15 Puzzle Game
            </a>
          </h2>
          <p>
            15 puzzle game is basically a tile-based game in which there are 16
            tiles out of which 1 tile is left empty and the remaining tiles are
            filled with numbers from 1 to 15 in random order. The user has to
            arrange all the tiles in numerical order with the rule that they can
            only move the tile that is a direct neighbor of the empty tile.
          </p>
        </div>
      </div>
    </section>
  );
}
