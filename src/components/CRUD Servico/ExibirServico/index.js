import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import "./ExibirServico.css";
import styles from "./ExibirServico.module.css";

function ExibirServico() {
	const [servico, setServico] = useState([]);

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

	return (
		<>
			<div
				className="div-geral-servico" /*className={styles.divPaiExibirServico}*/
			>
				{/* <div className={styles.divTituloExibirServico} ></div> */}
				<h1>Nossos Serviços</h1>
				<div className="div-servico-map" /*className={styles.divMapServicos}*/>
					<div
						className="div-titulo-servico" /*className={styles.divTituloServico}*/
					>
						<h1>Saúde e Segurança do Trabalho</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "SAUDE E SEGURANCA DO TRABALHO") {
							return (
								<>
									<div
										className="div-servico" /*className={styles.divServicoIndividualSST}*/
									>
										<h2>{currentElement.sigla}</h2>
										<p>-</p>
										<h3>{currentElement.nome}</h3>
										{/* <p>{currentElement.description}</p> */}
									</div>
								</>
							);
						}
						return null;
					})}
				</div>

				<hr />

				<div className="div-servico-map" /*className={styles.divMapServicos}*/>
					<div
						className="div-titulo-servico" /*className={styles.divTituloServico}*/
					>
						<h1>Higiene Ocupacional</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "HIGIENE OCUPACIONAL") {
							return (
								<>
									<div
										className="div-servico" /*className={styles.divServicoIndividualHO}*/
									>
										<h2>{currentElement.sigla}</h2>
										<p>-</p>
										<h3>{currentElement.nome}</h3>

										{/* <p>{currentElement.description}</p> */}
									</div>
								</>
							);
						}
						return null;
					})}
				</div>

				<hr />

				<div className="div-servico-map" /*className={styles.divMapServicos}*/>
					<div
						className="div-titulo-servico" /*className={styles.divTituloServico}*/
					>
						<h1>Treinamentos</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "TREINAMENTOS") {
							return (
								<>
									<div
										className="div-servico" /*className={styles.divServicoIndividualT}*/
									>
										<h2>{currentElement.sigla}</h2>
										<p>-</p>
										<h3>{currentElement.nome}</h3>

										{/* <p>{currentElement.description}</p> */}
									</div>
								</>
							);
						}
						return null;
					})}
				</div>

				<hr />

				<div className="div-servico-map" /*className={styles.divMapServicos}*/>
					<div
						className="div-titulo-servico" /*className={styles.divTituloServico}*/
					>
						<h1>Serviços</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "SERVICOS") {
							return (
								<>
									<div
										className="div-servico" /*className={styles.divServicoIndividualS}*/
									>
										{/* <h2>{currentElement.sigla}</h2> */}
										{/* <p className="hifem">-</p> */}
										<h3>{currentElement.nome}</h3>

										{/* <p>{currentElement.description}</p> */}
									</div>
								</>
							);
						}
						return null;
					})}
				</div>

				<hr />

				<div className="div-servico-map" /*className={styles.divMapServicos}*/>
					<div
						className="div-titulo-servico" /*className={styles.divTituloServico}*/
					>
						<h1>Especialidades Médicas</h1>
					</div>
					{servico.map((currentElement) => {
						if (currentElement.tipo === "ESPECIALIDADES MEDICAS") {
							return (
								<>
									<div
										className="div-servico" /*className={styles.divServicoIndividualEM}*/
									>
										{/* <h2>{currentElement.sigla}</h2> */}
										{/* <p className="hifem">-</p> */}
										<h3>{currentElement.nome}</h3>
										{/* <p>{currentElement.description}</p> */}
									</div>
								</>
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
