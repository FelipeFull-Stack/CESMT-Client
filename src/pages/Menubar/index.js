import logoCESMT from "../../images/Logo CESMT.png"
import {useNavigate} from "react-router-dom";

function Menubar() {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <div 
                style={{
                    display: "flex", 
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: 30
                    }}>
                    <div>
                        <img 
                            src={logoCESMT}
                            alt="CESMT Logo" 
                            style={{width: "275px"}}  
                        />
                    </div>
                    <nav 
                    style={{
                        width: "65%",
                        margin: 10,
                        padding: 2,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: "5px"
                    }}
                    >
                        <button style={{width: "100px", height: "40px", borderRadius: "25px", border: "solid rgb(255, 45, 49) 2px", fontWeight: "700"}} onClick={() => {navigate("/home")}}>Início</button>
                        <button style={{width: "100px", height: "40px", borderRadius: "25px", border: "solid rgb(235, 45, 49) 2px", fontWeight: "700"}} onClick={() => {navigate("/sobre")}}>A CESMT</button>
                        <button style={{width: "100px", height: "40px", borderRadius: "25px", border: "solid rgb(215, 45, 49) 2px", fontWeight: "700"}} onClick={() => {navigate("/servicos")}}>Serviços</button>
                        <button style={{width: "100px", height: "40px", borderRadius: "25px", border: "solid rgb(195, 45, 49) 2px", fontWeight: "700"}} onClick={() => {navigate("/clientes")}}>Clientes</button>
                        <button style={{width: "100px", height: "40px", borderRadius: "25px", border: "solid rgb(175, 45, 49) 2px", fontWeight: "700"}} onClick={() => {navigate("/artigos")}}>Artigos</button>
                        <button style={{width: "100px", height: "40px", borderRadius: "25px", border: "solid rgb(155, 45, 49) 2px", fontWeight: "700"}} onClick={() => {navigate("/contato")}}>Contato</button>
                    </nav>
                </div>
                <div 
                    style={{
                        margin: "0",
                        height: "20px",
                        width: "100%",
                        background: "linear-gradient(to right, rgb(255, 45, 49), rgb(175, 45, 49))"
                    }}>
                </div>
            </div>
        </>
    );
};

export { Menubar };

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
  