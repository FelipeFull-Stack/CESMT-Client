import linkedin from "../../images/icones/linkedIn colorido.png";
import facebook from "../../images/icones/facebook Colorido.png";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
    const navigate = useNavigate();
    return (
        <>
            <div
                
                style={{
                    margin: "0",
                    marginBottom: "20px",
                    height: "20px",
                    width: "100%",
                    background: "linear-gradient(to right, rgb(255, 45, 49), rgb(175, 45, 49))"
                }}>
            </div>

            <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
                    <h1 style={{ fontSize: "20px", fontWeight: "700" }}>Siga-nos em nossas Redes Sociais</h1>
                </div>
                <div style={{ display: "flex", flexDirection: "row", gap: 5, justifyContent: "space-evenly", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
                        <div>
                            <img style={{ width: "50px" }} src={linkedin} alt="Icone" />
                        </div>
                        <div>
                            <p style={{ fontSize: "24px", fontWeight: "700" }}>Este é nosso linkedin</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
                        <div>
                            <img style={{ width: "50px" }} src={facebook} alt="Icone" />
                        </div>
                        <div>
                            <p style={{ fontSize: "24px", fontWeight: "700" }}>Este é nosso facebook</p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                    height: "50px",
                    width: "100%",
                    background: "rgb(65, 62, 62)"
                }}
            >
                <p
                    style={{
                        fontSize: "16px",
                        color: "white"
                    }}
                >© 2023 CESMT EXCELÊNCIA EM SAÚDE <button style={{ backgroundColor: "rgb(65,62,62)", border: "none" }} onClick={() => navigate("/entrar")}>•</button> Built with Luiz Felipe Soares Lopes - Web Developer</p>
            </div>
            <div
                style={{
                    margin: 0,
                    height: "5%",
                    width: "100%",
                    background: "rgb(120, 2, 2)"
                }}
            >
            </div>
            {/* <button onClick={() => navigate("/cadastro")}></button> */}
            {/* <button onClick={() => navigate("/entrar")}></button> */}
            {/* <button onClick={() => navigate("")}></button> */}
        </>
    );
};

export { Footer };

//© 2023 CESMT EXCELÊNCIA EM SAÚDE •

/* <div
                style={{ //div que abriga as outras divs
                    border: "solid red 2px",
                    height: "200px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    padding: "20px"
                }}
            >
                <div
                    style={{ //div que abriga os emails
                        height: "80px",
                        width: "350px",
                        display: "flex",
                        margin: "10px",
                        flexDirection: "column",
                        justifyContent: "baseline",
                        alignItems: "baseline",
                    }}
                >
                    <div
                        style={{ //div da item 1
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            marginBottom: "-40px"
                        }}
                    >
                        <img style={{ width: "30px" }} src={email} alt="Email Icon" />
                        <p style={{ fontSize: "24px", fontWeight: "700" }}>nilza@cesmt.com.br</p>
                    </div>
                    <div
                        style={{ //div da item 2
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5
                        }}
                    >
                        <img style={{ width: "30px" }} src={email} alt="Email Icon" />
                        <p style={{ fontSize: "24px", fontWeight: "700", }}>cesmt@cesmt.com.br</p>
                    </div>
                </div>

                 <div> background: "linear-gradient(to right, rgb(255, 45, 49), rgb(175, 45, 49))" 
                    <img style={{ width: "25px" }} src={instagram} alt="Instagram Icon" />
                    <p></p>
                </div> 

                <div
                    style={{ //div que abriga whatsapp
                        height: "80px",
                        width: "350px",
                        display: "flex",
                        margin: "10px",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5
                        }}
                    >
                        <img style={{ width: "25px" }} src={whatsapp} alt="WhatsApp Icon" />
                        <p style={{ fontSize: "24px", fontWeight: "700", }}>(73) 9 1234-5678</p>
                    </div>
                </div>

                <div
                    style={{ //div que abriga os telefones
                        height: "80px",
                        width: "350px",
                        display: "flex",
                        margin: "10px",
                        flexDirection: "column",
                        justifyContent: "baseline",
                        alignItems: "baseline",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            marginBottom: "-40px"
                        }}
                    >
                        <img style={{ width: "28px" }} src={phone} alt="Phone Icon" />
                        <p style={{ fontSize: "24px", fontWeight: "700", }}>(73) 3526-1414</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5
                        }}
                    >
                        <img style={{ width: "28px" }} src={phone} alt="Phone Icon" />
                        <p style={{ fontSize: "24px", fontWeight: "700", }}>(73) 3526-0718</p>
                    </div>
                </div>

                <div
                    style={{ //div que abriga localidade
                        height: "80px",
                        width: "470px",
                        display: "flex",
                        margin: "10px",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5
                        }}
                    >
                        <img style={{ width: "20px" }} src={location} alt="Location Icon" />
                        <p style={{ fontSize: "24px", fontWeight: "700", }}>Rua Dr. José Alfredo Guimarães, Nº 26 Bairro São Luís, Jequié-BA - CEP: 45.203-330</p>
                    </div>
                </div>
            </div> */