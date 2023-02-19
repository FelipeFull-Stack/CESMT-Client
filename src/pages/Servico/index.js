import { CriarServico } from "../../components/CRUD Servico/CriarServico";
import { ExibirServico } from "../../components/CRUD Servico/ExibirServico";

function Servico() {
    return (
        <>
            <CriarServico />
            <ExibirServico />
        </>
    )
}

export { Servico };