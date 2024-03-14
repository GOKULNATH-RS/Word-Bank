/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div className="m-8">
      <div className="flex flex-col gap-10">
        <h1 className="text-center font-semibold text-3xl">Contact Us</h1>
        <p>
          Have a question, suggestion, or just want to say hello? We'd love to
          hear from you!
        </p>
        <p>You can reach out to us through the following channels:</p>
        <ul className="list-none flex flex-col gap-2">
          <li>Email: info@wordbank.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Word Street, City, Country, ZIP</li>
        </ul>
        <p>
          Alternatively, you can fill out the form below and we'll get back to
          you as soon as possible:
        </p>
      </div>
    </div>
  );
};

export default Contact;
