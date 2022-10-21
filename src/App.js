import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';
import Posts from './Components/Posts/Posts';
import Products from './Components/Products/Products';
import StudentDetails from './Components/StudentDetails/StudentDetails';
import Success from './Components/Success/Success';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/', 
    element: <Main></Main>, 
    children:[
      {path: '/', element: <Home></Home>},
      {path: '/home', element: <Home></Home>},
      {path: '/contact', element: <Contact></Contact>},
      {path: 'success',
       loader: async ()=>{
        return fetch('https://jsonplaceholder.typicode.com/users')
       },
       element: <Success></Success>
      },
      {path: '/products', element: <Products></Products>},
      {
        path: '/student/:studentId',
        loader: async ({params}) =>{
          // console.log(params);
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.studentId}`)
        },
        element: <StudentDetails></StudentDetails>
      },
      {
        path: '/posts',
        loader: async()=>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element: <Posts></Posts>
      },
      {
        path: '/post/:PostId',
        loader: async ({params}) =>{
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`)
        },
        element: <PostDetails></PostDetails>
      }
    ]},
    {path: '*', element: <div>404 not found!</div>}
  ])

  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
