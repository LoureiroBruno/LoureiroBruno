const svgCoverPosts = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);

export default function getPostCover(postId) {
    const numericId = Number(postId);
    const filename = svgCoverPosts.has(numericId) ? "capa.svg" : "capa.png";

    return `/assets/posts/${numericId}/${filename}`;
}
