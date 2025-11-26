import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Shimmer from '../components/Shimmer';
import { blogs } from '../data/blogs';

const Blogs = () => {
  return (
    <div className="min-h-screen dotted-background relative overflow-hidden">
      <Header />
      
      {/* Animated Rectangular Square Net Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="blog-mesh"></div>
      </div>
      
      <div className="pt-24 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 ninja-text">
              My <span className="text-gradient">Blogs</span> ✍️
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
              Thoughts, tutorials, and insights about web development, cloud computing, and technology
            </p>
          </div>

          <div className="space-y-8">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.id}`}
                className="block scroll-card border-3d overflow-hidden transform transition-all duration-300 bg-navy-800/40 hover:bg-navy-800/60"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-0 leading-tight">
                      {blog.title}
                    </h2>
                    <span className="text-sm text-orange-400 font-medium">
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-base">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-navy-900/60 text-white border border-orange-500/40 text-sm font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex items-center text-dark-orange font-bold group">
                    Read more
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;

