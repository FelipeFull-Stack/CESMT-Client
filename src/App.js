import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MenuBar } from "./pages/Menubar";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
