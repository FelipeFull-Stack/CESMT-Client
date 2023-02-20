import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import "./ExibirArtigo.css";

function ExibirArtigo() {

    const [artigo, setArtigo] = useState([]);

    useEffect(() => {
        async function fetchArtigo() {
            try {
                const response = await api.get("/artigo");
                setArtigo(response.data);
            } catch (err) {
                console.log(`Erro do Front-end em ExibirServico: ${err}`);
            }
        }
        fetchArtigo();
    }, []);

    return (
        <>
            <h1>Artigos</h1>
            <div className="div-geral-artigo">
                <div>
                    {artigo.map((currentElement) => {
                        return (
                            <>
                                <div>
                                    <h2>{currentElement.nome}</h2>
                                    <p>{currentElement.description}</p>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export { ExibirArtigo };