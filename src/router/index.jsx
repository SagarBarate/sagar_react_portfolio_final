import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/Landing';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Blogs from '../pages/Blogs';
import BlogPost from '../pages/BlogPost';
import Skills from '../pages/Skills';
import CaseStudies from '../pages/CaseStudies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/blogs',
    element: <Blogs />,
  },
  {
    path: '/blogs/:id',
    element: <BlogPost />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/case-studies',
    element: <CaseStudies />,
  }
]);

export default router;

