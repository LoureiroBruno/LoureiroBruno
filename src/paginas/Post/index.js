import "./Post.css";
import styles from "./Post.module.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";
import getPostCover from "utils/getPostCover";

export default function Post() {
    const { id } = useParams();
    const currentPostId = Number(id);
    const post = posts.find((post) => post.id === currentPostId);

    const postsRecomendados = posts
        .filter((post) => post.id !== currentPostId)
        .sort((post1, post2) => post2.id - post1.id)
        .slice(0, 4);

    if (!post) {
        return <NaoEncontrada />;
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route
                    index
                    element={
                        <PostModelo
                            fotoCapa={getPostCover(post.id)}
                            titulo={post.titulo}
                            conteudoExtra={
                                <>
                                    <h2 className={styles.tituloOutrosPosts}>
                                        Outros posts que você pode gostar:
                                    </h2>

                                    <ul className={styles.postsRecomendados}>
                                        {postsRecomendados.map((recommendedPost) => (
                                            <li key={recommendedPost.id} className={styles.postRecomendadoItem}>
                                                <PostCard post={recommendedPost} />
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            }
                        >
                            <div className="post-markdown-container">
                                <ReactMarkdown>{post.texto}</ReactMarkdown>
                            </div>
                        </PostModelo>
                    }
                />
            </Route>
        </Routes>
    );
}
