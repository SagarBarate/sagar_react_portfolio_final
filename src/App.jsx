import { RouterProvider } from 'react-router-dom';
import router from './router';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Chatbot />
    </>
  );
}

export default App;

