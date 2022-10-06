import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './component/Home/Home';
import About from './component/About/About';
import Books from './component/Books/Books';
import BookDetails from './component/BookDetails/BookDetails';

function App() {

  const router = createBrowserRouter([
    {
        
      path: '/',
      element: <Main></Main>,
      children: [
        {path:'/',element:<Home></Home>},
        {
          path: 'home', element: <Home></Home>
          
        },
        {
          path: 'about', element:<About></About> 
          
        },
        {
          path: 'books',
          loader: async () =>{
            return fetch('https://api.itbook.store/1.0/new');
          },
          element: <Books></Books> 
          
        },

        {
          path: 'book/:id',
          element: <BookDetails></BookDetails>,
          loader: ({ params }) =>
            fetch(`https://api.itbook.store/1.0/books/${params.id}`),
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
