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
				<div className={styles.divMasterCidade}>
					<div
						className={styles.divTituloCidade}
						style={{ display: "flex", justifyContent: "center" }}>
						<h1>Jequié - BA</h1>
					</div>

					<div className={styles.divMasterContatos}>
						<div
							style={{
								width: "42%",
								display: "flex",
								flexDirection: "column",
							}}>
							{/* Email */}
							<div style={{ display: "flex", justifyContent: "center" }}>
								{/* Icone */}
								<img style={{ width: "40px" }} src={email} alt="Icone" />
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									lineHeight: "1px",
								}}>
								{/* Emails */}
								<p style={{ fontSize: "24px", fontWeight: "700" }}>
									nilza@cesmt.com.br
								</p>
								<p style={{ fontSize: "24px", fontWeight: "700" }}>
									cesmt@cesmt.com.br
								</p>
							</div>
						</div>

						<div
							style={{
								width: "42%",
								display: "flex",
								flexDirection: "column",
							}}>
							{/* Telefone */}
							<div style={{ display: "flex", justifyContent: "center" }}>
								{/* Icone */}
								<img style={{ width: "40px" }} src={phone} alt="Icone" />
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									lineHeight: "1px",
								}}>
								{/* Numeros */}
								<p style={{ fontSize: "24px", fontWeight: "700" }}>
									(73) 3526-1414
								</p>
								<p style={{ fontSize: "24px", fontWeight: "700" }}>
									(73) 3526-0718
								</p>
							</div>
						</div>

						<div
							style={{
								width: "42%",
								display: "flex",
								flexDirection: "column",
							}}>
							{/* WhatsApp */}
							<div style={{ display: "flex", justifyContent: "center" }}>
								{/* Icone */}
								<img style={{ width: "40px" }} src={whatsapp} alt="Icone" />
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									lineHeight: "1px",
								}}>
								{/* Numeros */}
								<p style={{ fontSize: "24px", fontWeight: "700" }}>
									(73) 9 9999-9999
								</p>
							</div>
						</div>

						<div
							style={{
								width: "42%",
								display: "flex",
								flexDirection: "column",
							}}>
							{/* Instagram */}
							<div style={{ display: "flex", justifyContent: "center" }}>
								{/* Icone */}
								<img style={{ width: "40px" }} src={instagram} alt="Icone" />
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									lineHeight: "1px",
								}}>
								{/* Numeros */}
								<p style={{ fontSize: "24px", fontWeight: "700" }}>
									cesmt_jequie
								</p>
							</div>
						</div>
					</div>

					<div
						style={{
							padding: "10px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							gap: "20px",
						}}>
						{/* Localização */}
						<div style={{ display: "flex", justifyContent: "center" }}>
							{/* Icone */}
							<img style={{ width: "60px" }} src={location} alt="Icone" />
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								lineHeight: 0,
							}}>
							{/* Localização Verbal - Texto*/}
							<p style={{ fontSize: "20px", fontWeight: "700" }}>
								Rua Dr. José Alfredo Guimarães - Nº 26
							</p>
							<p style={{ fontSize: "20px", fontWeight: "700" }}>
								Bairro São Luís
							</p>
							<p style={{ fontSize: "20px", fontWeight: "700" }}>
								Jequié-BA - CEP: 45.203-330
							</p>
						</div>
						<div style={{ display: "flex", justifyContent: "center" }}>
							{/* Localização Visual - Mapa*/}
							<iframe
								style={{ width: "800px", height: "500px" }}
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
								src="https://maps.google.com/maps?q=Rua%20Dr.%20Jos%C3%A9%20Alfredo%20Guimar%C3%A3es%2C%2026&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
								title="Rua Dr. José Alfredo Guimarães, 26"
								aria-label="Rua Dr. José Alfredo Guimarães, 26"></iframe>
						</div>
					</div>
				</div>

				<hr></hr>

				<div className={styles.divMasterCidade}>
					{/* Vitoria da Conquista */}
					<div style={{ display: "flex", justifyContent: "center" }}>
						{/* Nome da Cidade */}
						<h1>Vitória da Conquista - BA</h1>
					</div>

					<div
						style={{
							marginBottom: "25px",
							height: "300px",
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "space-around",
							alignContent: "space-around",
						}}>
						{/* Contato */}
						<div
							style={{
								width: "42%",
								display: "flex",
								flexDirection: "column",
							}}>
							{/* Email */}
							<div style={{ display: "flex", justifyContent: "center" }}>
								{/* Icone */}
								<img style={{ width: "40px" }} src={email} alt="Icone" />
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									lineHeight: "1px",
								}}>
								{/* Emails */}
								<p style={{ fontSize: "24px", fontWeight: "700" }}>
									nilza@cesmt.com.br
								</p>
								<p style={{ fontSize: "24px", fontWeight: "700" }}>
									cesmt@cesmt.com.br
								</p>
							</div>
						</div>

						<div
							style={{
								width: "42%",
								display: "flex",
								flexDirection: "column",
							}}>
							{/* Telefone */}
							<div style={{ display: "flex", justifyContent: "center" }}>
								{/* Icone */}
								<img style={{ width: "40px" }} src={phone} alt="Icone" />
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									lineHeight: "1px",
								}}>
								{/* Numeros */}
								<p style={{ fontSize: "24px", fontWeight: "700" }}>
									(77) 3424-5058
								</p>
								{/* <p style={{ fontSize: "24px", fontWeight: "700" }}>(73) 3526-0718</p> */}
							</div>
						</div>

						<div
							style={{
								width: "42%",
								display: "flex",
								flexDirection: "column",
							}}>
							{/* WhatsApp */}
							<div style={{ display: "flex", justifyContent: "center" }}>
								{/* Icone */}
								<img style={{ width: "40px" }} src={whatsapp} alt="Icone" />
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									lineHeight: "1px",
								}}>
								{/* Numeros */}
								<p style={{ fontSize: "24px", fontWeight: "700" }}>
									(73) 9 9999-9999
								</p>
							</div>
						</div>

						<div
							style={{
								width: "42%",
								display: "flex",
								flexDirection: "column",
							}}>
							{/* Instagram */}
							<div style={{ display: "flex", justifyContent: "center" }}>
								{/* Icone */}
								<img style={{ width: "40px" }} src={instagram} alt="Icone" />
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									lineHeight: "1px",
								}}>
								{/* Numeros */}
								<p style={{ fontSize: "24px", fontWeight: "700" }}>
									cesmt_conquista
								</p>
							</div>
						</div>
					</div>

					<div
						style={{
							padding: "10px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							gap: "20px",
						}}>
						{/* Localização */}
						<div style={{ display: "flex", justifyContent: "center" }}>
							{/* Icone */}
							<img style={{ width: "60px" }} src={location} alt="Icone" />
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								lineHeight: 0,
							}}>
							{/* Localização Verbal - Texto*/}
							<p style={{ fontSize: "20px", fontWeight: "700" }}>
								Avenida Crescêncio Silveira - Nº 103
							</p>
							<p style={{ fontSize: "20px", fontWeight: "700" }}>Centro</p>
							<p style={{ fontSize: "20px", fontWeight: "700" }}>
								Vitória da Conquista-BA - CEP: 45.000-190
							</p>
						</div>
						<div style={{ display: "flex", justifyContent: "center" }}>
							{/* Localização Visual - Mapa*/}
							<iframe
								style={{ width: "800px", height: "500px" }}
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
								src="https://maps.google.com/maps?q=Rua%20Cresc%C3%AAncio%20Silveira%2C%20103%2C%20Centro&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
								title="Rua Crescêncio Silveira, 103, Centro"
								aria-label="Rua Crescêncio Silveira, 103, Centro"></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export { Contato };
