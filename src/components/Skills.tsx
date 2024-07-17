export default function Skills({ tabSkillsRef }) {
  const skills = ["Python", "HTML", "CSS", "Javascript", "React", "NextJs"];
  return (
    <section
      ref={tabSkillsRef}
      id="skills"
      className="px-10 w-full my-40 mx-auto"
    >
      <h2 className="text-center text-6xl text-orange-500 font-bold">
        Education & Experience
      </h2>
      <div
        className="mt-10 flex gap-5 justify-center 
                            flex-wrap mx-auto max-w-xl"
      >
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer px-12 py-10 
                                        rounded bg-orange-300 text-lg 
                                        flex items-center justify-center 
                                        font-bold hover:shadow-xl"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
}
