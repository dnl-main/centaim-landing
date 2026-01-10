import "./navbar.css";
import SearchBar from "./(components)/SearchBar";
import BackButton from "./(components)/BackButton";

const Navbar = () => {
  return (
    <nav className="navbarBlog">
      <div className="nav-links">
        <BackButton />
      </div>
      
      <div className="nav-search">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;