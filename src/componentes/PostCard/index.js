import React from 'react';
import styles from "./Post.module.css"; // Adjust the path to your CSS module
import { Link } from 'react-router-dom';
import BotaoPrincipal from 'componentes/BotaoPrincipal';
import getPostCover from 'utils/getPostCover';
import getPostCategory from 'utils/getPostCategory';

const PostCard = ({ post }) => {
    const categoria = getPostCategory(post.id);

    return (
        <Link className={styles.link} to={`/posts/${post.id}`}>
            <article className={styles.post}>
                <img
                    className={styles.capa}
                    src={getPostCover(post.id)}
                    alt="imagem de capa do post"
                />

                <div className={styles.conteudo}>
                    <span className={styles.categoria}>{categoria}</span>

                    <h2 className={styles.titulo}>{post.titulo}</h2>

                    <div className={styles.acao}>
                        <BotaoPrincipal title="Clique para ler o post">Ler</BotaoPrincipal>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default PostCard;
