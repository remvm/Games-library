import { Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import { useAuth } from "../../hooks/useAuth";
import { ToastContainer } from "react-toastify";

export default function Layout() {
  const { isAuth, logout } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (isAuth) {
      if (location.pathname === "/login/" || location.pathname === "/register/") {
        navigate("");
      }
    } else {
      if (location.pathname === "/user/" || location.pathname === "/favorites/") {
        navigate("");
      }
    }
    
  }, [isAuth, location.pathname, navigate]);

  return (
    <div>
      <Header isAuth={isAuth} logout={logout} />
        <div>
          <div>
            <Suspense fallback={<div>Загрузка</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      <ToastContainer />
    </div>
  );
}
