import { useState, useEffect } from "react";
import refreshIcon from "../assets/icons/refresh_white.svg";

const Quiz = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [array, setArray] = useState([]);
  const [randomWord, setRandomWord] = useState({});
  const [refresh, setRefresh] = useState(false);

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/words`)
      .then((res) => res.json())
      .then((data) => {
        setArray(data);
        setRandomWord(data[Math.floor(Math.random() * data.length)]);
        console.log(array);
      });
  }, []);

  const handleSubmitBtn = () => {
    if (selectedValue === randomWord._id) {
      alert("Correct");
    } else {
      alert("Incorrect");
    }
    // setRandomWord(array[Math.floor(Math.random() * array.length)]);
  };

  const handleRefreshBtn = () => {
    setRefresh(!refresh);
    setRandomWord(array[Math.floor(Math.random() * array.length)]);
  };
  const options = array.filter((word) => word._id !== randomWord._id);

  return (
    <div className="flex items-center flex-col">
      <div className="font-bold text-center m-4 my-8 text-3xl">
        Find the Word for the given meaning
      </div>
      <div className="relative w-[500px] bg-secondary p-4 m-4 text-3xl rounded-xl">
        <button
          onClick={handleRefreshBtn}
          className="h-4 w-4 absolute top-4 right-4"
        >
          <img src={refreshIcon} alt="refresh" />
        </button>
        <p className="text-center py-8"> {randomWord.meaning}</p>
        <div>
          <div className="flex items-center gap-2 flex-col w-full  ">
            {options.slice(0, 3).map((option) => {
              return (
                <div
                  key={option._id}
                  className="bg-primary w-full flex justify-between px-4 h-16 items-center rounded-xl shadow-inner"
                >
                  <input
                    type="radio"
                    id={option._id}
                    value={option._id}
                    checked={selectedValue === option._id}
                    onChange={() => handleRadioChange(option._id)}
                    className="h-6 w-6 "
                  />
                  <label htmlFor={option.word} className="text-2xl">
                    {option.word}
                  </label>
                </div>
              );
            })}
            <div
              key={randomWord._id}
              className="bg-primary w-full flex justify-between px-4 h-20 items-center rounded-xl shadow-inner"
            >
              <input
                type="radio"
                id={randomWord._id}
                value={randomWord._id}
                checked={selectedValue === randomWord._id}
                onChange={() => handleRadioChange(randomWord._id)}
                className="h-6 w-6 "
              />
              <label htmlFor={randomWord.word} className="text-2xl">
                {randomWord.word}
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmitBtn}
          className="h-10 px-4 py-2 bg-primary flex-center rounded-xl mt-6"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
