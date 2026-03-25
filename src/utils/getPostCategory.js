const categoryByPostId = {
    1: "Back-end",
    2: "Back-end",
    3: "Back-end",
    4: "Front-end",
    5: "Front-end",
    6: "Front-end",
    7: "Front-end",
    8: "Front-end",
    9: "DevOps",
    10: "DevOps",
    11: "DevOps",
    12: "DevOps",
    13: "DevOps",
    14: "Front-end",
    15: "Back-end",
    16: "Back-end",
    17: "Metodologias ágeis e práticas",
    18: "Metodologias ágeis e práticas",
    19: "Metodologias ágeis e práticas",
    20: "Metodologias ágeis e práticas",
    21: "Metodologias ágeis e práticas"
};

export default function getPostCategory(postId) {
    return categoryByPostId[postId] || "Outros";
}
