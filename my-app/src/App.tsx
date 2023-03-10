import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import ChangePassword from "./pages/auths/changePassword";
import Home from "./pages/dasboard";
import Login from "./pages/auths/login";
import Layout from "./components/layout/Layout";
import UserList from "./pages/users/users-list/UserList";
import RequireAuth from "./components/guard/RequireAuth";
import UserCreate from "./pages/users/user-create/UserCreate";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<RequireAuth />}>
            <Route path="dashboard" element={<Home />} />
            <Route path="users">
              <Route path="list" element={<UserList/>}/>
              <Route path="create" element={<UserCreate/>}/>
            </Route>
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Route>
        </Route>
        <Route path="auth" element={<Auth />}>
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="login" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

function Auth() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
