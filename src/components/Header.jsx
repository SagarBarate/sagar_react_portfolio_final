import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b-4 border-ninja-orange">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform ninja-text"
          >
            Sagar
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-4">
              <Link
                to="/"
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all ${
                  isActive('/') 
                    ? 'bg-ninja-orange text-white border-2 border-ninja-black' 
                    : 'hover:bg-ninja-orange/20 text-gray-700 border-2 border-transparent hover:border-ninja-orange'
                }`}
                style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all ${
                  isActive('/about') 
                    ? 'bg-ninja-orange text-white border-2 border-ninja-black' 
                    : 'hover:bg-ninja-orange/20 text-gray-700 border-2 border-transparent hover:border-ninja-orange'
                }`}
                style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all ${
                  isActive('/projects') 
                    ? 'bg-ninja-orange text-white border-2 border-ninja-black' 
                    : 'hover:bg-ninja-orange/20 text-gray-700 border-2 border-transparent hover:border-ninja-orange'
                }`}
                style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }}
              >
                Projects
              </Link>
              <Link
                to="/case-studies"
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all ${
                  isActive('/case-studies') 
                    ? 'bg-ninja-orange text-white border-2 border-ninja-black' 
                    : 'hover:bg-ninja-orange/20 text-gray-700 border-2 border-transparent hover:border-ninja-orange'
                }`}
                style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }}
              >
                Cases
              </Link>
              <Link
                to="/blogs"
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all ${
                  isActive('/blogs') 
                    ? 'bg-ninja-orange text-white border-2 border-ninja-black' 
                    : 'hover:bg-ninja-orange/20 text-gray-700 border-2 border-transparent hover:border-ninja-orange'
                }`}
                style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }}
              >
                Blogs
              </Link>
              <Link
                to="/skills"
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all ${
                  isActive('/skills') 
                    ? 'bg-ninja-orange text-white border-2 border-ninja-black' 
                    : 'hover:bg-ninja-orange/20 text-gray-700 border-2 border-transparent hover:border-ninja-orange'
                }`}
                style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }}
              >
                Skills
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

