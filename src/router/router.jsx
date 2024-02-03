import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("../pages/Layout/Layout"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const Card = lazy(() => import("../pages/Card/Card"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));
const Login = lazy(() => import("../pages/LoginPage/LoginPage"));
const User = lazy(() => import("../pages/User/User"));
const Register = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const SearchPage = lazy(() => import("../pages/SearchPage/SearchPage"));

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={""} element={<Layout />}>
          <Route
            path={""}
            element={ <MainPage /> }
          />
          <Route
            path={"card/:id"}
            element={ <Card /> }
          />
          <Route
            path={"login"}
            element={ <Login /> }
          />
          <Route
            path={"register"}
            element={ <Register /> }
          />
          <Route
            path={"user"}
            element={ <User /> }
          />
          <Route
            path={"favorites"}
            element={ <Favorites /> }
          />
          <Route
            path={"search"}
            element={ <SearchPage /> }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
