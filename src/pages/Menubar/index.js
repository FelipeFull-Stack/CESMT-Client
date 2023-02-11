import logoCESMT from "../../images/Logo CESMT.png"

function Menubar() {
    return (
        <>
            <div>
                <div>
                    <img src={logoCESMT} alt="CESMT Logo" />
                </div>
                <nav>
                    <button>Início</button>
                    <button>A CESMT</button>
                    <button>Serviços</button>
                    <button>Clientes</button>
                    <button>Artigos</button>
                    <button>Contato</button>
                </nav>
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
  