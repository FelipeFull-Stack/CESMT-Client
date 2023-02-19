import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import "./ExibirCliente.css";

function ExibirCliente() {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        async function fetchClientes() {
            try {
                const response = await api.get("/cliente");
                setClientes(response.data);
            } catch (err) {
                console.log(`Erro do Front-end em ExibirClientes: ${err}`);
            }
        }
        fetchClientes();
    }, []);

    return (
        <>
            <div className="div-master-clientes bela-borda">
                <h1>Nossos Clientes</h1>
                <div className="div-map-clientes">
                    {clientes.map((currentElement) => {
                        return (
                            <>
                                <div className="div-block-cliente">
                                    <img className="cliente-logo" src={`${currentElement.picture}`} alt="Logo" />
                                    {/* <p className="cliente-slogan"><i>{currentElement.slogan}</i></p> */}
                                </div>

                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export { ExibirCliente };