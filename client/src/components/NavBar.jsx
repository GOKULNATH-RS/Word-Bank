import logo from "../assets/icons/word-white.svg";
import { navlinks } from "../utils/constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-20 w-full bg-secondary flex justify-between px-4 items-center">
      <div className="flex gap-2 flex-center">
        <img src={logo} alt="logo" className="h-10 w-10" />
        <p className="font-bold text-2xl">Word Bank</p>
      </div>

      <div>
        <ul className="flex gap-4 items-center">
          {navlinks.map((link) => {
            return (
              <li
                key={link.id}
                className="text-xl font-medium hover:border-b-2 border-white"
              >
                <Link to={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div> </div>
    </nav>
  );
};

export default NavBar;
