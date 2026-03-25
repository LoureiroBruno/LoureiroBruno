import styles from "./Inicio.module.css";
import posts from "json/posts.json";
import PostCard from "componentes/PostCard";
import getPostCategory from "utils/getPostCategory";

const sectionOrder = ["Front-end", "Back-end", "DevOps", "Metodologias ágeis e práticas"];

export default function inicio () {
    const groupedPosts = sectionOrder
        .map((categoria) => ({
            categoria,
            posts: posts.filter((post) => getPostCategory(post.id) === categoria)
        }))
        .filter((grupo) => grupo.posts.length > 0);

    return (
        <div className={styles.secoes}>
            {groupedPosts.map((grupo) => (
                <section key={grupo.categoria} className={styles.secao}>
                    <div className={styles.secaoCabecalho}>
                        <span className={styles.secaoSelo}>Conteudos</span>
                        <h2 className={styles.secaoTitulo}>{grupo.categoria}</h2>
                    </div>

                    <ul className={styles.posts}>
                        {grupo.posts.map((post) => (
                            <li key={post.id} className={styles.item}>
                                <PostCard post={post}/>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    )
}


/** import './Inicio.module.css'; In div use className='nameClass' */
