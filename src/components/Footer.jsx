import { Link } from 'react-router-dom';
import SagarBarateCV from '../assets/SagarBarateCV.pdf';

const Footer = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = SagarBarateCV;
    link.download = 'SagarBarateCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="border-t-2 border-white/30 py-8 px-4 bg-navy-900">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © All rights reserved — Sagar Barate
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/60">
            <Link to="/about" className="footer-link">
              About
            </Link>
            <span className="text-white/40">·</span>
            <Link to="/skills" className="footer-link">
              Skills
            </Link>
            <span className="text-white/40">·</span>
            <Link to="/projects" className="footer-link">
              Projects
            </Link>
            <span className="text-white/40">·</span>
            <a href="#contact" className="footer-link">
              Contact
            </a>
            <span className="text-white/40">·</span>
            <Link to="/blogs" className="footer-link">
              Blogs
            </Link>
            <span className="text-white/40">·</span>
            <button
              onClick={handleDownloadCV}
              className="footer-link"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

