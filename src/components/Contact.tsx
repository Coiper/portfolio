export default function Contact({ tabContactRef }) {
  return (
    <section
      ref={tabContactRef}
      id="contact"
      className="my-40 align-center mx-auto p-3"
    >
      <h2 className="text-5xl font-bold text-orange-500 text-center">
        Contact
      </h2>
      <div
        className="flex gap-5 justify-center 
                        my-10"
      >
        <a
          rel="noreferrer"
          target="_blank"
          className="text-center text-orange-300 hover:underline hover:text-orange-600"
          href="https://elliotcoiper@gmail.com"
        >
          Email:
          <span className="font-bold text-orange-100">
            {" "}
            elliotcoiper@gmail.com
          </span>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="text-center text-orange-300 hover:underline hover:text-orange-600"
          href="https://t.me/coiper"
        >
          Telegram:
          <span className="font-bold text-orange-100"> t.me/Coiper</span>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="text-center text-orange-300 hover:underline hover:text-orange-600"
          href="https://www.linkedin.com/in/ananevilia/"
        >
          LinkedIn:
          <span className="font-bold text-orange-100"> Ananev Ilia</span>
        </a>
      </div>
    </section>
  );
}
