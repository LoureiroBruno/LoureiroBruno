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
                <span className={styles.selo}>Portfolio Full Stack</span>

                <h1 className={styles.titulo}>Olá, Mundo!</h1>

                <p className={styles.paragrafo}>
                    Boas-vindas ao meu espaço pessoal. Eu sou Bruno Loureiro, desenvolvedor full stack,
                    e uso este projeto para reunir estudos, prática de interface e conteúdos sobre
                    front-end, Java e infraestrutura moderna.
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

                    <article className={styles.metrica}>
                        <strong>React, Java e DevOps</strong>
                        <span>foco em interfaces, APIs, automação e evolução contínua</span>
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
