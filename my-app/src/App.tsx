import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import ChangePassword from "./pages/auths/changePassword";
import Home from "./pages/dasboard";
import Login from "./pages/auths/login";
import MenuLeft from "./components/menuLeft/MenuLeft";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />} >
          <Route index path="dashboard" element={<Home />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
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

function Root() {
  return (
    <>
      <div className="main-layout" style={{display: "flex"}}>
        <MenuLeft></MenuLeft>
        <div style={{marginLeft : "292px", backgroundColor: "#F5F5F5", width: "100%", height: "200vh" , overflowY: "scroll"}}>
          <Outlet />
        </div>
      </div>
    </>
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
