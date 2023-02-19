import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import "./ExibirServico.css";

function ExibirServico() {

    const [servico, setServico] = useState([]);

    useEffect(() => {
        async function fetchServico() {
            try {
                const response = await api.get("/servico");
                setServico(response.data);
            } catch (err) {
                console.log(`Erro do Front-end em ExibirServico: ${err}`);
            }
        }
        fetchServico();
    }, [])

    return (
        <>
            <div>
                <h1>Nossos Serviços</h1>
                <div className="div-saudeSegurancaDoTrabalho.map">
                    <div>
                        <h1>Saúde e Segurança do Trabalho</h1>
                    </div>
                    {servico.map((currentElement) => {
                        if (currentElement.tipo === "SAUDE E SEGURANCA DO TRABALHO") {
                            return (
                                <>
                                    <div>
                                        <h2>{currentElement.sigla}</h2>
                                        <h3>{currentElement.nome}</h3>
                                        <p>{currentElement.description}</p>
                                    </div>
                                </>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="div-higieneOcupacional.map">
                    <div>
                        <h1>Higiene Ocupacional</h1>
                    </div>
                    {servico.map((currentElement) => {
                        if (currentElement.tipo === "HIGIENE OCUPACIONAL") {
                            return (
                                <>
                                    <div>
                                        <h2>{currentElement.sigla}</h2>
                                        <h3>{currentElement.nome}</h3>
                                        <p>{currentElement.description}</p>
                                    </div>
                                </>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="div-treinamentos.map">
                    <div>
                        <h1>Treinamentos</h1>
                    </div>
                    {servico.map((currentElement) => {
                        if (currentElement.tipo === "TREINAMENTOS") {
                            return (
                                <>
                                    <div>
                                        <h2>{currentElement.sigla}</h2>
                                        <h3>{currentElement.nome}</h3>
                                        <p>{currentElement.description}</p>
                                    </div>
                                </>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="div-servicos.map">
                    <div>
                        <h1>Serviços</h1>
                    </div>
                    {servico.map((currentElement) => {
                        if (currentElement.tipo === "SERVICOS") {
                            return (
                                <>
                                    <div>
                                        <h2>{currentElement.sigla}</h2>
                                        <h3>{currentElement.nome}</h3>
                                        <p>{currentElement.description}</p>
                                    </div>
                                </>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="div-especialidadesMedicas.map">
                    <div>
                        <h1>Especialidades Médicas</h1>
                    </div>
                    {servico.map((currentElement) => {
                        if (currentElement.tipo === "ESPECIALIDADES MEDICAS") {
                            return (
                                <>
                                    <div>
                                        <h2>{currentElement.sigla}</h2>
                                        <h3>{currentElement.nome}</h3>
                                        <p>{currentElement.description}</p>
                                    </div>
                                </>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </>
    );
};

export { ExibirServico };