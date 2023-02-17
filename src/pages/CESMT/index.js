import { ImageSlider2 } from "../../components/ImageSlider2";

import imagem1 from "../../images/frente da cesmt jequie.png";
import imagem2 from "../../images/frente cesmt vitoria da conquista.png";
import objetivo from "../../images/Objetivos/bonequinho-duvida.png";
import medalha from "../../images/Objetivos/Medalha.png";
import eSocial from "../../images/Objetivos/E-social.png";
import localSeguro from "../../images/Objetivos/local-seguro.png";
import localSaude from "../../images/Objetivos/local-saude.png";
import adequarNR from "../../images/Objetivos/adequar-NR.png";
import todasDemandas from "../../images/Objetivos/todas-demandas.png";
import assistenciaTecnica from "../../images/Objetivos/assistencia-tecnica.png";
import elaboracaoLaudo from "../../images/Objetivos/elaboracao-laudos.png";

import "./style.css";
function CESMT() {

    return (
        <>
            <div className="div-central">
                <div className="slider">
                    <ImageSlider2 image1={imagem1} image2={imagem2} width={950} height={300} />
                </div>

                <div className="div-paragrafo bela-borda">
                    <p className="paragrafo">Presente no mercado desde <b>2000</b>,  fundada pelo <b>Dr. José Henrique Padre</b> <i>(in memorian)</i>,
                        a <b>CESMT - Clínica Especializada em Segurança</b> e <b>Medicina do Trabalho</b>, atualmente dirigida pelo Dr. Kerson Alencar Sousa,
                        CREMEB 15.859, é uma empresa <b>especializada</b> na prestação de serviços de assessoria em <b>saúde</b>, <b>medicina</b> e <b>segurança do trabalho</b>.
                        Temos orgulho de colaborar na melhoria das condições de trabalho das empresas brasileiras e seus colaboradores.</p>
                </div>

                <hr />

                <div className="div-central-objetivo">
                    <div className="div-titulo-objetivo">
                        <div>
                            <h1>Nossos<br /> Objetivos<br /><b className="negrito-extra">?</b></h1>
                        </div>
                        <div>
                            <img style={{ borderRadius: "15px" }} src={objetivo} alt="Icone" />
                        </div>
                    </div>
                    <div className="div-dupla-objetivos">
                        <div className="div-itens-objetivo">
                            <div>
                                <img className="imagens" src={eSocial} alt="Icone" />
                            </div>
                            <div>
                                <p>Atender as exigências do e-Social</p>
                            </div>
                            <div>
                                <img className="imagens2" src={medalha} alt="Icone" />
                            </div>
                        </div>

                        <div className="div-itens-objetivo">
                            <div>
                                <img className="imagens" src={localSeguro} alt="Icone" />
                            </div>
                            <div>
                                <p>Manter o local de trabalho seguro e sadio</p>
                            </div>
                            <div>
                                <img className="imagens2" src={medalha} alt="Icone" />
                            </div>
                        </div>
                    </div>

                    <div className="div-dupla-objetivos">
                        <div className="div-itens-objetivo">
                            <div>
                                <img className="imagens" src={localSaude} alt="Icone" />
                            </div>
                            <div>
                                <p>Conduzir o trabalhador a condições ótimas de saúde física e mental</p>
                            </div>
                            <div>
                                <img className="imagens2" src={medalha} alt="Icone" />
                            </div>
                        </div>
                        <div className="div-itens-objetivo">
                            <div>
                                <img className="imagens" src={adequarNR} alt="Icone" />
                            </div>
                            <div>
                                <p>Adequar as empresas às Normas Regulamentadoras através de ações essencialmente preventivas</p>
                            </div>
                            <div>
                                <img className="imagens2" src={medalha} alt="Icone" />
                            </div>
                        </div>
                    </div>

                    <div className="div-dupla-objetivos">
                        <div className="div-itens-objetivo">
                            <div>
                                <img className="imagens" src={todasDemandas} alt="Icone" />
                            </div>
                            <div>
                                <p>Todas as demandas de Saúde e Segurança do Trabalhador, Ergonomia e Higiene Ocupacional</p>
                            </div>
                            <div>
                                <img className="imagens2" src={medalha} alt="Icone" />
                            </div>
                        </div>
                        <div className="div-itens-objetivo">
                            <div>
                                <img className="imagens" src={assistenciaTecnica} alt="Icone" />
                            </div>
                            <div>
                                <p>Assistência Técnica Pericial</p>
                            </div>
                            <div>
                                <img className="imagens2" src={medalha} alt="Icone" />
                            </div>
                        </div>
                    </div>

                    <div className="div-itens-objetivo">
                        <div>
                            <img className="imagens" src={elaboracaoLaudo} alt="Icone" />
                        </div>
                        <div>
                            <p>Elaboração de Laudos Técnicos para caracterização ou não da concessão do adicional de Insalubridade / Periculosidade, com avaliação Qualitativa e Quantitativa</p>
                        </div>
                        <div>
                            <img className="imagens2" src={medalha} alt="Icone" />
                        </div>
                    </div>

                </div>
                
                <hr />

                <div>
                    d
                </div>

            </div>
        </>
    );
};

export { CESMT };