import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import ImageSlider from "../../components/ImageSlider";
import { useNavigate } from "react-router-dom";
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
	const [showPopup, setShowPopup] = useState(true);
	
	function navigateToTopServices() {
		window.scrollTo(0, 0);
		navigate("/servicos");
	}
	function navigateToTopSobre() {
		window.scrollTo(0, 0);
		navigate("/sobre");
	}

	useEffect(() => {
		const popupDiv = document.getElementById('popup');
		if (popupDiv) {
			popupDiv.style.display = 'block';
		}
	
		//setTimeout(() => {
		//	if (popupDiv) {
		//		popupDiv.style.display = 'none';
		//	}
		//}, 5000); // 5000 milissegundos = 5 segundos
	}, []);
	
	function closePopup() {
		const popupDiv = document.getElementById('popup');
		if (popupDiv) {
			popupDiv.style.display = 'none';
		}
	}

	function closePopup() {
		setShowPopup(false);
	}

	return (
		<>
			<div className={styles.divPaiHome}>
				<div className={styles.divSliderHome}>
					<ImageSlider image1={banner1} image2={banner2} />
				</div>

				<hr></hr>

				<div className={styles.divCentralParagrafoHome}>
					<h1>Sobre nós:</h1>

					<div className={styles.divParagrafoIntrodutorioHome}>
						<p>
							A <b>CESMT</b> foi fundada pelo <b>Dr. José Henrique Padre</b>{" "}
							<i>(in memorian)</i>, está há mais de <b>20 anos</b> atuando com{" "}
							<b>Excelência</b> na <b>Gestão de Saúde Ocupacional</b> e{" "}
							<b>Segurança do Trabalho</b>.
						</p>
						<p>
							A filial da CESMT em Jequié também é <b>Multiclínica</b>, com diversas{" "}
							<b>Especialidades Médicas</b>.
						</p>
					</div>
					<div className={styles.divButtonLeiaMaisHome}>
						<button
							className={styles.buttonLeiaMaisHome}
							onClick={navigateToTopSobre}>
							Leia Mais
						</button>
					</div>
				</div>

				<hr></hr>

				<div className={styles.divCentralBannersHome}>
					<div className={styles.divTituloBannersHome}>
						<h1>Nossos Serviços:</h1>
					</div>

					<div className={styles.divTodosBannersHome}>
						<motion.div
							className={styles.divImparesBannersHome}
							initial={{ x: 1000 }}
							animate={{ x: 0 }}>
							<div className={styles.divParagrafoBannerHome}>
								<p>
									<b>
										<u>Saúde</u> <u>do</u> <u>Trabalho</u>
									</b>
								</p>
							</div>
							<div className={styles.divBannerHome}>
								<img
									className={styles.BannerImpar}
									src={saudeDoTrabalho}
									alt="Banner"
								/>
							</div>
						</motion.div>

						<motion.div
							className={styles.divParesBannersHome}
							initial={{ x: -1000 }}
							animate={{ x: 0 }}>
							<div className={styles.divParagrafoBannerHome}>
								<p>
									<b>
										<u>Segurança</u> <u>do</u> <u>Trabalho</u>
									</b>
								</p>
							</div>
							<div className={styles.divBannerHome}>
								<img
									className={styles.BannerPar}
									src={segurandaDoTrabalho}
									alt="Banner"
								/>
							</div>
						</motion.div>

						<motion.div
							className={styles.divImparesBannersHome}
							initial={{ x: 1000 }}
							animate={{ x: 0 }}>
							<div className={styles.divParagrafoBannerHome}>
								<p>
									<b>
										<u>Atestados</u> <u>Ocupacionais</u>
									</b>
								</p>
							</div>
							<div className={styles.divBannerHome}>
								<img
									className={styles.BannerImpar}
									src={atestadoMedico}
									alt="Banner"
								/>
							</div>
						</motion.div>

						<motion.div
							className={styles.divParesBannersHome}
							initial={{ x: -1000 }}
							animate={{ x: 0 }}>
							<div className={styles.divParagrafoBannerHome}>
								<p>
									<b>
										<u>Especialidades</u> <u>Médicas</u>
									</b>
								</p>
							</div>
							<div className={styles.divBannerHome}>
								<img className={styles.BannerPar} src={medicina} alt="Banner" />
							</div>
						</motion.div>

						<div className={styles.divParagrafoFinalBannersHome}>
							<p>e muito mais...</p>
						</div>
					</div>
					<div className={styles.divButtonLeiaMaisHome}>
						<button
							className={styles.buttonLeiaMaisHome}
							onClick={navigateToTopServices}>
							Serviços
						</button>
					</div>
				</div>

				<hr></hr>

				<div className={styles.divCentralLinksHome}>
					<div className={styles.divTituloLinksHome}>
						<h1>Fique por dentro das notícias:</h1>
					</div>
					<div className={styles.divOrganizaLinksHome}>
						<a
							href="http://www.sstonline.com.br/sao-publicadas-as-novas-redacoes-das-nrs-1-7-e-9-pgr-e-fim-do-ppra/"
							target={"_blank"}>
							<div className={styles.divLink}>
								<div className={styles.divImgLink}>
									<img src={icone1} alt="Icone" />
								</div>
								<div>
									<a
										href="http://www.sstonline.com.br/sao-publicadas-as-novas-redacoes-das-nrs-1-7-e-9-pgr-e-fim-do-ppra/"
										target={"_blank"}>
										<p>PGR e o fim do PPRA</p>
									</a>
								</div>
							</div>
						</a>
						{/* <a
							href="https://www.anamt.org.br/portal/category/noticias/saude-no-trabalho/"
							target={"_blank"}>
							<div className={styles.divLink}>
								<div className={styles.divImgLink}>
									<img src={icone2} alt="Icone" />
								</div>
								<div>
									<a
										href="https://www.anamt.org.br/portal/category/noticias/saude-no-trabalho/"
										target={"_blank"}>
										<p>Notícias ANAMT</p>
									</a>
								</div>
							</div>
						</a> */}

						<a href="http://www.sstonline.com.br/" target={"_blank"}>
							<div className={styles.divLink}>
								<div className={styles.divImgLink}>
									<img src={icone3} alt="Icone" />
								</div>
								<div>
									<a href="http://www.sstonline.com.br/" target={"_blank"}>
										<p>SST Online</p>
									</a>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			{showPopup && (
				// Corrija para usar um objeto
				<div className={styles.popup} style={{ display: 'flex', position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', overflow: 'auto', border: '5px solid red', borderRadius: '5px', minWidth: '300px' }}>
					<div className={styles.popupContent} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'white', textAlign: 'center', padding: '15px' }}>
						<h2 style={{ color: 'white', backgroundColor: 'red', padding: '10px', fontWeight: 'bold', textAlign: 'center' }}>
							Comunicado Importante
						</h2>
						<p style={{textAlign: 'center'}}>Devido a uma inconsistência dos servidores UOL</p>
						<p style={{textAlign: 'center'}}>A <b>CESMT</b> não está conseguindo ter acesso aos <b>emails</b> enviados pelos clientes.</p>
						<p style={{textAlign: 'center'}}>Agradecemos a vossa <b>compreensão</b> e <b>paciência</b> durante essa situação.</p>
						<p style={{textAlign: 'center'}}>Em breve tudo estará restabelecido.</p>
						<button
							onClick={closePopup}
							style={{
								backgroundColor: 'white',
								color: 'red',
								border: '2px solid red',
								padding: '16px 28px',
								cursor: 'pointer',
								borderRadius: '5px',
								}}
							>Entendo
						</button>
					</div>
				</div>
		      	)}
		</>
	);
}

export { Home };
