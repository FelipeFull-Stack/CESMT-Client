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
			<div className={styles.divPaiMenubar}>
				<div className={styles.divNavbarMenubar}>
					<div className={styles.divLOGOMenubar}>
						<img id="#" src={logoCESMT} alt="CESMT Logo" />
					</div>
					<nav className={styles.NavBarMenubar}>
						<button className={styles.btn1} onClick={navigateToTopHome}>
							Início
						</button>
						<button className={styles.btn2} onClick={navigateToTopSobre}>
							A CESMT
						</button>
						<button className={styles.btn3} onClick={navigateToTopServices}>
							Serviços
						</button>
						<button className={styles.btn4} onClick={navigateToTopClientes}>
							Clientes
						</button>
						<button className={styles.btn5} onClick={navigateToTopArtigos}>
							Artigos
						</button>
						<button className={styles.btn6} onClick={navigateToTopContato}>
							Contato
						</button>
					</nav>
				</div>
				<div className={styles.divFaixaColoridaMenubar}></div>
			</div>

			<div className={styles.divPaiMenuHamburguer}>
				<div className={styles.divLOGOMenuHamburuer}>
					<img id="#" src={logoCESMT} alt="CESMT Logo" />
				</div>

				<div className={styles.divButtonMenuHamburger}>
					<button
						className={styles.buttonMenuHamburguer}
						onClick={() => setIsExpanded(!isExpanded)}>
						<img src={menu} alt="Menu" />
						<b>Menu</b>
					</button>
					{isExpanded && (
						<div className={styles.divButtonsClickMenuHamburguer} ref={ref}>
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

			<button id="btn-top" className={styles.buttonSCROLLtoTOP}>
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
