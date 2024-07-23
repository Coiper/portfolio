export default function Contact({
  tabContactRef,
}: {
  tabContactRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section
      ref={tabContactRef}
      id="contact"
      className="my-40 align-center mx-auto p-3"
    >
      <h2 className="text-5xl font-bold text-orange-500 text-center">
        Contact
      </h2>

      {/* E-mail */}

      <div
        className="flex flex-col sm:flex-row gap-5 justify-center 
                        my-10"
      >
        <a
          href="https://elliotcoiper@gmail.com"
          className="flex-col hover:opacity-40"
        >
          <img className="w-10 h-10 m-auto" src="mail.png" />
          <div className="m-auto text-center text-orange-300">
            Email:
            <span className="font-bold text-orange-100">
              {" "}
              elliotcoiper@gmail.com
            </span>
          </div>
        </a>

        {/* Telegram  */}

        <a href="https://t.me/coiper" className="flex-col hover:opacity-40">
          <img className="w-10 h-10 m-auto" src="telegram.png" />
          <div className="m-auto text-center text-orange-300">
            Telegram:
            <span className="font-bold text-orange-100"> t.me/ananevilia</span>
          </div>
        </a>

        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/ananevilia/"
          className="flex-col hover:opacity-40"
        >
          <img className="w-10 h-10 m-auto " src="linkedin.png" />
          <div className="m-auto text-center text-orange-300">
            <span>LinkedIn:</span>
            <span className="font-bold text-orange-100"> Ananev Ilia</span>
          </div>
        </a>
      </div>
    </section>
  );
}
