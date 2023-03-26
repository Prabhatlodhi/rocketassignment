import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./components/Header/NavItems/Contact";
import AboutUs from "./components/Header/NavItems/AboutUs";
import Cart from "./components/Header/NavItems/Cart";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "./components/Body/ErrorPage/ErrorPage";
import IndividualProducts from "./components/Body/IndividualProducts/IndividualProducts";
import { Provider } from "react-redux";
import store from "./redux/store"

function App() {
  return (
    <>
    <Provider store={store}  >
      <div className="App">
        <Header />
        {/* <RouterProvider router={appRouter} /> */}
        {/* <Outlet /> */}

        <Outlet />

        <Footer />
      </div>
      </Provider>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/individualproducts/:id",
        element: <IndividualProducts />,
      },
    ],
  },
]);

export default App;
