import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import MenuLeft from "../menuLeft/MenuLeft";

function Layout() {
  return (
    <div className="main-layout" style={{ display: "flex" }}>
      <MenuLeft></MenuLeft>
      <div className="main-content">
        <Header></Header>
        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
