/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function NavbarLink({
  title,
  path,
  footer = false,
  isScrolling,
}) {
  return (
    <>
      <li>
       
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? `${
                    footer
                      ? "text-primary"
                      : "block p-2 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 "
                  }`
                : `${
                    footer || isScrolling
                      ? "hover:text-primary transition duration-150 "
                      : "hover:text-primary transition duration-150 p-2 md:p-0 md:text-white text-black"
                  }`
            }
            aria-current="page"
          >
            {title}
          </NavLink>
        
      </li>
    </>
  );
}

export default NavbarLink;
