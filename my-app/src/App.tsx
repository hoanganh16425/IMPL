import { Routes, Route, Outlet, Link } from "react-router-dom";
import ChangePassword from "./pages/auths/changePassword";
import Home from "./pages/home";
import './assets/styles/reset.scss'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChangePassword />}>
          <Route index path="change-password" element={<ChangePassword />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;
