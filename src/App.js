import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Menubar } from "./pages/Menubar/index";
import { Footer } from "./pages/Footer/index";

function App() {
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
