import headerStyle from "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
      </nav>
      <h1> Here is a list of the most visited places around the world</h1>
    </>
  );
}

export default Header;
