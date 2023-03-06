import { motion } from "framer-motion";
import ImageSlider from "../../components/ImageSlider";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import styles from "./Home.module.css";

import segurandaDoTrabalho from "../../images/plano de fundo seguranca do trabalho.png";
import saudeDoTrabalho from "../../images/plano de fundo saude do trabalho.png";
import atestadoMedico from "../../images/plano de fundo atestados.jpg";
import medicina from "../../images/plano de fundo medicina.jpg";
import icone1 from "../../images/icones/imagem-link-1.png";
import icone2 from "../../images/icones/imagem-link-2.png";
import icone3 from "../../images/icones/imagem-link-3.png";
import banner1 from "../../images/banner carrossel 1.png";
import banner2 from "../../images/banner carrossel 2.png";

function Home() {
	const navigate = useNavigate();

	function navigateToTopServices() {
		window.scrollTo(0, 0);
		navigate("/servicos");
	}
	function navigateToTopSobre() {
		window.scrollTo(0, 0);
		navigate("/sobre");
	}

	return (
		<>
			<div className={styles.divPaiHome}>
				<div className={styles.divSliderHome}>
					<ImageSlider image1={banner1} image2={banner2} />
				</div>

				<hr></hr>

				<div
					className="div-central-paragrafo" /* className={styles.divCentralParagrafoHome} */
				>
					<h1>Sobre nós:</h1>

					<div
						className="div-paragrafo-inicial" /* className={styles.divParagrafoIntrodutorioHome} */
					>
						<p className="paragrafo">
							A <b>CESMT</b> foi fundada pelo <b>Dr. José Henrique Padre</b>{" "}
							<i>(in memorian)</i>, está há mais de <b>20 anos</b> atuando com{" "}
							<b>Excelência</b> na <b>Gestão de Saúde Ocupacional</b> e{" "}
							<b>Segurança do Trabalho</b>.
						</p>
						<p className="paragrafo">
							A CESMT também é <b>Multiclínica</b>, com diversas{" "}
							<b>Especialidades Médicas</b>.
						</p>
					</div>
					<div
						className="div-button-leiamais" /* className={styles.divButtonLeiaMaisHome} */
					>
						<button
							className="button-leiamais"
							/* className={styles.buttonLeiaMaisHome} */
							onClick={navigateToTopSobre}>
							Leia Mais
						</button>
					</div>
				</div>

				<hr></hr>

				<div
					className="div-central-banners" /* className={styles.divCentralBannersHome} */
					style={{ marginTop: "50px", marginBottom: "50px" }}>
					<div
						style={{
							marginBottom: "60px",
						}} /* className={styles.divTituloBannersHome} */
					>
						<h1 style={{ fontSize: "40px" }}>Nossos Serviços:</h1>
					</div>

					<div
						className="div-geral-banners" /* className={styles.divTodosBannersHome} */
					>
						<motion.div
							/* className={styles.divImparesBannersHome} */
							initial={{ x: 1000 }}
							animate={{ x: 0 }}
							className="div-banners-impar">
							<div
								className="div-paragrafo1" /* className={styles.divParagrafoBanner} */
							>
								<p className="paragrafo">
									<b>
										<u>Saúde</u> <u>do</u> <u>Trabalho</u>
									</b>
								</p>
							</div>
							<div
								className="div-banner1" /* className={styles.divBannerHome} */
							>
								<img
									/* className={styles.BannerImpar} */
									className="banner1"
									src={saudeDoTrabalho}
									alt="Banner"
								/>
							</div>
						</motion.div>

						<motion.div
							/* className={styles.divParesBannersHome} */
							initial={{ x: -1000 }}
							animate={{ x: 0 }}
							className="div-banners-par">
							<div
								className="div-paragrafo2" /* className={styles.divParagrafoBanner} */
							>
								<p className="paragrafo">
									<b>
										<u>Segurança</u> <u>do</u> <u>Trabalho</u>
									</b>
								</p>
							</div>
							<div
								className="div-banner2" /* className={styles.divBannerHome} */
							>
								<img
									/* className={styles.BannerPar} */
									className="banner2"
									src={segurandaDoTrabalho}
									alt="Banner"
								/>
							</div>
						</motion.div>

						<motion.div
							/* className={styles.divImparesBannersHome} */
							initial={{ x: 1000 }}
							animate={{ x: 0 }}
							className="div-banners-impar">
							<div
								className="div-paragrafo3" /* className={styles.divParagrafoBannerHome} */
							>
								<p className="paragrafo">
									<b>
										<u>Atestados</u> <u>Ocupacionais</u>
									</b>
								</p>
							</div>
							<div
								className="div-banner3" /* className={styles.divBannerHome} */
							>
								<img
									/* className={styles.BannerImpar} */
									className="banner3"
									src={atestadoMedico}
									alt="Banner"
								/>
							</div>
						</motion.div>

						<motion.div
							/* className={styles.divParesBannersHome} */
							initial={{ x: -1000 }}
							animate={{ x: 0 }}
							className="div-banners-par">
							<div
								className="div-paragrafo4" /* className={styles.divParagrafoBanner} */
							>
								<p className="paragrafo">
									<b>
										<u>Especialidades</u> <u>Médicas</u>
									</b>
								</p>
							</div>
							<div
								className="div-banner4" /* className={styles.divBannerHome} */
							>
								<img
									/* className={styles.BannerPar} */
									className="banner4"
									src={medicina}
									alt="Banner"
								/>
							</div>
						</motion.div>

						<div
							/* className={styles.divParagrafoFinalBannersHome} */
							style={{
								display: "flex",
								justifyContent: "center",
								marginTop: "-30px",
							}}>
							<p className="paragrafo" style={{ fontSize: "1.65rem" }}>
								e muito mais...
							</p>
						</div>
					</div>
					<div
						className="div-button-leiamais" /* className={styles.divButtonLeiaMaisHome} */
						style={{ display: "flex", justifyContent: "center" }}>
						<button
							/* className={styles.buttonLeiaMaisHome} */
							className="button-leiamais"
							onClick={navigateToTopServices}>
							Serviços
						</button>
					</div>
				</div>

				<hr></hr>

				<div
					className="div-central-links"
					/* className={styles.divCentralLinksHome} */
				>
					<div /* className={styles.divTituloLinksHome} */>
						<h1>Fique por dentro das notícias:</h1>
					</div>
					<div
						className="div-organiza-links"
						/* className={styles.divOrganizaLinksHome} */
					>
						<div className="div-organiza-links-1">
							<a
								href="http://www.sstonline.com.br/sao-publicadas-as-novas-redacoes-das-nrs-1-7-e-9-pgr-e-fim-do-ppra/"
								target={"_blank"}>
								<div
									className="div-link"
									/* className={styles.divLink} */
								>
									<div
										className="div-img-a1"
										/* className={styles.divImgLink} */
									>
										<img src={icone1} alt="Icone" />
									</div>
									<div className="div-tag">
										<a
											href="http://www.sstonline.com.br/sao-publicadas-as-novas-redacoes-das-nrs-1-7-e-9-pgr-e-fim-do-ppra/"
											target={"_blank"}>
											PGR e o fim do PPRA
										</a>
									</div>
								</div>
							</a>
							<a
								href="https://www.anamt.org.br/portal/category/noticias/saude-no-trabalho/"
								target={"_blank"}>
								<div
									className="div-link"
									/* className={styles.divLink} */
								>
									<div
										className="div-img-a2"
										/* className={styles.divImgLink} */
									>
										<img src={icone2} alt="Icone" />
									</div>
									<div className="div-tag">
										<a
											href="https://www.anamt.org.br/portal/category/noticias/saude-no-trabalho/"
											target={"_blank"}>
											Notícias ANAMT
										</a>
									</div>
								</div>
							</a>
						</div>
						<div className="div-organiza-links-2">
							<a href="http://www.sstonline.com.br/" target={"_blank"}>
								<div
									className="div-link"
									/* className={styles.divLink} */
								>
									<div
										className="div-img-a3"
										/* className={styles.divImgLink} */
									>
										<img src={icone3} alt="Icone" />
									</div>
									<div className="div-tag">
										<a href="http://www.sstonline.com.br/" target={"_blank"}>
											SST Online
										</a>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export { Home };
