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
                Kazan Institute of Economics, Management and Law, 2009-2012
                <p>Applied Computer Science in Economics, Master's Degree</p>
              </li>
              <li>
                Kazan State Technical University, 2006-2009
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
                ООО "АВАНТА Солюшенс", 2022-2023
                <p>QA Engineer, Procter & Gamble outsourcing project</p>
                <p>End-to-end and regression testing</p>
              </li>
              <li>
                ООО "ЦИТ "Бисофт" 2016-2018
                <p>Technical support engineer</p>
                <p>
                  Technical customer support. Training and consultancy service.
                </p>
              </li>
              <li>
                ООО "Горизонты роста" 2014-2016
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
                TypeScript 5+ Fundamentals, v4, 2024
                <p>Frontend Masters, Web-Development</p>
              </li>
              <li>
                The Ultimate React Course 2024: React, Next.js, Redux & More,
                2024
                <p>Udemy, Web-Development</p>
              </li>
              <li>
                The Complete JavaScript Course 2023: From Zero to Expert!, 2023
                <p>Udemy, Web-Development</p>
              </li>
              <li>
                Google Data Analytics Professional Certificate, 2021
                <p>Google, Data Analytics</p>
              </li>
              <li>
                IELTS General Training, 2018
                <p>International Examination Centre, CEFR Level B2</p>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
