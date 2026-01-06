import { Link } from 'react-router-dom';
import './Header.css'; // Chúng ta sẽ tạo file CSS này sau

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Moodmap</Link>
      </div>
      
      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <div className="auth-buttons">
        <Link to="/login" className="btn-login">Log in</Link>
        <Link to="/signup" className="btn-signup">Sign up</Link>
      </div>
    </header>
  );
}

export default Header;