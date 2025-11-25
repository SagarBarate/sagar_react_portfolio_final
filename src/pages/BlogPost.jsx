import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogs } from '../data/blogs';

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen dotted-background">
        <Header />
        <div className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4 ninja-text text-white">Blog Post Not Found</h1>
            <Link
              to="/blogs"
              className="text-dark-orange hover:underline font-bold"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} className="text-4xl font-bold mt-8 mb-4 text-white">
            {line.substring(2)}
          </h1>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-bold mt-6 mb-3 text-white">
            {line.substring(3)}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl font-semibold mt-4 mb-2 text-white">
            {line.substring(4)}
          </h3>
        );
      }
      if (line.startsWith('```')) {
        return null; // Skip code block markers for now
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="ml-6 mb-2 text-gray-300">
            {line.substring(2)}
          </li>
        );
      }
      return (
        <p key={index} className="mb-4 text-gray-300 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen dotted-background">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/blogs"
            className="inline-flex items-center text-dark-orange hover:underline mb-8 font-bold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>

          <article className="glass scroll-card border-3d p-8 md:p-12 bg-navy-800/40">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {blog.author}
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-navy-900/60 text-white border border-orange-500/40 text-sm font-bold uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <div className="text-gray-300 leading-relaxed">
                  {renderContent(blog.content)}
                </div>
              </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;

