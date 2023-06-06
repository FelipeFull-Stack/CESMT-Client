import instagram from "../../images/icones/instagram.png";
import whatsapp from "../../images/icones/whatsapp.png";
import phone from "../../images/icones/phone.png";
import location from "../../images/icones/location.png";
import email from "../../images/icones/email.png";

import styles from "./Contato.module.css";

function Contato() {
	return (
		<>
			<div className={styles.divPaiContato}>
				<section className={styles.divMasterCidade}>
					<div className={styles.divTituloCidade}>
						<h1>Jequié - BA</h1>
					</div>

					<div className={styles.divMasterContatos}>
						<div className={styles.divDuplaContatos}>
							<div className={styles.divIndividualInformacoesContato}>
								<div className={styles.divInternaImgContato}>
									<img src={email} alt="Icone" />
								</div>
								<div className={styles.divIndividualFrasesContato}>
									<p>nilza@cesmt.com.br</p>
									<p>cesmt@cesmt.com.br</p>
								</div>
							</div>

							<div className={styles.divIndividualInformacoesContato}>
								<div className={styles.divInternaImgContato}>
									<img src={phone} alt="Icone" />
								</div>
								<div className={styles.divIndividualFrasesContato}>
									<p>(73) 3526-1414</p>
									<p>(73) 3526-0718</p>
								</div>
							</div>
						</div>

						<div className={styles.divDuplaContatos}>
							<div className={styles.divIndividualInformacoesContato}>
								<div className={styles.divInternaImgContato}>
									<img src={whatsapp} alt="Icone" />
								</div>
								<div className={styles.divIndividualFrasesContato}>
									<p>(73) 9 9947-9413</p>
								</div>
							</div>

							<div className={styles.divIndividualInformacoesContato}>
								<div className={styles.divInternaImgContato}>
									<img src={instagram} alt="Icone" />
								</div>
								<div className={styles.divIndividualFrasesContato}>
									<p>@cesmt_oficial</p>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.divUnicaLocalizacao}>
						<div className={styles.divInternaImgLocalizacao}>
							<img src={location} alt="Icone" />
						</div>

						<address className={styles.divIndividualInformacoesLocalizacao}>
							<p>Rua Dr. José Alfredo Guimarães - Nº 26, Térreo</p>
							<p>Bairro São Luís</p>
							<p>Jequié-BA - CEP: 45.203-330</p>
						</address>

						<div className={styles.divIframeMAPS}>
							<iframe
								className={styles.iframeMAPS}
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
								src="https://maps.google.com/maps?q=Rua%20Dr.%20Jos%C3%A9%20Alfredo%20Guimar%C3%A3es%2C%2026&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
								title="Rua Dr. José Alfredo Guimarães, 26"
								aria-label="Rua Dr. José Alfredo Guimarães, 26"></iframe>
						</div>
					</div>
				</section>

				<hr></hr>

				<section className={styles.divMasterCidade}>
					<div className={styles.divTituloCidade}>
						<h1>Vitória da Conquista - BA</h1>
					</div>

					<div className={styles.divMasterContatos}>
						<div className={styles.divDuplaContatos}>
							<div className={styles.divIndividualInformacoesContato}>
								<div className={styles.divInternaImgContato}>
									<img src={email} alt="Icone" />
								</div>

								<div className={styles.divIndividualFrasesContato}>
									<p>nilza@cesmt.com.br</p>
									<p>cesmt@cesmt.com.br</p>
								</div>
							</div>

							<div className={styles.divIndividualInformacoesContato}>
								<div className={styles.divInternaImgContato}>
									<img src={phone} alt="Icone" />
								</div>

								<div className={styles.divIndividualFrasesContato}>
									<p>(77) 3424-5058</p>
								</div>
							</div>
						</div>

						<div className={styles.divDuplaContatos}>
							<div className={styles.divIndividualInformacoesContato}>
								<div className={styles.divInternaImgContato}>
									<img src={whatsapp} alt="Icone" />
								</div>

								<div className={styles.divIndividualFrasesContato}>
									<p>(77) 9 8146-0659</p>
								</div>
							</div>

							<div className={styles.divIndividualInformacoesContato}>
								<div className={styles.divInternaImgContato}>
									<img src={instagram} alt="Icone" />
								</div>

								<div className={styles.divIndividualFrasesContato}>
									<p>cesmt_conquista</p>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.divUnicaLocalizacao}>
						<div className={styles.divInternaImgLocalizacao}>
							<img src={location} alt="Icone" />
						</div>

						<address className={styles.divIndividualInformacoesLocalizacao}>
							<p>Avenida Crescêncio Silveira - Nº 103</p>
							<p>Centro</p>
							<p>Vitória da Conquista-BA - CEP: 45.000-190</p>
						</address>

						<div className={styles.divIframeMAPS}>
							<iframe
								className={styles.iframeMAPS}
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
								src="https://maps.google.com/maps?q=Rua%20Cresc%C3%AAncio%20Silveira%2C%20103%2C%20Centro&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
								title="Rua Crescêncio Silveira, 103, Centro"
								aria-label="Rua Crescêncio Silveira, 103, Centro"></iframe>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export { Contato };
