import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";
import "./CriarServico.css";

function CriarServico() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nome: "",
        sigla: "",
        description: "",
        tipo: ""
    });

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await api.post("/servico", form);
            navigate("/home");
        } catch (err) {
            console.log(`Erro do Front-end em CriarServico/handleSubmit: ${err}`);
        }
    }

    return (
        <>
            <h1>CriarServicos</h1>
            <form onSubmit={handleSubmit}>
                <div className="div-master-servico">
                    <div>
                        <label htmlFor="input-nome">Nome:
                            <input
                                name="nome"
                                type="text"
                                id="input-nome"
                                value={form.nome}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="input-sigla">Sigla:
                            <input
                                name="sigla"
                                type="text"
                                id="input-sigla"
                                value={form.sigla}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="input-description">Descrição:
                            <input
                                name="description"
                                type="text"
                                id="input-description"
                                value={form.description}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="select-tipo">Tipo:
                            <select
                                name="tipo"
                                id="select-tipo"
                                value={form.tipo}
                                onChange={handleChange}
                            >
                                <option>... Escolha uma Opção ...</option>
                                <option value="SAUDE E SEGURANCA DO TRABALHO">Saúde e Segurança do Trabalho</option>
                                <option value="HIGIENE OCUPACIONAL">Higiene Ocupacional</option>
                                <option value="TREINAMENTOS">Treinamentos</option>
                                <option value="SERVICOS">Serviços</option>
                                <option value="ESPECIALIDADES MEDICAS">Especialidades Médicas</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export { CriarServico };