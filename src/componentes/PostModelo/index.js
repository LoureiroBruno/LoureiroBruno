import styles from './PostModelo.module.css';

export default function PostModelo({ fotoCapa, titulo, children, conteudoExtra }) {
    return (
        <article className={styles.postModeloContainer}>
        
            <div className={styles.fotoCapa} style={{ backgroundImage: `url(${fotoCapa})` }} />

            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>

            {conteudoExtra ? (
                <div className={styles.conteudoComplementarContainer}>
                    {conteudoExtra}
                </div>
            ) : null}
        </article>
    )
}
