import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api.js";
import style from "./style.module.css";
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
            <h1>SignUp</h1>
            <form>
                <div>
                    <div>
                        <img src={CESMTlogo} alt="Logo" />
                    </div>
                    <div>
                        <label>E-mail:</label>
                        <input
                            type="email"
                            value={form.email}
                        />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input
                            type="password"
                            value={form.password}
                        />
                    </div>

                    <button onClick={handleSubmit} />
                </div>

            </form>
        </>
    );
};

export { SignUp };