import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api.js";
import CESMTlogo from "../../../images/Logo CESMT.png";

function SignUp() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await api.post("/user/cadastro", form);
            navigate("/entrar");
        } catch (err) {
            console.log(`Erro do Front-end em SingUp: ${err}`);
        }
    };

    return (
        <>
            <form style={{ 
                margin: "50px", 
                padding: "40px", 
                border: "20px solid transparent", 
                background: "linear-gradient(white, white) padding-box, linear-gradient(to right, rgb(255, 45, 49), rgb(175, 45, 49)) border-box",
                borderRadius: "25px"
                }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
                        <img style={{ width: "400px" }} src={CESMTlogo} alt="Logo" />
                    </div>
                    <div style={{
                        width: "40%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "10px",
                        gap: "6px"
                    }}>
                        <label>E-mail:</label>
                        <input
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                width: "60%",
                                height: "24px"
                            }}
                        />
                    </div>
                    <div style={{
                        width: "40%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "10px",
                        gap: "6px",
                        marginBottom: "30px"
                    }}>
                        <label>Senha:</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            style={{ display: "flex", justifyContent: "center", width: "60%", height: "24px" }}
                        />
                    </div>

                    <button
                        style={{
                            width: "125px",
                            height: "40px",
                            fontSize: "20px",
                            fontWeight: "700",
                            marginBottom: "50px",
                            borderRadius: "25px",
                            border: "solid rgb(255, 45, 49) 2px",
                        }}
                        onClick={handleSubmit} >Cadastrar</button>
                </div>

            </form>
        </>
    );
};

export { SignUp };