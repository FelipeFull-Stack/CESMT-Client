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
            <div className="div-geral-servico">
                <h1 className="h1-servico">Nossos Serviços</h1>
                <div className="div-servico-map">
                    <div className="div-titulo-servico">
                        <h1 className="titulo-servico"><b>Saúde e Segurança do Trabalho</b></h1>
                    </div>
                    {servico.map((currentElement) => {
                        if (currentElement.tipo === "SAUDE E SEGURANCA DO TRABALHO") {
                            return (
                                <>
                                    <div className="div-servico">
                                        <div className="div-sigla-nome">
                                            <h2 className="h2-servico">{currentElement.sigla}</h2>
                                            <p className="hifem">-</p>
                                            <h3 className="h3-servico">{currentElement.nome}</h3>
                                        </div>
                                        {/* <p>{currentElement.description}</p> */}
                                    </div>
                                </>
                            );
                        }
                        return null;
                    })}
                </div>

                <hr />

                <div className="div-servico-map">
                    <div className="div-titulo-servico">
                        <h1 className="titulo-servico"><b>Higiene Ocupacional</b></h1>
                    </div>
                    {servico.map((currentElement) => {
                        if (currentElement.tipo === "HIGIENE OCUPACIONAL") {
                            return (
                                <>
                                    <div className="div-servico">
                                        <div className="div-sigla-nome">
                                            <h2 className="h2-servico">{currentElement.sigla}</h2>
                                            <p className="hifem">-</p>
                                            <h3 className="h3-servico">{currentElement.nome}</h3>
                                        </div>
                                        {/* <p>{currentElement.description}</p> */}
                                    </div>
                                </>
                            );
                        }
                        return null;
                    })}
                </div>

                <hr />

                <div className="div-servico-map">
                    <div className="div-titulo-servico">
                        <h1 className="titulo-servico"><b>Treinamentos</b></h1>
                    </div>
                    {servico.map((currentElement) => {
                        if (currentElement.tipo === "TREINAMENTOS") {
                            return (
                                <>
                                    <div className="div-servico">
                                        <div className="div-sigla-nome">
                                            <h2 className="h2-servico">{currentElement.sigla}</h2>
                                            <p className="hifem">-</p>
                                            <h3 className="h3-servico">{currentElement.nome}</h3>
                                        </div>
                                        {/* <p>{currentElement.description}</p> */}
                                    </div>
                                </>
                            );
                        }
                        return null;
                    })}
                </div>

                <hr />

                <div className="div-servico-map">
                    <div className="div-titulo-servico">
                        <h1 className="titulo-servico"><b>Serviços</b></h1>
                    </div>
                    {servico.map((currentElement) => {
                        if (currentElement.tipo === "SERVICOS") {
                            return (
                                <>
                                    <div className="div-servico">
                                        <div className="div-sigla-nome">
                                            <h2 className="h2-servico">{currentElement.sigla}</h2>
                                            {/* <p className="hifem">-</p> */}
                                            <h3 className="h3-servico h3-extra">{currentElement.nome}</h3>
                                        </div>
                                        {/* <p>{currentElement.description}</p> */}
                                    </div>
                                </>
                            );
                        }
                        return null;
                    })}
                </div>

                <hr />

                <div className="div-servico-map">
                    <div className="div-titulo-servico">
                        <h1 className="titulo-servico"><b>Especialidades Médicas</b></h1>
                    </div>
                    {servico.map((currentElement) => {
                        if (currentElement.tipo === "ESPECIALIDADES MEDICAS") {
                            return (
                                <>
                                    <div className="div-servico">
                                        <div className="div-sigla-nome">
                                            <h2 className="h2-servico">{currentElement.sigla}</h2>
                                            {/* <p className="hifem">-</p> */}
                                            <h3 className="h3-servico h3-extra">{currentElement.nome}</h3>
                                        </div>
                                        {/* <p>{currentElement.description}</p> */}
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