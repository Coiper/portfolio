export default function Skills({
  tabSkillsRef,
}: {
  tabSkillsRef: React.RefObject<HTMLDivElement>;
}) {
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
        <ol className="space-y-4 text-orange-100 list-inside">
          <li>
            <p className="text-orange-300 text-xl font-bold">Education</p>
            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
              <li>
                <span className="font-bold">
                  Kazan Institute of Economics, Management and Law,
                </span>{" "}
                <span className="text-orange-300"> 2009-2012</span>
                <p>Applied Computer Science in Economics, Master's Degree</p>
              </li>
              <li>
                <span className="font-bold">
                  Kazan State Technical University,{" "}
                </span>
                <span className="text-orange-300"> 2006-2009</span>
                <p>
                  Automated Systems for Information Processing and Management
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="text-orange-300 text-xl font-bold">
              Experience in IT
            </p>
            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
              <li>
                <span className="font-bold">JSC "АВАНТА Солюшенс",</span>
                <span className="text-orange-300"> 2022-2023</span>
                <p>QA Engineer, Procter & Gamble outsourcing project</p>
                <p>End-to-end and regression testing</p>
              </li>
              <li>
                <span className="font-bold">Telus International,</span>
                <span className="text-orange-300"> 2019-2022</span>
                <p>Map Search Analyst</p>
                <p>Online mapping and routing related tasks</p>
              </li>
              <li>
                <span className="font-bold">JSC "ЦИТ "Бисофт",</span>
                <span className="text-orange-300"> 2016-2018</span>
                <p>Technical support engineer</p>
                <p>
                  Technical customer support. Training and consultancy service.
                </p>
              </li>
              <li>
                <span className="font-bold">JSC "Горизонты роста",</span>
                <span className="text-orange-300"> 2014-2016</span>
                <p>Assistant project manager</p>
                <p>
                  System implementation. Technical support. Developing
                  instructions and technical specifications.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="text-orange-300 text-xl font-bold">
              Educational courses and exams
            </p>
            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
              <li>
                <span className="font-bold">
                  TypeScript 5+ Fundamentals, v4,{" "}
                </span>
                <span className="text-orange-300">2024</span>
                <p>Frontend Masters, Web-Development</p>
              </li>
              <li>
                <span className="font-bold">
                  The Ultimate React Course 2024: React, Next.js, Redux & More,
                </span>
                <span className="text-orange-300"> 2024</span>
                <p>Udemy, Web-Development</p>
              </li>
              <li>
                <span className="font-bold">
                  JavaScript Algorithms and Data Structures,
                </span>
                <span className="text-orange-300"> 2023</span>
                <p>freeCodeCamp, Web-Development</p>
              </li>
              <li>
                <span className="font-bold">
                  Front End Development Libraries,
                </span>
                <span className="text-orange-300"> 2023</span>
                <p>freeCodeCamp, Web-Development</p>
              </li>
              <li>
                <span className="font-bold">
                  Google Data Analytics Professional Certificate,
                </span>
                <span className="text-orange-300"> 2021</span>
                <p>Google, Data Analytics</p>
              </li>
              <li>
                <span className="font-bold">IELTS General Training,</span>
                <span className="text-orange-300"> 2018</span>
                <p>International Examination Centre, CEFR Level B2</p>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
