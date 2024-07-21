export default function Hero() {
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
            Hi and welcome to
          </h4>
          <h2 className="text-center text-orange-500 text-5xl font-bold">
            My Portfolio Website
          </h2>
        </div>
        <p className="text-center text-orange-100">
          Created with Typescript, Tailwind CSS, React Hooks (useRef,
          useContext, useState)
        </p>
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
