import { CriarArtigo } from "../../components/CRUD Artigo/CriarArtigo";
import { CriarCliente } from "../../components/CRUD Cliente/CriarCliente";
import { CriarServico } from "../../components/CRUD Servico/CriarServico";
import { SignUp } from "../../components/USER/SignUp";
import "./CreatePage.css";

function CreatePage() {

    return (
        <>
            <div className="div-geral-createpage">
                <div className="div-create">
                    <h1>Cadastrar Artigo</h1>
                    <CriarArtigo />
                </div>
                <hr />
                <div className="div-create">
                    <h1>Cadastrar Cliente</h1>
                    <CriarCliente />
                </div>
                <hr />
                <div className="div-create">
                    <h1>Cadastrar Serviço</h1>
                    <CriarServico />
                </div>
                <hr />
                {/* <div className="div-create">
                    <h1>cadastro</h1>
                    <SignUp />
                </div> */}
            </div>
        </>
    );
};

export { CreatePage };