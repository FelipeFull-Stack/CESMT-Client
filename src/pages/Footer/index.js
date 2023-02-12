import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";

function Footer() {
    return (
        <>
            <div
                style={{
                    margin: 0,
                    height: "20px",
                    width: "100%",
                    background: "linear-gradient(to right, rgb(255, 45, 49), rgb(175, 45, 49))"
                }}>
            </div>
            <div>
                <div>

                </div>
                <div>
                <FontAwesomeIcon icon="fa-regular fa-phone" />
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                    height: "50px",
                    width: "100%",
                    background: "rgb(65, 62, 62)"
                }}
            >
                <p
                    style={{
                        fontSize: "16px",
                        color: "white"
                    }}
                >© 2023 CESMT EXCELÊNCIA EM SAÚDE • Built with Luiz Felipe Soares Lopes Ⓡ</p>
            </div>
            <div
                style={{
                    margin: 0,
                    height: "33%",
                    width: "100%",
                    background: "rgb(120, 2, 2)"
                }}
            >
            </div>
        </>
    );
};

export { Footer };
//© 2023 CESMT EXCELÊNCIA EM SAÚDE • 