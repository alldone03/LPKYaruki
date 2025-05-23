import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes/web";
import { NavbarProvider } from "./context/NavbarProvider";


function App() {


  return (
    <NavbarProvider>

      <BrowserRouter>
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
