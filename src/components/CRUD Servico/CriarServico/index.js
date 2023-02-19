import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CriarServico.css";

function CriarServico() {

    const [form, setForm] = useState({
        nome: "",
        sigla: "",
        description: "",
        tipo: ""
    });

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: [event.target.value] });
    }

    return (
        <>
            <h1>CriarServicos</h1>
            <div className="div-master-servico">
                <div>
                    <label htmlFor="input-nome">Nome:
                        <input
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
                            id="select-tipo"
                            value={form.tipo}
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
            </div>
        </>
    );
};

export { CriarServico };