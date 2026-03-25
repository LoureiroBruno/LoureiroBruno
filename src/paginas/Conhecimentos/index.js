import ConhecimentoCard from "componentes/ConhecimentoCard";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./Conhecimentos.module.css";
import { secaoConhecimentos } from "./conteudo";

export default function Conhecimentos() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Conhecimentos">
            <section>
                <div className={styles.cabecalhoConhecimentos}>
                    <h3 className={styles.tituloConhecimentos}>{secaoConhecimentos.titulo}</h3>
                    <p className={styles.descricaoConhecimentos}>{secaoConhecimentos.descricao}</p>
                </div>

                <div className={styles.listaConhecimentos}>
                    {secaoConhecimentos.grupos.map((grupo) => (
                        <ConhecimentoCard key={grupo.categoria} grupo={grupo} />
                    ))}
                </div>
            </section>
        </PostModelo>
    );
}
