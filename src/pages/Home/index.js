import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import banner1 from "../../images/banner carrossel 1.png";
import banner2 from "../../images/banner carrossel 2.png";
import ImageSlider from "../../components/ImageSlider";
import "./styles.css";
import { useNavigate } from "react-router-dom";

import segurandaDoTrabalho from "../../images/plano de fundo seguranca do trabalho.png";
import saudeDoTrabalho from "../../images/plano de fundo saude do trabalho.png";
import atestadoMedico from "../../images/plano de fundo atestados.jpg";
import medicina from "../../images/plano de fundo medicina.jpg";
import icone1 from "../../images/icones/imagem-link-1.png";
import icone2 from "../../images/icones/imagem-link-2.png";
import icone3 from "../../images/icones/imagem-link-3.png";

function Home() {
    const navigate = useNavigate();


    return (
        <>
            <div className="slider">
                <ImageSlider image1={banner1} image2={banner2} width={950} height={300} />
            </div>
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
                    <button className="button-leiamais" onClick={() => { navigate("/sobre") }}>Leia Mais</button>
                </div>
            </div>

            <hr />

            <div className="div-central-paragrafo" style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ marginBottom: "60px" }}>
                        <h1 style={{ fontSize: "40px" }}>Nossos Serviços:</h1>
                    </div>

                    <div className="div-geral-banners">
                        <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} className="div-banners-impar">
                            <div className="div-paragrafo1">
                                <p className="paragrafo"><b style={{ fontSize: "30px" }}>Saúde do Trabalho</b></p>
                            </div>
                            <div className="div-banner1">
                                <img className="banner1" src={saudeDoTrabalho} alt="Banner" />
                            </div>
                        </motion.div>

                        <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} className="div-banners-par">
                            <div className="div-paragrafo2">
                                <p className="paragrafo"><b style={{ fontSize: "30px" }}>Segurança do Trabalho</b></p>
                            </div>
                            <div className="div-banner2">
                                <img className="banner2" src={segurandaDoTrabalho} alt="Banner" />
                            </div>
                        </motion.div>

                        <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} className="div-banners-impar">
                            <div className="div-paragrafo3">
                                <p className="paragrafo"><b style={{ fontSize: "30px" }}>Emissão de Atestados Ocupacionais</b></p>
                            </div>
                            <div className="div-banner3">
                                <img className="banner3" src={atestadoMedico} alt="Banner" />
                            </div>
                        </motion.div>

                        <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} className="div-banners-par">
                            <div className="div-paragrafo4">
                                <p className="paragrafo"><b style={{ fontSize: "30px" }}>Especialidades Médicas</b></p>
                            </div>
                            <div className="div-banner4">
                                <img className="banner4" src={medicina} alt="Banner" />
                            </div>
                        </motion.div>

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

            <div style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="div-central-links">
                    <div>
                        <h1>Fique por dentro das notícias:</h1>
                    </div>
                    <div className="div-organiza-links" >
                        <div className="div-organiza-links-1">
                            <a href="http://www.sstonline.com.br/sao-publicadas-as-novas-redacoes-das-nrs-1-7-e-9-pgr-e-fim-do-ppra/">
                                <div className="div-link">
                                    <div className="div-img-a1">
                                        <img src={icone1} alt="Icone" />
                                    </div>
                                    <div className="div-tag">
                                        <a href="http://www.sstonline.com.br/sao-publicadas-as-novas-redacoes-das-nrs-1-7-e-9-pgr-e-fim-do-ppra/">PGR e o fim do PPRA</a>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.anamt.org.br/portal/category/noticias/saude-no-trabalho/">
                                <div className="div-link">
                                    <div className="div-img-a2">
                                        <img src={icone2} alt="Icone" />
                                    </div>
                                    <div className="div-tag">
                                        <a href="https://www.anamt.org.br/portal/category/noticias/saude-no-trabalho/">Notícias ANAMT</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="div-organiza-links-2">
                            <a href="http://www.sstonline.com.br/">
                                <div className="div-link">
                                    <div className="div-img-a3">
                                        <img src={icone3} alt="Icone" />
                                    </div>
                                    <div className="div-tag">
                                        <a href="http://www.sstonline.com.br/">SST Online</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export { Home }