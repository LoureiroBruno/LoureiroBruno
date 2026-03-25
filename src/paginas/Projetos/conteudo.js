export const secaoProjetos = {
    titulo: "Projetos em que participei",
    descricao:
        "A seguir estão alguns projetos que marcaram minha trajetória profissional, envolvendo desenvolvimento de sistemas internos, integrações institucionais, padronização de processos e melhoria da experiência de uso para equipes e usuários finais.",
    itens: [
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
            referencias: [
                {
                    label: "Painéis CISEC",
                    url: "https://cisec.esp.ce.gov.br/"
                },
                {
                    label: "Matéria da ESP/CE",
                    url: "https://www.esp.ce.gov.br/2025/11/14/esp-ce-aprimora-sistema-de-inscricoes-em-eventos-e-cursos-da-instituicao/"
                }
            ],
            tecnologias: ["Laravel", "Node.js", "APIs REST", "MySQL", "Docker"]
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
            tecnologias: ["Laravel", "Docker", "Intranet", "PHP"]
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
            tecnologias: ["Laravel", "Docker", "Auditoria", "Controle de acesso"]
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
            referencias: [
                {
                    label: "Formulário de ficha catalográfica",
                    url: "https://ficha.esp.ce.gov.br/"
                },
                {
                    label: "Matéria da ESP/CE",
                    url: "https://www.esp.ce.gov.br/2019/01/11/besp/"
                }
            ],
            tecnologias: ["PHP", "Bootstrap", "jQuery", "Docker", "MySQL"]
        }
    ]
};
