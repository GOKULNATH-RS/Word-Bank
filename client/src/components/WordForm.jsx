/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

import { useEffect, useState } from "react";

const WordForm = ({ setUpdate, editItem }) => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [example, setExample] = useState("");

  const inputFields = [
    {
      inputType: "text",
      label: "Word",
      id: "word",
      placeholder: "Enter the Word",
      value: word,
      setFunction: setWord,
    },
    {
      inputType: "text",
      label: "Meaning",
      id: "meaning",
      placeholder: "Meaning...",
      value: meaning,
      setFunction: setMeaning,
    },
    {
      inputType: "text",
      id: "example",
      label: "Example",
      placeholder: "Example",
      value: example,
      setFunction: setExample,
    },
  ];

  useEffect(() => {
    setWord(editItem?.word || "");
    setMeaning(editItem?.meaning || "");
    setExample(editItem?.example || "");
  }, [editItem]);

  const handleAddWordBtn = (e) => {
    e.preventDefault();
    console.log(word, meaning, example);
    fetch(`${import.meta.env.VITE_API_URL}/api/add-word`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        word: word,
        meaning: meaning,
        example: example,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWord("");
        setMeaning("");
        setExample("");
        setUpdate((prev) => !prev);
      });
  };

  const handleEditWordBtn = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/api/update-word/${editItem?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        word: word,
        meaning: meaning,
        example: example,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWord("");
        setMeaning("");
        setExample("");
        setUpdate((prev) => !prev);
      });
  };

  return (
    <div className="h-max w-96 bg-secondary m-8 p-8 rounded-2xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        {!editItem ? "Add a " : "Edit "} Word
      </h1>
      <form className="flex flex-col gap-8">
        {inputFields.map((inputField) => {
          return (
            <div key={inputField.id}>
              <label
                htmlFor={inputField.placeholder}
                className="text-white font-medium text-xl my-4 p-4"
              >
                {inputField.label}
              </label>
              <input
                type={inputField.inputType}
                id={inputField.id}
                className="bg-glass p-4 px-8 rounded-xl w-full h-12"
                placeholder={inputField.placeholder}
                value={inputField.value}
                onChange={(e) => {
                  inputField.setFunction(e.target.value);
                }}
              />
            </div>
          );
        })}

        <div>
          <button
            onClick={(e) => {
              editItem ? handleEditWordBtn(e) : handleAddWordBtn(e);
            }}
            type="submit"
            className="h-12 w-40 rounded-xl bg-quaternary text-dark"
          >
            {editItem ? "Edit Word" : "Add Word"}
          </button>
        </div>
      </form>
    </div>
  );
};

WordForm.propTypes = {
  ButtonTxt: PropTypes.string,
};

export default WordForm;
