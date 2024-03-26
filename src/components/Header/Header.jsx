import logo from "../../assets/img/nba-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />

      <h1>NBA Legends</h1>
    </div>
  );
};

export default Header;
