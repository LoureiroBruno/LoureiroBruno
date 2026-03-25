import styles from "./Inicio.module.css";
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
        <div className={styles.secoes}>
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
    );
}
