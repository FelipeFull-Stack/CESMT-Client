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
				<div className={styles.divMapServicos}>
					<div className={styles.divTituloServico}>
						<h1>Saúde e Segurança do Trabalho</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "SAUDE E SEGURANCA DO TRABALHO") {
							return (
								<div
									key={currentElement._id}
									className={styles.divServicoIndividualSST}
									onMouseOver={() => handleDisplay(currentElement._id)}
									onMouseOut={handleHide}>
									<h2>{currentElement.sigla}</h2>
									<p> - </p>
									<h3>{currentElement.nome}</h3>
									<div
										className={styles.divServicoSelecionado}
										style={{
											display:
												isMouseOver && currentElement._id === selectedDivId
													? "flex"
													: "none",
										}}>
										<h4>
											Atendemos nas cidades:{" "}
											<b>
												{currentElement.cidade === "JEQUIE"
													? "Jequié"
													: currentElement.cidade === "VITORIA DA CONQUISTA"
													? "Vitória da Conquita"
													: "Jequié e Vitória da Conquista"}
											</b>
										</h4>
										<button>Entrar em Contato</button>
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
						<h1>Higiene Ocupacional</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "HIGIENE OCUPACIONAL") {
							return (
								<div
									className={styles.divServicoIndividualHO}
									key={currentElement._id}
									onMouseOver={() => handleDisplay(currentElement._id)}
									onMouseOut={handleHide}>
									<h2>{currentElement.sigla}</h2>
									<p> - </p>
									<h3>{currentElement.nome}</h3>
									<div
										className={styles.divServicoSelecionado}
										style={{
											display:
												isMouseOver && currentElement._id === selectedDivId
													? "flex"
													: "none",
										}}>
										<h4>
											Atendemos nas cidades:{" "}
											<b>
												{currentElement.cidade === "JEQUIE"
													? "Jequié"
													: currentElement.cidade === "VITORIA DA CONQUISTA"
													? "Vitória da Conquita"
													: "Jequié e Vitória da Conquista"}
											</b>
										</h4>
										<button>Entrar em Contato</button>
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
									<h2>{currentElement.sigla}</h2>
									<p> - </p>
									<h3>{currentElement.nome}</h3>
									<div
										className={styles.divServicoSelecionado}
										style={{
											display:
												isMouseOver && currentElement._id === selectedDivId
													? "flex"
													: "none",
										}}>
										<h4>
											Atendemos nas cidades:{" "}
											<b>
												{currentElement.cidade === "JEQUIE"
													? "Jequié"
													: currentElement.cidade === "VITORIA DA CONQUISTA"
													? "Vitória da Conquita"
													: "Jequié e Vitória da Conquista"}
											</b>
										</h4>
										<button>Entrar em Contato</button>
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
						<h1>Serviços</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "SERVICOS") {
							return (
								<div
									className={styles.divServicoIndividualS}
									key={currentElement._id}
									onMouseOver={() => handleDisplay(currentElement._id)}
									onMouseOut={handleHide}>
									<h2>{currentElement.sigla}</h2>
									{/* <p>-</p> */}
									<h3>{currentElement.nome}</h3>
									<div
										className={styles.divServicoSelecionado}
										style={{
											display:
												isMouseOver && currentElement._id === selectedDivId
													? "flex"
													: "none",
										}}>
										<h4>
											Atendemos nas cidades:{" "}
											<b>
												{currentElement.cidade === "JEQUIE"
													? "Jequié"
													: currentElement.cidade === "VITORIA DA CONQUISTA"
													? "Vitória da Conquita"
													: "Jequié e Vitória da Conquista"}
											</b>
										</h4>
										<button>Entrar em Contato</button>
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
						<h1>Especialidades Médicas</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "ESPECIALIDADES MEDICAS") {
							return (
								<div
									className={styles.divServicoIndividualEM}
									key={currentElement._id}
									onMouseOver={() => handleDisplay(currentElement._id)}
									onMouseOut={handleHide}>
									<h2>{currentElement.sigla}</h2>
									{/* <p>-</p> */}
									<h3>{currentElement.nome}</h3>
									<div
										className={styles.divServicoSelecionado}
										style={{
											display:
												isMouseOver && currentElement._id === selectedDivId
													? "flex"
													: "none",
										}}>
										<h4>
											Atendemos nas cidades:{" "}
											<b>
												{currentElement.cidade === "JEQUIE"
													? "Jequié"
													: currentElement.cidade === "VITORIA DA CONQUISTA"
													? "Vitória da Conquita"
													: "Jequié e Vitória da Conquista"}
											</b>
										</h4>
										<button>Entrar em Contato</button>
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
