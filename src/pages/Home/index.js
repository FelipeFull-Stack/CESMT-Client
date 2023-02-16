import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import banner1 from "../../images/banner carrossel 1.png";
import banner2 from "../../images/banner carrossel 2.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";

import segurandaDoTrabalho from "../../images/plano de fundo seguranca do trabalho.png";
import saudeDoTrabalho from "../../images/plano de fundo saude do trabalho.png";
import atestadoMedico from "../../images/plano de fundo atestados.jpg";
import medicina from "../../images/plano de fundo medicina.jpg";

const images = [banner1, banner2];

function Home() {
    const navigate = useNavigate();
    const carrossel = useRef();
    const [largura, setLargura] = useState(0);

    useEffect(() => {
        console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth);
        setLargura(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth - 90);
    }, []);

    return (
        <>
            <motion.div ref={carrossel} className="carrossel" whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -largura }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                >
                    {images.map((currentElement) => {
                        return (
                            <motion.div key={currentElement} className="item">
                                <img src={currentElement} alt="Banners" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            <hr />

            <div className="div-central-paragrafo">
                <div className="div-paragrafo">
                    <h1>Sobre nós:</h1>
                </div>
                <div className="div-paragrafo">
                    <p className="paragrafo">A <b>CESMT</b> foi fundada pelo <b>Dr. José Henrique Padre</b> <i>(in memorian)</i>,<br /> está há mais de <b>20 anos</b> atuando com <b>Excelência</b> na <b>Gestão de Saúde Ocupacional</b> e <b>Segurança do Trabalho</b>.</p>
                    <p className="paragrafo">A CESMT também é <b>Multiclínica</b>, com diversas <b>Especialidades Médicas</b>.</p>
                </div>

                <div className="div-button-leiamais">
                    <button className="button-leiamais" onClick={() => {navigate("/sobre")}}>Leia Mais</button>
                </div>
            </div>

            <hr />

            <div className="div-central-paragrafo" style={{ marginTop: "50px" }}>
                <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        <h1 style={{ fontSize: "40px" }}>Nossos Serviços:</h1>
                    </div>

                    <div className="div-geral-banners">
                        <div className="div-banners-impar">
                            <div className="div-paragrafo1">
                                <p className="paragrafo"><b style={{ fontSize: "30px" }}>Saúde do Trabalho</b></p>
                            </div>
                            <div className="div-banner1">
                                <img className="banner1" src={saudeDoTrabalho} alt="Banner" />
                            </div>
                        </div>

                        <div className="div-banners-par">
                            <div className="div-paragrafo2">
                                <p className="paragrafo"><b style={{ fontSize: "30px" }}>Segurança do Trabalho</b></p>
                            </div>
                            <div className="div-banner2">
                                <img className="banner2" src={segurandaDoTrabalho} alt="Banner" />
                            </div>
                        </div>

                        <div className="div-banners-impar">
                            <div className="div-paragrafo3">
                                <p className="paragrafo"><b style={{ fontSize: "30px" }}>Emissão de Atestados Ocupacionais</b></p>
                            </div>
                            <div className="div-banner3">
                                <img className="banner3" src={atestadoMedico} alt="Banner" />
                            </div>
                        </div>

                        <div className="div-banners-par">
                            <div className="div-paragrafo4">
                                <p className="paragrafo"><b style={{ fontSize: "30px" }}>Especialidades Médicas</b></p>
                            </div>
                            <div className="div-banner4">
                                <img className="banner4" src={medicina} alt="Banner" />
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", marginTop: "-30px", }}>
                            <p className="paragrafo" style={{ fontSize: "32px" }}>e muito mais...</p>
                        </div>
                    </div>
                    <div className="div-button-leiamais" style={{ display: "flex", justifyContent: "center" }}>
                        <button className="button-leiamais" onClick={() => { navigate("/servicos") }}>Serviços</button>

                    </div>
                </div>
            </div>

            <hr />

            <div style={{ marginTop: "50px" }}>
                <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        <h1>Fique por dentro das notícias:</h1>
                    </div>
                    <div>
                        <a class="elementor-icon elementor-animation-" href="https://www.anamt.org.br/portal/category/noticias/saude-no-trabalho/">
                            <i aria-hidden="true" class="fas fa-notes-medical"></i>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export { Home }