import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src="/src/resources/eule.png" alt="eule"></img>
      </Link>
      <ul>
        <CustomLink to="/character/Character" className="site-character">
          Character
        </CustomLink>
        <CustomLink to="/src/account/Account" className="site-account">
          Account
        </CustomLink>
        <CustomLink to="/account/Logout" className="site-logout">
          Logout
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
