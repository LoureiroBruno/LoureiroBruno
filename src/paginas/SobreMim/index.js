import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";
import { apresentacaoSobreMim } from "./conteudo";

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}>{apresentacaoSobreMim.saudacao}</h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Bruno"
                className={styles.fotoSobreMim}
            />

            {apresentacaoSobreMim.paragrafos.map((paragrafo) => (
                <p key={paragrafo} className={styles.paragrafo}>
                    {paragrafo}
                </p>
            ))}
        </PostModelo>
    );
}
