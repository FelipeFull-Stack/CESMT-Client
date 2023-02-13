import { Route, Routes } from "react-router-dom";
import { SelectContextComponent } from "./context/SelectContext";
import { Home } from "./pages/Home/index";
import { Menubar } from "./pages/Menubar/index";
import { Footer } from "./pages/Footer/index";
import { Contato } from "./pages/Contato/index";
import { Artigo } from "./pages/Artigo/index";
import { Servico } from "./pages/Servico/index";
import { Cliente } from "./pages/Cliente/index";
import { SignUp } from "./components/USER/SignUp/index";
import { LogIn } from "./components/USER/LogIn/index";

function App() {
  return (
    <>
      <SelectContextComponent>
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
            <Route path="/home" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/artigos" element={<Artigo />} />
            <Route path="/servico" element={<Servico />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/entrar" element={<LogIn />} />
          </Routes>
          <Footer />
        </div>
      </SelectContextComponent>
    </>
  );
}

export default App;
