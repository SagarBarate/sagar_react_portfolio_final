import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-orange-500/30 bg-navy-900/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform"
          >
            Sagar
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-4">
              <Link
                to="/"
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all rounded-lg ${
                  isActive('/') 
                    ? 'bg-dark-orange text-white border border-orange-500/50' 
                    : 'hover:bg-navy-800/60 text-white border border-transparent hover:border-orange-500/40'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all rounded-lg ${
                  isActive('/about') 
                    ? 'bg-dark-orange text-white border border-orange-500/50' 
                    : 'hover:bg-navy-800/60 text-white border border-transparent hover:border-orange-500/40'
                }`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all rounded-lg ${
                  isActive('/projects') 
                    ? 'bg-dark-orange text-white border border-orange-500/50' 
                    : 'hover:bg-navy-800/60 text-white border border-transparent hover:border-orange-500/40'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/case-studies"
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all rounded-lg ${
                  isActive('/case-studies') 
                    ? 'bg-dark-orange text-white border border-orange-500/50' 
                    : 'hover:bg-navy-800/60 text-white border border-transparent hover:border-orange-500/40'
                }`}
              >
                Cases
              </Link>
              <Link
                to="/blogs"
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all rounded-lg ${
                  isActive('/blogs') 
                    ? 'bg-dark-orange text-white border border-orange-500/50' 
                    : 'hover:bg-navy-800/60 text-white border border-transparent hover:border-orange-500/40'
                }`}
              >
                Blogs
              </Link>
              <Link
                to="/skills"
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all rounded-lg ${
                  isActive('/skills') 
                    ? 'bg-dark-orange text-white border border-orange-500/50' 
                    : 'hover:bg-navy-800/60 text-white border border-transparent hover:border-orange-500/40'
                }`}
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

