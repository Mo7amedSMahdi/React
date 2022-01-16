import reactLogo from "../images/react_logo.png"

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img
          className="nav-logo"
          src={reactLogo}
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
