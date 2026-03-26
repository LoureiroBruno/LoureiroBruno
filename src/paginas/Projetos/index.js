import PostModelo from "componentes/PostModelo";
import ProjetoCard from "componentes/ProjetoCard";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./Projetos.module.css";
import { secaoProjetos } from "./conteudo";

export default function Projetos() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Meus Projetos">
            <section>
                <div className={styles.cabecalhoProjetos}>
                    <h3 className={styles.tituloProjetos}>{secaoProjetos.titulo}</h3>
                    <p className={styles.descricaoProjetos}>{secaoProjetos.descricao}</p>
                </div>

                <div className={styles.listaProjetos}>
                    {secaoProjetos.itens.map((projeto) => (
                        <ProjetoCard key={projeto.titulo} projeto={projeto} />
                    ))}
                </div>
            </section>
        </PostModelo>
    );
}
