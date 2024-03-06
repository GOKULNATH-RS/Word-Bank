import WordForm from "./WordForm";

const Dashboard = () => {
  return (
    <div className="p-6 h-full">
      <h1 className="text-3xl text-white p-4 m-3 font-bold">Dashboard</h1>
      <div className="w-full h-40 p-4 flex flex-col justify-center">
        <button className="h-full w-full bg-glass hover:bg-glasshover backdrop-blur-lg rounded-xl border-[1px] text-2xl ">
          Add a Word
        </button>
      </div>
      <WordForm ButtonTxt={"Add Word"} />
    </div>
  );
};

export default Dashboard;
