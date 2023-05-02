import { useState, useEffect, useCallback } from "react";
import { api } from "../../../api/api";
import "./ExibirServico.css";
import styles from "./ExibirServico.module.css";

function ExibirServico() {
	const [servico, setServico] = useState([]);
	const [selectedDivId, setSelectedDivId] = useState("");
	const [isMouseOver, setIsMouseOver] = useState(false);

	useEffect(() => {
		async function fetchServico() {
			try {
				const response = await api.get("/servico");
				setServico(response.data);
			} catch (err) {
				console.log(`Erro do Front-end em ExibirServico: ${err}`);
			}
		}
		fetchServico();
	}, []);

	const handleDisplay = useCallback(
		(id) => {
			setIsMouseOver(true);
			setSelectedDivId(id);
			console.log("MouseOver");
		},
		[setIsMouseOver, setSelectedDivId],
	);

	const handleHide = useCallback(() => {
		setIsMouseOver(false);
		setSelectedDivId("");
		console.log("MouseHide");
	}, [setIsMouseOver, setSelectedDivId]);

	return (
		<>
			<div className={styles.divPaiExibirServico}>
				<div className={styles.divTituloExibirServico}>
					<h1>Serviços</h1>
				</div>

				{/* <div className={styles.divMapORGANIZACAOdeSERVICOS}>
					<div className={styles.divClassificacaoDupla}>
						<div className={styles.divClassificaJEQUIEServicos}>
							<h2 className={styles.h2TituloClassificaJEQUIE}>Jequié</h2>
							<div className={styles.divConsultasJEQUIE}></div>
							<div className={styles.divExamesGeralJEQUIE}></div>
						</div>
						<div className={styles.divClassificaVITORIADACONQUISTAServicos}>
							<h2 className={styles.h2TituloClassificaVITORIADACONQUISTA}>
								Vitória da Conquista
							</h2>
							<div className={styles.divConsultasVITORIADACONQUISTA}></div>
							<div className={styles.divExamesGeralVITORIADACONQUISTA}></div>
						</div>
					</div>
					<div className={styles.divClassificacaoUnica}>
						<div className={styles.divClassificaAMBOSServicos}>
							<h2 className={styles.h2TituloClassificaAMBAS}>
								Ambas as Cidades
							</h2>
							<div className={styles.divOrganizadoraClassificadosAMBOS}>
								<div className={styles.divConsultasPsicologoAMBOS}></div>
								<div className={styles.divProgramasAMBOS}></div>
								<div className={styles.divTreinamentosAMBOS}></div>
							</div>
						</div>
					</div>
				</div> */}

				<div className={styles.divMapServicos}>
					<div className={styles.divTituloServico}>
						<h1>Consultas</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "SAUDE E SEGURANCA DO TRABALHO") {
							return (
								<div
									key={currentElement._id}
									className={styles.divServicoIndividualSST}
									onMouseOver={() => handleDisplay(currentElement._id)}
									onMouseOut={handleHide}>
									{/* <h2>{currentElement.sigla}</h2>
									<p> - </p> */}
									<h3>
										{currentElement.nome}
										<br />
									</h3>
									<h4>
										Atendemos na(s) cidade(s):{" "}
										<b>
											{currentElement.cidade === "JEQUIE"
												? "Jequié"
												: currentElement.cidade === "VITORIA DA CONQUISTA"
												? "Vitória da Conquita"
												: "Jequié e Vitória da Conquista"}
										</b>
									</h4>
									<div
										className={styles.divServicoSelecionado}
										style={{
											display:
												isMouseOver && currentElement._id === selectedDivId
													? "flex"
													: "none",
										}}>
										<button
											onClick={() => {
												window.open(
													`https://wa.me/5522998200724${currentElement.cidade === "JEQUIE"
												? "5573999479413"
												: currentElement.cidade === "VITORIA DA CONQUISTA"
												? "5577981460659"
												: "5573999479413"}?text=*Olá%20CESMT*%0AGostaria%20de%20saber%20mais%20sobre%20o%0A*${currentElement.nome}*`,
												);
											}}>Entrar em Contato</button>
									</div>
								</div>
							);
						}
						return null;
					})}
				</div>

				<hr />

				<div className={styles.divMapServicos}>
					<div className={styles.divTituloServico}>
						<h1>Consulta com Psicólogo</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "ESPECIALIDADES MEDICAS") {
							return (
								<div
									className={styles.divServicoIndividualEM}
									key={currentElement._id}
									onMouseOver={() => handleDisplay(currentElement._id)}
									onMouseOut={handleHide}>
									{/* <h2>{currentElement.sigla}</h2> */}
									{/* <p>-</p> */}
									<h3>
										{currentElement.nome}
										<br />
									</h3>
									<h4>
										Atendemos na(s) cidade(s):{" "}
										<b>
											{currentElement.cidade === "JEQUIE"
												? "Jequié"
												: currentElement.cidade === "VITORIA DA CONQUISTA"
												? "Vitória da Conquita"
												: "Jequié e Vitória da Conquista"}
										</b>
									</h4>
									<div
										className={styles.divServicoSelecionado}
										style={{
											display:
												isMouseOver && currentElement._id === selectedDivId
													? "flex"
													: "none",
										}}>
										<button
											onClick={() => {
												window.open(
													`https://wa.me/5522998200724${currentElement.cidade === "JEQUIE"
												? "5573999479413"
												: currentElement.cidade === "VITORIA DA CONQUISTA"
												? "5577981460659"
												: "5573999479413"}?text=*Olá%20CESMT*%0AGostaria%20de%20saber%20mais%20sobre%20o%0A*${currentElement.nome}*`,
												);
											}}>Entrar em Contato</button>
									</div>
								</div>
							);
						}
						return null;
					})}
				</div>

				<hr />

				<div className={styles.divMapServicos}>
					<div className={styles.divTituloServico}>
						<h1>Exames em Geral</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "SERVICOS") {
							return (
								<div
									className={styles.divServicoIndividualS}
									key={currentElement._id}
									onMouseOver={() => handleDisplay(currentElement._id)}
									onMouseOut={handleHide}>
									{/* <h2>{currentElement.sigla}</h2> */}
									{/* <p>-</p> */}
									<h3>
										{currentElement.nome}
										<br />
									</h3>
									<h4>
										Atendemos na(s) cidade(s):{" "}
										<b>
											{currentElement.cidade === "JEQUIE"
												? "Jequié"
												: currentElement.cidade === "VITORIA DA CONQUISTA"
												? "Vitória da Conquita"
												: "Jequié e Vitória da Conquista"}
										</b>
									</h4>
									<div
										className={styles.divServicoSelecionado}
										style={{
											display:
												isMouseOver && currentElement._id === selectedDivId
													? "flex"
													: "none",
										}}>
										<button
											onClick={() => {
												window.open(
													`https://wa.me/5522998200724${currentElement.cidade === "JEQUIE"
												? "5573999479413"
												: currentElement.cidade === "VITORIA DA CONQUISTA"
												? "5577981460659"
												: "5573999479413"}?text=*Olá%20CESMT*%0AGostaria%20de%20saber%20mais%20sobre%20o%0A*${currentElement.nome}*`,
												);
											}}>Entrar em Contato</button>
									</div>
								</div>
							);
						}
						return null;
					})}
				</div>

				<hr />

				<div className={styles.divMapServicos}>
					<div className={styles.divTituloServico}>
						<h1>Programas</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "HIGIENE OCUPACIONAL") {
							return (
								<div
									className={styles.divServicoIndividualHO}
									key={currentElement._id}
									onMouseOver={() => handleDisplay(currentElement._id)}
									onMouseOut={handleHide}>
									{/* <h2>{currentElement.sigla}</h2> */}
									{/* <p> - </p> */}
									<h3>
										{currentElement.nome}
										<br />
									</h3>
									<h4>
										Atendemos na(s) cidade(s):{" "}
										<b>
											{currentElement.cidade === "JEQUIE"
												? "Jequié"
												: currentElement.cidade === "VITORIA DA CONQUISTA"
												? "Vitória da Conquita"
												: "Jequié e Vitória da Conquista"}
										</b>
									</h4>
									<div
										className={styles.divServicoSelecionado}
										style={{
											display:
												isMouseOver && currentElement._id === selectedDivId
													? "flex"
													: "none",
										}}>
										<button
											onClick={() => {
												window.open(
													`https://wa.me/5522998200724${currentElement.cidade === "JEQUIE"
												? "5573999479413"
												: currentElement.cidade === "VITORIA DA CONQUISTA"
												? "5577981460659"
												: "5573999479413"}?text=*Olá%20CESMT*%0AGostaria%20de%20saber%20mais%20sobre%20o%0A*${currentElement.nome}*`,
												);
											}}>
											Entrar em Contato
										</button>
									</div>
								</div>
							);
						}
						return null;
					})}
				</div>

				<hr />

				<div className={styles.divMapServicos}>
					<div className={styles.divTituloServico}>
						<h1>Treinamentos</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "TREINAMENTOS") {
							return (
								<div
									className={styles.divServicoIndividualT}
									key={currentElement._id}
									onMouseOver={() => handleDisplay(currentElement._id)}
									onMouseOut={handleHide}>
									{/* <h2>{currentElement.sigla}</h2>
					<p> - </p> */}
									<h3>
										{currentElement.nome}
										<br />
									</h3>
									<h4>
										Atendemos na(s) cidade(s):{" "}
										<b>
											{currentElement.cidade === "JEQUIE"
												? "Jequié"
												: currentElement.cidade === "VITORIA DA CONQUISTA"
												? "Vitória da Conquita"
												: "Jequié e Vitória da Conquista"}
										</b>
									</h4>
									<div
										className={styles.divServicoSelecionado}
										style={{
											display:
												isMouseOver && currentElement._id === selectedDivId
													? "flex"
													: "none",
										}}>
										<button
											onClick={() => {
												window.open(
													`https://wa.me/5522998200724${currentElement.cidade === "JEQUIE"
												? "5573999479413"
												: currentElement.cidade === "VITORIA DA CONQUISTA"
												? "5577981460659"
												: "5573999479413"}?text=*Olá%20CESMT*%0AGostaria%20de%20saber%20mais%20sobre%20o%0A*${currentElement.nome}*`,
												);
											}}>Entrar em Contato</button>
									</div>
								</div>
							);
						}
						return null;
					})}
				</div>
			</div>
		</>
	);
}

export { ExibirServico };
