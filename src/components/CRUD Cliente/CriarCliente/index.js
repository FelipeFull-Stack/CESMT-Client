import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";

function CriarCliente() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        slogan: ""
    });
    
    const [picture, setPicture] = useState("");

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function handlePicture(event) {
        setPicture(event.target.files[0]);
    }

    async function handleUpload() {
        try {
            const dataForUpload = new FormData();
            dataForUpload.append("picture", picture);
            const response = await api.post("/upload", dataForUpload);
            return response.data.url;
        } catch (err) {
            console.log(`Erro do Front-end em CriarCliente/handleUpload: ${err}`);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const pictureURL = await handleUpload();
            await api.post("/cliente", { ...form, picture: pictureURL });
            window.alert("Cliente Adicionado");
            // navigate("/home");
        } catch (err) {
            console.log(`Erro do Front-end em CriarCliente/handleSubmit: ${err}`);
        }
    }



    return (
        <>
            <h1>CriarCliente</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="input-picture">
                        Foto
                        <input id="input-picture" type="file" onChange={handlePicture} />
                    </label>
                    <label htmlFor="input-slogan">
                        <input
                            name="slogan"
                            id="input-slogan"
                            value={form.slogan}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </>
    );
}

export { CriarCliente };
