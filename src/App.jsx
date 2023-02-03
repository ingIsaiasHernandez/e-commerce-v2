import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import AppFooter from "./components/AppFooter";
import AppNavbar from "./components/AppNavbar";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import ProductsDetail from "./components/pages/ProductsDetail";
import Purchases from "./components/pages/Purchases";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <AppNavbar />

      {isLoading && <LoadingScreen></LoadingScreen>}
      <Container className="my-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductsDetail />}></Route>
          <Route path="/login" element={<Login />}></Route>

          {/* Routa protegida */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />}></Route>
          </Route>
        </Routes>
      </Container>
      <AppFooter></AppFooter>
    </HashRouter>
  );
}

export default App;
