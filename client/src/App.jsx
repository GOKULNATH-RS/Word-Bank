import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-primary h-screen w-screen flex justify-between items-center">
      <NavBar />

      <div className="flex-[0.7] h-full">
        <Dashboard />
      </div>
      <div className="flex-[0.3] h-full">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
