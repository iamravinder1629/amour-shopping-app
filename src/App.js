import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import FormComponent from './pages/FormComponent'
import Layout from './layout/Layout';
import LandingPage from './pages/LandingPage'
import Products from './pages/Products'
import Shoes from './pages/Shoes'
import Dresses from './pages/Dresses';
import PageNotFound from './pages/PageNotFound';
function App() {

  const router = createBrowserRouter([
    {
      index: true,
      element: <FormComponent />
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <LandingPage />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "dresses",
          element: <Dresses />
        },
        {
          path: "shoes",
          element: <Shoes />
        },
        {
          path: "*",
          element: <PageNotFound />
        }
      ]


    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
