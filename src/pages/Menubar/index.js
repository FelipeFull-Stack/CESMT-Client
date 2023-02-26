import logoCESMT from "../../images/Logo CESMT.png";
import { useNavigate } from "react-router-dom";
import "./Menubar.css";

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
			<div className="div-geral-manubar">
				<div className="div-navbar-logo">
					<div>
						<img
							id="#"
							src={logoCESMT}
							alt="CESMT Logo"
							style={{ width: "275px", margin: "20px" }}
						/>
					</div>
					<nav className="nav-bar">
						<button
							className="my-button1"
							onClick={navigateToTopHome}>
							Início
						</button>
						<button
							className="my-button2"
							onClick={navigateToTopSobre}>
							A CESMT
						</button>
						<button
							className="my-button3"
							onClick={navigateToTopServices}>
							Serviços
						</button>
						<button
							className="my-button4"
							onClick={navigateToTopClientes}>
							Clientes
						</button>
						<button
							className="my-button5"
							onClick={navigateToTopArtigos}>
							Artigos
						</button>
						<button
							className="my-button6"
							onClick={navigateToTopContato}>
							Contato
						</button>
					</nav>
				</div>
				<div
					style={{
						margin: "0",
						height: "20px",
						width: "100%",
						background:
							"linear-gradient(to right, rgb(255, 45, 49), rgb(175, 45, 49))",
					}}></div>
			</div>
			<button id="btn-top" class="btn-top">
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
