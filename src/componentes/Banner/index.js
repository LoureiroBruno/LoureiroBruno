import styles from "./Banner.module.css";
import posts from "json/posts.json";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

const stacks = ["React", "Next.js", "Java", "Docker", "CI/CD"];

export default function Banner () {
    const totalPosts = posts.length;

    return (
        <section className={styles.banner}>
            <div className={styles.apresentacao}>
                <span className={styles.selo}>Portfólio Full Stack</span>

                <h1 className={styles.titulo}>Bruno Loureiro</h1>

                <p className={styles.paragrafo}>
                    Desenvolvedor com experiência em diferentes linguagens, interfaces
                    modernas e infraestrutura de alta performance. Este espaço apresenta
                    informações sobre mim, meus projetos e minha evolução na tecnologia.
                </p>

                <div className={styles.tags}>
                    {stacks.map((stack) => (
                        <span key={stack} className={styles.tag}>
                            {stack}
                        </span>
                    ))}
                </div>

                <div className={styles.metricas}>
                    <article className={styles.metrica}>
                        <strong>{totalPosts}+ conteúdos</strong>
                        <span>posts, estudos e referências publicados no projeto</span>
                    </article>
                </div>
            </div>

            <div className={styles.visual}>
                <img className={styles.circuloColorido} src={circuloColorido} alt="imagem ilustrativa" aria-hidden={true} />

                <div className={styles.cardFoto}>
                    <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do autor"/>
                </div>

                <div className={styles.cardInfo}>
                    <span className={styles.cardInfoLabel}>Em destaque</span>
                    <strong>Interfaces modernas, APIs em Java e pipelines com Docker e CI/CD</strong>
                </div>
            </div>
        </section>
    )
}
