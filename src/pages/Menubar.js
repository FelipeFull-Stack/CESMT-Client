import style from "./style.module.css";

function Menubar() {
    return (
        <>
            <div style={style.divMaster}>
                <div style={style.divImg}>
                    <img src="../../../../images/Logo CESMT.png" alt="CESMT Logo" />
                </div>
                <nav style={style.navStyle}>
                    <button style={style.menuButton}>Início</button>
                    <button style={style.menuButton}>A CESMT</button>
                    <button style={style.menuButton}>Serviços</button>
                    <button style={style.menuButton}>Clientes</button>
                    <button style={style.menuButton}>Artigos</button>
                    <button style={style.menuButton}>Contato</button>
                </nav>
            </div>
        </>
    );
};

export { Menubar };