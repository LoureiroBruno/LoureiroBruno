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
        categoria: "Metodologias ágeis e práticas",
        itens: ["Scrum", "Kanban", "XP", "Lean", "Entrega contínua"]
    }
];

const projetos = [
    {
        titulo: "Hub - Sistema de Inscrições",
        organizacao: "Escola de Saúde Pública do Ceará",
        descricao: [
            "Participei do desenvolvimento do Hub, um sistema web interno criado para gerenciar processos de inscrição da Escola de Saúde Pública do Ceará, com foco em eventos institucionais, residências médica e multiprofissional, bolsas de pesquisa e ações de extensão.",
            "A solução surgiu para atender demandas específicas que não eram contempladas por ferramentas genéricas ou pelos sistemas institucionais já existentes, incluindo autenticação por CPF e e-mail, envio de documentação obrigatória, geração de protocolo e acompanhamento completo da inscrição.",
            "Desde sua concepção, o sistema foi pensado para evolução contínua e futuras implementações, permitindo ampliação de funcionalidades conforme novas demandas institucionais surgissem. Essa visão de crescimento favoreceu o aprimoramento da plataforma ao longo do tempo, com espaço para integrações, novos fluxos operacionais e recursos adicionais voltados à gestão educacional."
        ],
        destaques: [
            "Inscrição com autenticação via CPF e e-mail.",
            "Upload e controle de documentação obrigatória.",
            "Geração de protocolo e status de inscrição.",
            "Acompanhamento completo do processo pelo candidato.",
            "Integração com outros sistemas internos por meio de APIs RESTful."
        ],
        resultados: [
            "Padronização e rastreabilidade do processo de inscrição de ponta a ponta.",
            "Exportação e alimentação de dados para os painéis CISEC voltados à transparência e à tomada de decisão.",
            "Base preparada para evolução funcional, acompanhando novas necessidades da instituição e a expansão do sistema para outros contextos acadêmicos e operacionais."
        ],
        links: [
            {
                label: "Painéis CISEC",
                url: "https://cisec.esp.ce.gov.br/"
            },
            {
                label: "Matéria da ESP/CE",
                url: "https://www.esp.ce.gov.br/2025/11/14/esp-ce-aprimora-sistema-de-inscricoes-em-eventos-e-cursos-da-instituicao/"
            }
        ],
        stacks: ["Laravel", "Node.js", "APIs REST", "MySQL", "Docker"]
    },
    {
        titulo: "Portal PCCE - Links, Manuais e Contatos",
        organizacao: "Polícia Civil do Estado do Ceará",
        descricao: [
            "Atuei no desenvolvimento de um portal interno criado como ponto único de acesso a sistemas, manuais, tutoriais e contatos institucionais da Polícia Civil do Estado do Ceará.",
            "O objetivo foi reduzir a dispersão de links e padronizar a comunicação interna, oferecendo às áreas operacionais um ambiente mais direto para localizar recursos, abrir chamados e consultar contatos de apoio."
        ],
        destaques: [
            "Centralização de links, sistemas e materiais de apoio.",
            "Acesso facilitado a GLPI, manuais e contatos institucionais.",
            "Redução de dúvidas recorrentes e ganho de autonomia para equipes internas.",
            "Comunicação mais padronizada entre áreas e unidades."
        ],
        stacks: ["Laravel", "Docker", "Intranet", "PHP"]
    },
    {
        titulo: "SGR - Sistema de Gerenciamento de Acessos",
        organizacao: "Polícia Civil do Estado do Ceará",
        descricao: [
            "Desenvolvi o SGR, um sistema web em Laravel criado para centralizar o gerenciamento de acessos a sistemas legados desenvolvidos em diferentes tecnologias.",
            "A ferramenta foi construída para reduzir intervenções manuais em múltiplos sistemas, concentrando em um único painel tarefas como cadastro de usuários, redefinição de senha, desbloqueio de contas e concessão de permissões."
        ],
        destaques: [
            "Cadastro e gerenciamento de usuários por matrícula ou nome.",
            "Painel único para administrar acessos em diferentes sistemas legados.",
            "Bloqueio automático de contas de usuários desligados.",
            "Redefinição e desbloqueio centralizados de senhas.",
            "Registro de logs e trilhas de auditoria."
        ],
        resultados: [
            "Mais eficiência, segurança e padronização no controle de acessos institucionais.",
            "Redução do tempo de resposta das equipes de suporte em rotinas operacionais."
        ],
        stacks: ["Laravel", "Docker", "Auditoria", "Controle de acesso"]
    },
    {
        titulo: "Módulo de Elaboração de Ficha Catalográfica",
        organizacao: "Escola de Saúde Pública do Ceará",
        descricao: [
            "Participei do desenvolvimento do formulário on-line de elaboração de ficha catalográfica da Escola de Saúde Pública do Ceará, disponibilizado para apoiar a produção acadêmica da instituição por meio da geração automatizada da ficha em PDF, já normalizada e pronta para download ou impressão.",
            "O módulo foi desenvolvido em parceria com a Biblioteca da ESP/CE, a partir de uma base de código originalmente disponibilizada pela USP, e adaptado para a realidade institucional da Escola.",
            "Além da necessidade imediata de automatizar esse processo, a solução também foi pensada como um componente com potencial de integração futura a sistemas maiores da instituição, permitindo que esse fluxo possa evoluir e se conectar a outras rotinas acadêmicas e administrativas. Na implementação, utilizei recursos como PHP, Bootstrap, jQuery, Docker e MySQL para estruturar a interface, o comportamento do formulário e o ambiente da solução."
        ],
        destaques: [
            "Formulário web para coleta estruturada dos dados bibliográficos.",
            "Geração automática da ficha catalográfica em PDF.",
            "Adequação do fluxo às necessidades institucionais da ESP/CE.",
            "Apoio à biblioteca e à comunidade acadêmica com mais agilidade e padronização."
        ],
        resultados: [
            "Redução de esforço manual na elaboração da ficha catalográfica.",
            "Melhoria na padronização do processo e no atendimento às demandas acadêmicas.",
            "Base preparada para futura integração com outros sistemas da instituição."
        ],
        links: [
            {
                label: "Formulário de ficha catalográfica",
                url: "https://ficha.esp.ce.gov.br/"
            },
            {
                label: "Matéria da ESP/CE",
                url: "https://www.esp.ce.gov.br/2019/01/11/besp/"
            }
        ],
        stacks: ["PHP", "Bootstrap", "jQuery", "Docker", "MySQL"]
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
                Em 2020, direcionei minha carreira para a área de desenvolvimento de software, passando
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
                <h4 className={styles.tituloConhecimentos}>Conhecimentos adquiridos ao longo da carreira</h4>
                <p className={styles.descricaoConhecimentos}>
                    Abaixo estão tecnologias, ferramentas e práticas que fazem parte da minha trajetória
                    profissional em TI, construída entre infraestrutura, suporte, desenvolvimento de
                    software e evolução contínua de produtos.
                </p>

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

            <section className={styles.secaoProjetos}>
                <h4 className={styles.tituloProjetos}>Projetos em que participei</h4>
                <p className={styles.descricaoProjetos}>
                    A seguir estão alguns projetos que marcaram minha trajetória profissional,
                    envolvendo desenvolvimento de sistemas internos, integrações institucionais,
                    padronização de processos e melhoria da experiência de uso para equipes e usuários finais.
                </p>

                <div className={styles.listaProjetos}>
                    {projetos.map((projeto) => (
                        <article key={projeto.titulo} className={styles.cardProjeto}>
                            <div className={styles.topoProjeto}>
                                <span className={styles.seloProjeto}>Projeto</span>
                                <span className={styles.organizacaoProjeto}>{projeto.organizacao}</span>
                            </div>

                            <h5 className={styles.tituloProjeto}>{projeto.titulo}</h5>

                            <div className={styles.textosProjeto}>
                                {projeto.descricao.map((texto) => (
                                    <p key={texto} className={styles.paragrafoProjeto}>
                                        {texto}
                                    </p>
                                ))}
                            </div>

                            <div className={styles.blocoProjeto}>
                                <h6 className={styles.subtituloProjeto}>Principais entregas</h6>
                                <ul className={styles.listaProjeto}>
                                    {projeto.destaques.map((item) => (
                                        <li key={item} className={styles.itemProjeto}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {projeto.resultados ? (
                                <div className={styles.blocoProjeto}>
                                    <h6 className={styles.subtituloProjeto}>Resultados</h6>
                                    <ul className={styles.listaProjeto}>
                                        {projeto.resultados.map((item) => (
                                            <li key={item} className={styles.itemProjeto}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}

                            {projeto.links ? (
                                <div className={styles.linksProjeto}>
                                    {projeto.links.map((link) => (
                                        <p key={link.url} className={styles.linkProjetoLinha}>
                                            <a
                                                className={styles.linkProjeto}
                                                href={link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {link.label}
                                            </a>
                                        </p>
                                    ))}
                                </div>
                            ) : null}

                            <div className={styles.tagsProjeto}>
                                {projeto.stacks.map((stack) => (
                                    <span key={stack} className={styles.tagProjeto}>
                                        {stack}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>


        </PostModelo>
    )
}
