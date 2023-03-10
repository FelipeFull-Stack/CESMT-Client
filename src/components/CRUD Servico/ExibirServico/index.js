import { useState, useEffect, useRef } from "react";
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

	const [exibirDescricao, setExibirDescricao] = useState(false);
	const divRef = useRef(null);

	function handleClick() {
		setExibirDescricao(!exibirDescricao);
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (divRef.current && !divRef.current.contains(event.target)) {
				setExibirDescricao(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [divRef]);

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
									className={`${styles.divServicoIndividualSST} ${
										exibirDescricao
											? styles.exibirDescricao
											: styles.ocultarDescricao
									}`}
									ref={divRef}
									onClick={handleClick}>
									<h2>{currentElement.sigla}</h2>
									<p>-</p>
									<h3>{currentElement.nome}</h3>
									<h4>{currentElement.description}</h4>
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
									className={`${styles.divServicoIndividualHO} ${
										exibirDescricao
											? styles.exibirDescricao
											: styles.ocultarDescricao
									}`}
									ref={divRef}
									onClick={handleClick}>
									<h2>{currentElement.sigla}</h2>
									<p>-</p>
									<h3>{currentElement.nome}</h3>
									<h4>{currentElement.description}</h4>
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
									className={`${styles.divServicoIndividualT} ${
										exibirDescricao
											? styles.exibirDescricao
											: styles.ocultarDescricao
									}`}
									ref={divRef}
									onClick={handleClick}>
									<h2>{currentElement.sigla}</h2>
									<p>-</p>
									<h3>{currentElement.nome}</h3>
									<h4>{currentElement.description}</h4>
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
									className={`${styles.divServicoIndividualS} ${
										exibirDescricao
											? styles.exibirDescricao
											: styles.ocultarDescricao
									}`}
									ref={divRef}
									onClick={handleClick}>
									<h2>{currentElement.sigla}</h2>
									<p>-</p>
									<h3>{currentElement.nome}</h3>
									<h4>{currentElement.description}</h4>
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
									className={`${styles.divServicoIndividualEM} ${
										exibirDescricao
											? styles.exibirDescricao
											: styles.ocultarDescricao
									}`}
									ref={divRef}
									onClick={handleClick}>
									<h2>{currentElement.sigla}</h2>
									<p>-</p>
									<h3>{currentElement.nome}</h3>
									<h4>{currentElement.description}</h4>
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
