import styles from "./Inicio.module.css";
import fotoCapa from "assets/sobre_mim_capa.png";
import posts from "json/posts.json";
import PostCard from "componentes/PostCard";
import getPostCategory from "utils/getPostCategory";

const sectionOrder = ["Front-end", "Back-end", "DevOps", "Metodologias ágeis e práticas"];

function groupPostsBySection() {
    return sectionOrder
        .map((category) => ({
            category,
            posts: posts.filter((post) => getPostCategory(post.id) === category)
        }))
        .filter((group) => group.posts.length > 0);
}

export default function Inicio() {
    const groupedPosts = groupPostsBySection();

    return (
        <div className={styles.paginaInicio}>
            <section className={styles.abertura}>
                <div
                    className={styles.capaIntroducao}
                    style={{ backgroundImage: `url(${fotoCapa})` }}
                />

                <div className={styles.capaConteudo}>
                    <span className={styles.secaoSelo}>Início</span>
                    <h2 className={styles.capaTitulo}>Início</h2>
                </div>
            </section>

            <div className={styles.secoes}>
                <section className={styles.introducao}>
                    <div className={styles.introducaoCabecalho}>
                        <h3 className={styles.introducaoTitulo}>Conteúdos e conhecimentos</h3>
                    </div>

                    <p className={styles.introducaoDescricao}>
                        Este espaço reúne conteúdos sobre diferentes temas da área de tecnologia,
                        incluindo estudos, referências e práticas relacionadas a front-end,
                        back-end, DevOps, infraestrutura e metodologias de desenvolvimento.
                    </p>
                </section>

                {groupedPosts.map((group) => (
                    <section key={group.category} className={styles.secao}>
                        <div className={styles.secaoCabecalho}>
                            <span className={styles.secaoSelo}>Conteudos</span>
                            <h2 className={styles.secaoTitulo}>{group.category}</h2>
                        </div>

                        <ul className={styles.posts}>
                            {group.posts.map((post) => (
                                <li key={post.id} className={styles.item}>
                                    <PostCard post={post} />
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
}
