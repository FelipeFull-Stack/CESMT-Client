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
import missaoAlvo from "../../images/missao-alvo.png";
import etica from "../../images/Valores/etica.png";
import transparencia from "../../images/Valores/transparencia.png";
import competencia from "../../images/Valores/competencia.png";
import qualidade from "../../images/Valores/qualidade.png";
import respeito from "../../images/Valores/respeito.png";
import tecnologia from "../../images/Valores/tecnologia.png";

// import "./CESMT.css";
import styles from "./CESMT.module.css";
function CESMT() {
	return (
		<>
			<div className={styles.divPaiCESMT}>
				<div className={styles.divSliderCESMT}>
					<ImageSlider2 image1={imagem1} image2={imagem2} />
				</div>

				<div className={styles.divParagrafoIntrodutorioCESMT}>
					<p>
						Presente no mercado desde <b>2000</b>, fundada pelo{" "}
						<b>Dr. José Henrique Garcia Padre</b> <i>(in memorian)</i>, a{" "}
						<b>CESMT - Clínica Especializada em Serviços Médicos Ltda</b>, atualmente dirigida pelo Dr. Kerson
						Alencar Sousa, CREMEB 15.859, é uma empresa <b>Especializada</b> na
						Prestação de Serviços de Assessoria em <b>Saúde</b>, <b>Medicina</b>{" "}
						e <b>Segurança do Trabalho</b>. Temos orgulho de colaborar na
						melhoria das condições de trabalho das empresas brasileiras e seus
						colaboradores.
					</p>
				</div>

				<div className={styles.divCentralObjetivoCESMT}>
					<div className={styles.divConjuntaTituloObjetivoCESMT}>
						<div className={styles.divImagemObjetivoCESMT}>
							<img src={objetivo} alt="Icone" />
						</div>
						<div className={styles.divTituloObjetivoCESMT}>
							<h1>
								Nossos
								<br /> Objetivos
								<br />
								<b>?</b>
							</h1>
						</div>
					</div>

					<div className={styles.divCentralItensObjetivoCESMT}>
						<div className={styles.divItensObjetivoCESMT}>
							<div className={styles.divImageItensObjetivoCESMT}>
								<img src={eSocial} alt="Icone" />
							</div>
							<div className={styles.divParagrafoItensObjetivoCESMT}>
								<p>Atender as exigências do e-Social</p>
							</div>
							<div className={styles.divMedalhaItensObjetivoCESMT}>
								<img src={medalha} alt="Icone" />
							</div>
						</div>

						<div className={styles.divItensObjetivoCESMT}>
							<div className={styles.divImageItensObjetivoCESMT}>
								<img src={localSeguro} alt="Icone" />
							</div>
							<div className={styles.divParagrafoItensObjetivoCESMT}>
								<p>Manter o local de trabalho seguro e sadio</p>
							</div>
							<div className={styles.divMedalhaItensObjetivoCESMT}>
								<img src={medalha} alt="Icone" />
							</div>
						</div>

						<div className={styles.divItensObjetivoCESMT}>
							<div className={styles.divImageItensObjetivoCESMT}>
								<img src={localSaude} alt="Icone" />
							</div>
							<div className={styles.divParagrafoItensObjetivoCESMT}>
								<p>
									Conduzir o trabalhador a condições ótimas de saúde física e
									mental
								</p>
							</div>
							<div className={styles.divMedalhaItensObjetivoCESMT}>
								<img src={medalha} alt="Icone" />
							</div>
						</div>
						<div className={styles.divItensObjetivoCESMT}>
							<div className={styles.divImageItensObjetivoCESMT}>
								<img src={adequarNR} alt="Icone" />
							</div>
							<div className={styles.divParagrafoItensObjetivoCESMT}>
								<p>
									Adequar as empresas às Normas Regulamentadoras através de
									ações essencialmente preventivas
								</p>
							</div>
							<div className={styles.divMedalhaItensObjetivoCESMT}>
								<img src={medalha} alt="Icone" />
							</div>
						</div>

						<div className={styles.divItensObjetivoCESMT}>
							<div className={styles.divImageItensObjetivoCESMT}>
								<img src={todasDemandas} alt="Icone" />
							</div>
							<div className={styles.divParagrafoItensObjetivoCESMT}>
								<p>
									Todas as demandas de Saúde e Segurança do Trabalhador,
									Ergonomia e Higiene Ocupacional
								</p>
							</div>
							<div className={styles.divMedalhaItensObjetivoCESMT}>
								<img src={medalha} alt="Icone" />
							</div>
						</div>
						<div className={styles.divItensObjetivoCESMT}>
							<div className={styles.divImageItensObjetivoCESMT}>
								<img src={assistenciaTecnica} alt="Icone" />
							</div>
							<div className={styles.divParagrafoItensObjetivoCESMT}>
								<p>Assistência Técnica Pericial</p>
							</div>
							<div className={styles.divMedalhaItensObjetivoCESMT}>
								<img src={medalha} alt="Icone" />
							</div>
						</div>

						<div className={styles.divItensObjetivoCESMT}>
							<div className={styles.divImageItensObjetivoCESMT}>
								<img src={elaboracaoLaudo} alt="Icone" />
							</div>
							<div className={styles.divParagrafoItensObjetivoCESMT}>
								<p>
									Elaboração de Laudos Técnicos para caracterização ou não da
									concessão do adicional de Insalubridade / Periculosidade, com
									avaliação Qualitativa e Quantitativa
								</p>
							</div>
							<div className={styles.divMedalhaItensObjetivoCESMT}>
								<img src={medalha} alt="Icone" />
							</div>
						</div>
					</div>
				</div>

				<div className={styles.divCentralMissaoCESMT}>
					<div className={styles.divImagemMissaoCESMT}>
						<img src={missaoAlvo} alt="Icone" />
						<h1>Missão</h1>
					</div>
					<div className={styles.divTextosMissaoCESMT}>
						<div className={styles.divParagrafoMissaoCESMT}>
							<p>
								<b>1º) Assessorar</b> nossos clientes visando{" "}
								<b>prevenir doenças ocupacionais</b> de seus colaboradores,
								permitindo assim melhoria nas suas qualidades de vida e
								consequentemente nos seus trabalhos.
							</p>
						</div>
						<div className={styles.divParagrafoMissaoCESMT}>
							<p>
								<b>2º) Evitar</b> que nossos clientes sofram sanções legais no
								que se refere aos <b>EXAMES OCUPACIONAIS</b> obrigatórios,
								proporcionando-lhes satisfação e tranquilidade por nossos
								Serviços.
							</p>
						</div>
					</div>
				</div>

				<div className={styles.divCentralValoresCESMT}>
					<div className={styles.divTituloValoresCESMT}>
						<h1>Nossos Valores</h1>
					</div>
					<div className={styles.divGeralValoresCESMT}>
						<div className={styles.divIndividualValoresCESMT}>
							<img src={etica} alt="Icone" />
							<p>Ética</p>
						</div>
						<div className={styles.divIndividualValoresCESMT}>
							<img src={transparencia} alt="Icone" />
							<p>Transparência</p>
						</div>
						<div className={styles.divIndividualValoresCESMT}>
							<img src={qualidade} alt="Icone" />
							<p>Qualidade</p>
						</div>
						<div className={styles.divIndividualValoresCESMT}>
							<img src={competencia} alt="Icone" />
							<p>Competência</p>
						</div>
						<div className={styles.divIndividualValoresCESMT}>
							<img src={tecnologia} alt="Icone" />
							<p>Tecnologia</p>
						</div>
						<div className={styles.divIndividualValoresCESMT}>
							<img src={respeito} alt="Icone" />
							<p>Respeito</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export { CESMT };
