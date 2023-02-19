import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";
import "./CriarArtigo.css";

function CriarArtigo() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nome: "",
        description: ""
    });

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await api.post("/artigo", form);
            navigate("/home");
        } catch (err) {
            console.log(`Erro do Front-end em CriarArtigo/handleSubmit: ${err}`);
        }
    }

    return (
        <>
            <h1>CriarArtigo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="input-nome">Nome do Artigo:
                            <input
                                id="input-nome"
                                type="text"
                                name="nome"
                                value={form.nome}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="input-description">Descrição:
                            <input
                                id="input-description"
                                type="text"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                            />
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

export { CriarArtigo };