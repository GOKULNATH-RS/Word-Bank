import logo from "../assets/icons/logo-white.svg";
import { navlinks } from "../utils/constants";
const NavBar = () => {
  return (
    <nav className="h-full w-20 bg-secondary rounded-tr-[20px] rounded-br-[20px] flex flex-col justify-between py-4 items-center">
      <div>
        <div className="logo">
          <img src={logo} alt="logo" className="h-12 w-12" />
        </div>
      </div>
      <div>
        <ul>
          {navlinks.map((link) => {
            return (
              <li key={link.id} className="h-10 w-10">
                <a href={link.href}>
                  <img src={link.icon} alt={link.name} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>Profile</div>
    </nav>
  );
};

export default NavBar;
