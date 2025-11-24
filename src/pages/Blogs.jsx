import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { blogs } from '../data/blogs';

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 ninja-text">
              My <span className="text-gradient">Blogs</span> ✍️
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-semibold">
              Thoughts, tutorials, and insights about web development, cloud computing, and technology
            </p>
          </div>

          <div className="space-y-6">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.id}`}
                className="block scroll-card glass p-6 md:p-8 transform transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-0">
                    {blog.title}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-ninja-orange/20 text-ninja-orange border border-ninja-orange text-sm font-bold uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 flex items-center text-ninja-orange font-bold">
                  Read more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

