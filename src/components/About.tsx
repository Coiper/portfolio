export default function About() {
  return (
    <section
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-orange-200 mx-auto"
    >
      <div className="flex-1">
        <img src="photo.jpg" alt="About" className="w-full h-full bg-cover" />
      </div>
      <div
        className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6"
      >
        <div>
          <h2
            className="text-center text-orange-600 
                                   text-5xl font-bold"
          >
            About Me :
          </h2>
        </div>
        <p className="text-orange-500">
          Больше восьми лет опыта в сфере IT. Занимал позиции тестировщика,
          специалиста тех. поддержки и помощника руководителя отдела внедрения.
          Хорошо знаком со всем жизненным циклом цифрового продукта. Последние
          два года активно изучал HTML, CSS, JS и React, т.к. планирую связать
          дальнейшую область профессиональной деятельности именно с разработкой.
        </p>
      </div>
    </section>
  );
}
