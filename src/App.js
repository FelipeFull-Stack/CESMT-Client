import { Route, Routes } from "react-router-dom";
import { SelectContextComponent } from "./context/SelectContext";
import { AuthContextComponent } from "./context/authContext";
import { Home } from "./pages/Home/index";
import { Menubar } from "./pages/Menubar/index";
import { Footer } from "./pages/Footer/index";
import { CESMT } from "./pages/CESMT/index";
import { Contato } from "./pages/Contato/index";
import { Artigo } from "./pages/Artigo/index";
import { Servico } from "./pages/Servico/index";
import { Cliente } from "./pages/Cliente/index";
import { SignUp } from "./components/USER/SignUp/index";
import { LogIn } from "./components/USER/LogIn/index";
import { CreatePage } from "./pages/CreatePage/index";
import "./App.css";

function App() {
  return (
    <>
      <SelectContextComponent>
        <AuthContextComponent>
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
              <Route path="/sobre" element={<CESMT />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/artigos" element={<Artigo />} />
              <Route path="/servicos" element={<Servico />} />
              <Route path="/clientes" element={<Cliente />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/conectAPIforINV" element={<CreatePage />} />
              <Route path="/entrar" element={<LogIn />} />
            </Routes>
            <Footer />
          </div>
        </AuthContextComponent>
      </SelectContextComponent>
    </>
  );
}

export default App;
