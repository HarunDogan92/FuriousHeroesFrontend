import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar(props) {
  const { loggedIn } = props
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      <label className="errorLabel">Furious Heroes</label>
      </Link>
      {loggedIn === true &&
      <ul>
        <CustomLink to="/src/account/Account" className="site-account">
          Account
        </CustomLink>
      </ul>}
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
