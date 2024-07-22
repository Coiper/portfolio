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
        className="flex gap-5 justify-center 
                        my-10"
      >
        <a href="https://elliotcoiper@gmail.com" className="flex-col">
          <img className="w-10 h-10 m-auto hover:opacity-10" src="mail.png" />
          <a
            rel="noreferrer"
            target="_blank"
            className="m-auto text-center text-orange-300 hover:underline hover:text-orange-600"
            href="https://elliotcoiper@gmail.com"
          >
            Email:
            <span className="font-bold text-orange-100">
              {" "}
              elliotcoiper@gmail.com
            </span>
          </a>
        </a>

        {/* Telegram  */}

        <a href="https://t.me/coiper" className="flex-col">
          <img
            className="w-10 h-10 m-auto hover:opacity-10"
            src="telegram.png"
          />
          <a
            rel="noreferrer"
            target="_blank"
            className="m-auto text-center text-orange-300 hover:underline hover:text-orange-600"
            href="https://t.me/coiper"
          >
            Telegram:
            <span className="font-bold text-orange-100"> t.me/Coiper</span>
          </a>
        </a>

        {/* LinkedIn */}

        <a href="https://www.linkedin.com/in/ananevilia/" className="flex-col">
          <img
            className="w-10 h-10 m-auto hover:opacity-10"
            src="linkedin.png"
          />
          <a
            rel="noreferrer"
            target="_blank"
            className="m-auto text-center text-orange-300 hover:underline hover:text-orange-600"
            href="https://www.linkedin.com/in/ananevilia/"
          >
            <span>LinkedIn:</span>
            <span className="font-bold text-orange-100"> Ananev Ilia</span>
          </a>
        </a>
      </div>
    </section>
  );
}
