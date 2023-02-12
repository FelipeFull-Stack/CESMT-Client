import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Menubar } from "./pages/Menubar/index";
import { Footer } from "./pages/Footer/index";

function App() {
  return (
    <>
      <div
        style={{
          margin: 0,
          padding: 0,
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
