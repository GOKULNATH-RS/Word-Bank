import WordForm from "./components/WordForm";
import WordCard from "./components/WordCard";
import { useEffect, useState } from "react";

function App() {
  const [update, setUpdate] = useState(false);
  const [words, setWords] = useState([]);
  const [Edit, setEdit] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/words`)
      .then((res) => res.json())
      .then((data) => {
        setWords(data);
      });
  }, [update]);

  return (
    <div className=" pb-10   overflow-hidden">
      <div className="flex justify-around">
        <div className="flex-[0.4] flex justify-center">
          <WordForm
            ButtonTxt={"Add Word"}
            setUpdate={setUpdate}
            editItem={Edit}
          />
        </div>
        <div className="flex-[0.6]">
          <h1 className="text-3xl font-bold p-4 m-3">Recently Added</h1>
          <div className="h-[60vh] overflow-y-scroll  flex flex-wrap">
            {words.map((word) => {
              return (
                <WordCard
                  key={word._id}
                  id={word._id}
                  word={word.word}
                  meaning={word.meaning}
                  example={word.example}
                  setUpdate={setUpdate}
                  setEdit={setEdit}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
