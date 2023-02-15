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

            <div>
                    <div>
                        <h1>Sobre nós:</h1>
                    </div>
                    <div>
                        <p>A CESMT foi fundada pelo Dr. José Henrique Padre <i>(in memorian)</i>, está há mais de 20 anos atuando com <b>Excelência</b> na Gestão de Saúde Ocupacional e Segurança do Trabalho.</p>
                        <p>A CESMT também é <b>Multiclínica</b>, com diversas <b>Especialidades Médicas</b>.</p>
                    </div>
            </div>

        </>
    )
}

export { Home }