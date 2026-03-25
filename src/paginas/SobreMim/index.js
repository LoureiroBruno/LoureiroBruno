import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

const conhecimentos = [
    {
        categoria: "Front-end e frameworks",
        itens: ["React", "Next.js", "JavaScript", "CSS Modules", "Angular"]
    },
    {
        categoria: "Back-end e Java",
        itens: ["Java", "Spring Boot", "Quarkus", "APIs REST", "JWT"]
    },
    {
        categoria: "Containers e orquestração",
        itens: ["Docker", "Docker Swarm", "Kubernetes"]
    },
    {
        categoria: "CI/CD e qualidade",
        itens: ["Jenkins", "GitHub Actions", "Versionamento com Git"]
    },
    {
        categoria: "Métodos de trabalho",
        itens: ["Scrum", "Trabalho em equipe", "Entrega contínua"]
    }
];

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo={'Sobre Mim'}
        >

            <h3 className={styles.subtitulo}>
                Olá, eu sou o Bruno!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Bruno"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Sou desenvolvedor full stack e utilizo este projeto como um espaço para reunir estudos,
                prática de interface e conteúdos sobre tecnologia. Gosto de construir aplicações com foco
                em organização de código, boa experiência de uso e evolução contínua do produto.
            </p>
            <p className={styles.paragrafo}>
                No front-end, trabalho com React e também tenho interesse em ecossistemas como Next.js
                e Angular. Busco criar interfaces responsivas, reutilizáveis e bem estruturadas, mantendo
                componentes desacoplados e navegação clara para quem utiliza a aplicação.
            </p>
            <p className={styles.paragrafo}>
                No back-end, amplio minha base com Java e frameworks como Spring Boot e Quarkus,
                desenvolvendo APIs, regras de negócio e integrações com autenticação baseada em JWT
                e arquiteturas orientadas a serviços.
            </p>
            <p className={styles.paragrafo}>
                Também venho fortalecendo conhecimentos em infraestrutura e entrega contínua, com uso
                de Docker, Docker Swarm, Kubernetes, Jenkins e GitHub Actions para empacotamento,
                automação de pipelines e padronização de ambientes.
            </p>
            <p className={styles.paragrafo}>
                No dia a dia, valorizo processos ágeis, colaboração com o time e melhoria incremental.
                Por isso, Scrum e boas práticas de desenvolvimento fazem parte da forma como organizo
                entregas e acompanho a evolução dos projetos.
            </p>

            <section className={styles.secaoConhecimentos}>
                <h4 className={styles.tituloConhecimentos}>Conhecimentos e tecnologias</h4>

                <div className={styles.cardsConhecimentos}>
                    {conhecimentos.map((grupo) => (
                        <article key={grupo.categoria} className={styles.cardConhecimento}>
                            <h5 className={styles.categoria}>{grupo.categoria}</h5>

                            <ul className={styles.listaConhecimentos}>
                                {grupo.itens.map((item) => (
                                    <li key={item} className={styles.tagConhecimento}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>


        </PostModelo>
    )
}
