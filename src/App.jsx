import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes/web";
import { NavbarProvider } from "./context/NavbarProvider";
import ScrollToTop from "./pages/Components/ScrollOnTop";



function App() {


  return (
    <NavbarProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </NavbarProvider>
  );
}

export default App;
