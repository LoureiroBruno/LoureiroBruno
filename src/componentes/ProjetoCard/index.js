import styles from "./ProjetoCard.module.css";

export default function ProjetoCard({ projeto }) {
    return (
        <article className={styles.cardProjeto}>
            <div className={styles.topoProjeto}>
                <span className={styles.seloProjeto}>Projeto</span>
                <span className={styles.organizacaoProjeto}>{projeto.organizacao}</span>
            </div>

            <h5 className={styles.tituloProjeto}>{projeto.titulo}</h5>

            <div className={styles.textosProjeto}>
                {projeto.descricao.map((texto) => (
                    <p key={texto} className={styles.paragrafoProjeto}>
                        {texto}
                    </p>
                ))}
            </div>

            <div className={styles.blocoProjeto}>
                <h6 className={styles.subtituloProjeto}>Principais entregas</h6>
                <ul className={styles.listaProjeto}>
                    {projeto.destaques.map((item) => (
                        <li key={item} className={styles.itemProjeto}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {projeto.resultados ? (
                <div className={styles.blocoProjeto}>
                    <h6 className={styles.subtituloProjeto}>Resultados</h6>
                    <ul className={styles.listaProjeto}>
                        {projeto.resultados.map((item) => (
                            <li key={item} className={styles.itemProjeto}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}

            {projeto.referencias ? (
                <div className={styles.linksProjeto}>
                    {projeto.referencias.map((link) => (
                        <p key={link.url} className={styles.linkProjetoLinha}>
                            <a
                                className={styles.linkProjeto}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {link.label}
                            </a>
                        </p>
                    ))}
                </div>
            ) : null}

            <div className={styles.tagsProjeto}>
                {projeto.tecnologias.map((tecnologia) => (
                    <span key={tecnologia} className={styles.tagProjeto}>
                        {tecnologia}
                    </span>
                ))}
            </div>
        </article>
    );
}
