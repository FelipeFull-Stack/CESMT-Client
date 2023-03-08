import logoCESMT from "../../images/Logo CESMT.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import menu from "../../images/menuhamburguer.png";
import "./Menubar.css";
import styles from "./Menubar.module.css";

function Menubar() {
	const navigate = useNavigate();

	const btnTop = document.querySelector("#btn-top");

	if (btnTop) {
		btnTop.addEventListener("click", () => {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});

		if (performance.navigation.type === 1) {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	}

	const [isExpanded, setIsExpanded] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsExpanded(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	function navigateToTopHome() {
		window.scrollTo(0, 0);
		navigate("/home");
	}
	function navigateToTopSobre() {
		window.scrollTo(0, 0);
		navigate("/sobre");
	}
	function navigateToTopServices() {
		window.scrollTo(0, 0);
		navigate("/servicos");
	}
	function navigateToTopClientes() {
		window.scrollTo(0, 0);
		navigate("/clientes");
	}
	function navigateToTopArtigos() {
		window.scrollTo(0, 0);
		navigate("/artigos");
	}
	function navigateToTopContato() {
		window.scrollTo(0, 0);
		navigate("/contato");
	}

	return (
		<>
			<div className="div-geral-manubar" /* className={styles.divPaiMenubar} */>
				<div
					className="div-navbar-logo" /* className={styles.divNavbarMenubar} */
				>
					<div
						className="img-logo-cesmt-navbar" /* className={styles.divLOGOMenubar} */
					>
						<img id="#" src={logoCESMT} alt="CESMT Logo" />
					</div>
					<nav className="nav-bar" /* className={styles.NavBarMenubar} */>
						<button
							className="my-button1"
							/* className={styles.btn1} */
							onClick={navigateToTopHome}>
							Início
						</button>
						<button
							className="my-button2"
							/* className={styles.btn2} */
							onClick={navigateToTopSobre}>
							A CESMT
						</button>
						<button
							className="my-button3"
							/* className={styles.btn3} */
							onClick={navigateToTopServices}>
							Serviços
						</button>
						<button
							className="my-button4"
							/* className={styles.btn4} */
							onClick={navigateToTopClientes}>
							Clientes
						</button>
						<button
							className="my-button5"
							/* className={styles.btn5} */
							onClick={navigateToTopArtigos}>
							Artigos
						</button>
						<button
							className="my-button6"
							/* className={styles.btn6} */ onClick={navigateToTopContato}>
							Contato
						</button>
					</nav>
				</div>
				<div
					/* className={styles.divFaixaColoridaMenubar} */
					style={{
						margin: "0",
						height: "20px",
						width: "100%",
						background:
							"linear-gradient(to right, rgb(255, 45, 49), rgb(175, 45, 49))",
					}}></div>
			</div>

			<div
				className="div-central-menu"
				/* className={styles.divPaiMenuHamburguer} */
			>
				{/*<div   className={styles.divLOGOMenuHamburuer}  >
				
				</div>*/}
				<img
					className="img-menu-hamburguer"
					id="#"
					src={logoCESMT}
					alt="CESMT Logo"
				/>

				<div
					className="div-hamburguer" /* className={styles.divButtonMenuHamburger} */
				>
					<button
						/* className={styles.buttonMenuHamburguer} */
						className="button-menu-hamburguer"
						onClick={() => setIsExpanded(!isExpanded)}>
						<img className="img-button-hamburguer" src={menu} alt="Menu" />
						<b>Menu</b>
					</button>
					{isExpanded && (
						<div className="buttons" /* className={styles.divButtonsClickMenuHamburguer} */ ref={ref}>
							<button onClick={navigateToTopHome}>Início</button>
							<button onClick={navigateToTopSobre}>A CESMT</button>
							<button onClick={navigateToTopServices}>Serviços</button>
							<button onClick={navigateToTopClientes}>Clientes</button>
							<button onClick={navigateToTopArtigos}>Artigos</button>
							<button onClick={navigateToTopContato}>Contato</button>
						</div>
					)}
				</div>
			</div>

			<button id="btn-top" className="btn-top"   /* className={styles.buttonSCROLLtoTOP} */ >
				<i class="fa fa-arrow-up"></i>
			</button>
		</>
	);
}

export { Menubar };

// const btnTop = document.querySelector('#btn-top');

// btnTop.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// .divMaster {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .divImg {
//     border: solid black 1px;
//   }

//   .navStyle {
//     display: flex;
//     flex-direction: row;
//     flex-wrap: nowrap;
//     justify-content: center;
//     align-items: center;
//     border: solid black 1px;
//   }

//   .menuButton {
//     padding: 5px;
//     margin: 5px;
//     background-color: rgb(214, 213, 210);
//     font-size: 20px;
//     font-weight: 500;
//     border: solid black 1px;
//   }
