const WordForm = ({ ButtonTxt }) => {
  const inputFields = [
    {
      inputType: "text",
      id: "word",
      placeholder: "Enter the Word",
    },
    {
      inputType: "text",
      id: "meaning",
      placeholder: "Meaning...",
    },
    {
      inputType: "text",
      id: "example",
      placeholder: "Example",
    },
  ];

  return (
    <div className="bg-secondary text-dark m-4 p-8 rounded-2xl">
      <form className="flex flex-col gap-8">
        {inputFields.map((inputField) => {
          return (
            <div key={inputField.id}>
              <input
                type={inputField.inputType}
                id={inputField.id}
                className="bg-glass  p-4 px-8 rounded-xl w-full h-12 text-dark"
                placeholder={inputField.placeholder}
              />
            </div>
          );
        })}

        <div>
          <button
            type="submit"
            className="h-12 w-40 rounded-xl bg-quaternary text-dark"
          >
            {ButtonTxt}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WordForm;
