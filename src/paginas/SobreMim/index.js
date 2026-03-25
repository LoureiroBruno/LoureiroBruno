import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

const conhecimentos = [
    {
        categoria: "Front-end e frameworks",
        itens: ["React", "Next.js", "JavaScript", "TypeScript", "CSS Modules", "Angular", "jQuery", "Tailwind CSS", "Bootstrap"]
    },
    {
        categoria: "Back-end e frameworks",
        itens: [
            "Java",
            "Spring Boot",
            "Quarkus",
            "C#",
            ".NET",
            "ASP.NET Core",
            "Entity Framework",
            "Go",
            "Gin",
            "PHP",
            "Laravel",
            "Python",
            "APIs REST",
            "JWT"
        ]
    },
    {
        categoria: "Containers e orquestração",
        itens: ["Docker", "Docker Swarm", "Kubernetes"]
    },
    {
        categoria: "Bancos de dados",
        itens: ["PostgreSQL", "MySQL"]
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
                Atualmente atuo como desenvolvedor full stack, porém minha trajetória na área de
                Tecnologia da Informação teve início em 2005, quando comecei como técnico em manutenção
                de microcomputadores. Ao longo dos anos, adquiri sólida experiência com suporte técnico,
                atendimento a empresas e atuação em infraestrutura de redes, trabalhando com configuração
                e administração de servidores de domínio local, serviços de DHCP, servidores de arquivos
                e FTP, além de implantação e configuração de roteadores e ambientes corporativos.
            </p>
            <p className={styles.paragrafo}>
                Em 2018, direcionei minha carreira para a área de desenvolvimento de software, passando
                a atuar na construção de aplicações, evolução de sistemas e melhoria contínua de processos
                tecnológicos.
            </p>
            <p className={styles.paragrafo}>
                No front-end, trabalho principalmente com React, mantendo também experiência e interesse
                em ecossistemas como Next.js e Angular. Busco desenvolver interfaces responsivas,
                reutilizáveis e bem estruturadas, priorizando componentização, desacoplamento e uma
                experiência de navegação clara e eficiente para o usuário.
            </p>
            <p className={styles.paragrafo}>
                No back-end, possuo experiência com Java, C#, PHP e Python, utilizando frameworks e
                tecnologias como Spring Boot, Quarkus, .NET / ASP.NET Core, Entity Framework e Laravel
                para desenvolvimento de APIs REST, implementação de regras de negócio, integrações entre
                sistemas e autenticação baseada em JWT.
            </p>
            <p className={styles.paragrafo}>
                Atualmente participo do desenvolvimento de um projeto estratégico conduzido por uma
                grande empresa de tecnologia, com backend desenvolvido em Go (Golang) e arquitetura
                baseada em microsserviços orquestrados em Kubernetes. O sistema segue princípios de
                Clean Architecture e boas práticas de engenharia de software, utilizando tecnologias
                como PostgreSQL, GORM, Casbin para autorização, MinIO para armazenamento de objetos,
                OpenTelemetry para observabilidade e pipelines automatizados de CI/CD.
            </p>
            <p className={styles.paragrafo}>
                Este projeto possui visão de evolução para se tornar uma solução corporativa de grande
                porte, com características de um ERP moderno, voltado para alta escalabilidade,
                segurança, integração entre módulos e suporte a operações críticas de negócio.
            </p>
            <p className={styles.paragrafo}>
                Além disso, venho fortalecendo minha atuação em infraestrutura e práticas DevOps,
                utilizando ferramentas como Docker, Docker Swarm, Kubernetes, Jenkins e GitHub Actions
                para containerização, automação de pipelines, padronização de ambientes e melhoria da
                entrega contínua de software.
            </p>
            <p className={styles.paragrafo}>
                No dia a dia, valorizo metodologias ágeis, colaboração entre equipes e melhoria
                incremental de processos e produtos. Por isso, práticas como Scrum, versionamento
                estruturado, revisão de código e foco em qualidade fazem parte da forma como organizo
                minhas entregas e acompanho a evolução dos projetos.
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
