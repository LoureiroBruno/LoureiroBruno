import styles from "./ConhecimentoCard.module.css";

export default function ConhecimentoCard({ grupo }) {
    return (
        <article className={styles.cardConhecimento}>
            <h4 className={styles.categoria}>{grupo.categoria}</h4>

            <ul className={styles.listaConhecimentos}>
                {grupo.itens.map((item) => (
                    <li key={item} className={styles.tagConhecimento}>
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    );
}
