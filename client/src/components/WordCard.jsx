import deleteIcon from "../assets/icons/white_delete.svg";
import editIcon from "../assets/icons/white_edit.svg";

/* eslint-disable react/prop-types */
const WordCard = ({ id, word, meaning, example, setUpdate, setEdit }) => {
  const handleDelete = (e) => {
    console.log("Delete");
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/api/delete-word/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdate((prev) => !prev);
      });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit({ id, word, meaning, example });
  };
  return (
    <div className="relative max-h-72 w-96 p-4 px-6 m-3 rounded-xl shadow-2xl bg-secondary  overflow-scroll overflow-x-hidden no-scrollbar">
      <div className="absolute top-0 right-0 flex gap-2 m-2 ">
        <img src={deleteIcon} alt="delete" onClick={handleDelete} />
        <img src={editIcon} alt="delete" onClick={(e) => handleEdit(e)} />
      </div>

      <p className="text-center font-bold text-3xl">{word}</p>
      <p className="font-semibold text-lg ">Meaning</p>
      <p className="py-3 text-md tracking-wide ">{meaning}</p>
      <p className="font-semibold text-md ">Example</p>
      <ul className="ml-8 list-disc ">
        <li>{example}</li>
      </ul>
    </div>
  );
};

export default WordCard;
