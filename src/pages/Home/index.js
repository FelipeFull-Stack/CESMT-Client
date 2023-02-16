import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import banner1 from "../../images/banner carrossel 1.png";
import banner2 from "../../images/banner carrossel 2.png";
import "./styles.css";

const images = [banner1, banner2];

function Home() {

    const carrossel = useRef();
    const [largura, setLargura] = useState(0);

    useEffect(() => {
        console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth);
        setLargura(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth - 90);
    }, []);

    return (
        <>
            <motion.div ref={carrossel} className="carrossel" whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -largura }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                >
                    {images.map((currentElement) => {
                        return (
                            <motion.div key={currentElement} className="item">
                                <img src={currentElement} alt="Banners" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            <div className="div-central-paragrafo">
                <div className="div-paragrafo">
                    <h1>Sobre nós:</h1>
                </div>
                <div className="div-paragrafo">
                    <p className="paragrafo">A <b>CESMT</b> foi fundada pelo <b>Dr. José Henrique Padre</b> <i>(in memorian)</i>,<br/> está há mais de <b>20 anos</b> atuando com <b>Excelência</b> na <b>Gestão de Saúde Ocupacional</b> e <b>Segurança do Trabalho</b>.</p>
                    <p className="paragrafo">A CESMT também é <b>Multiclínica</b>, com diversas <b>Especialidades Médicas</b>.</p>
                </div>

                <div className="div-button-leiamais">
                    <button className="button-leiamais">Leia Mais</button>
                </div>
            </div>

        </>
    )
}

export { Home }