import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import LoginRegister from "./pages/auth/LoginRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginRegister />} />
            {/* <Route
              path="sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            /> */}
            {/* <Route path="reset" element={<ResetPassword />} /> */}
          </Route>
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
