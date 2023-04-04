import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <span>Header Component</span>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
  );
}
