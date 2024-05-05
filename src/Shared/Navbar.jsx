import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../Provider/Provider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthProvider);
  const links = (
    <>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/addjob">Add Job</Link>
      </li>
      <li>
        <Link to="/mypost">My Post</Link>
      </li>
      <li>
        <Link to="/mybid">My Bids</Link>
      </li>
      <li>
        <Link to="/bidrequest">Bids Request</Link>
      </li>
    </>
  );
  const handleLogout = () => {
    logOut();
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <img
                title={user?.displayName}
                className="w-12 h-12 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
