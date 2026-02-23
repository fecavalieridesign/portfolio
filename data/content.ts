export type Language = "pt" | "en";

export const content = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      skills: "Skills",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Felipe Cavalieri",
      title: "Analista de Suporte Técnico",
      subtitle: "& Desenvolvedor Web",
      description:
        "4 anos de experiência em ambientes corporativos, com gestão de 1.200+ clientes e resolução de 125+ chamados/mês. Foco em suporte técnico e Customer Success.",
      cta: "Entre em contato",
      resume: "Ver currículo",
    },
    about: {
      title: "Sobre mim",
      description:
        "Analista de Suporte Técnico com 4 anos de experiência em ambientes corporativos, gerenciando carteira de 1.200+ clientes via CRM HubSpot e resolvendo 125+ chamados/mês. Atuação com atendimento remoto e presencial, manutenção de computadores, redes e servidores. Formação em Análise e Desenvolvimento de Sistemas.",
      stats: [
        { value: "4+", label: "Anos de experiência" },
        { value: "1.200+", label: "Clientes atendidos" },
        { value: "N1/N2", label: "Nível de suporte" },
        { value: "ADS", label: "Formação" },
      ],
    },
    experience: {
      title: "Experiência",
      jobs: [
        {
          company: "KCMS",
          period: "Out 2024 — Nov 2025",
          role: "Customer Success",
          tasks: [
            "Gestão ativa de carteira com 1.200+ clientes no CRM HubSpot",
            "Resolução de 125+ chamados/mês com foco em FCR e satisfação do cliente",
            "Onboarding e suporte operacional para novos clientes na plataforma",
            "Configuração de impressoras, redes e backup em nuvem",
            "Implementação de processos internos com ferramentas de IA",
          ],
        },
        {
          company: "MaxMicro Sorocaba",
          period: "Out 2021 — Out 2024",
          role: "Suporte Técnico & Customer Success",
          tasks: [
            "Suporte técnico remoto e presencial para 100+ empresas de múltiplos segmentos",
            "Diagnóstico e resolução de falhas em estações de trabalho e servidores",
            "Configuração e manutenção de redes TCP/IP e rotinas de backup em nuvem",
            "Atendimento via TeamViewer e AnyDesk com foco em resolução no primeiro contato",
            "Relacionamento direto com clientes para identificação de necessidades técnicas",
          ],
        },
      ],
    },
    skills: {
      title: "Competências",
      categories: [
        {
          name: "Suporte & Infraestrutura",
          items: ["Windows", "Linux", "MacOS", "Redes TCP/IP", "Backup em nuvem", "Troubleshooting"],
        },
        {
          name: "Ferramentas & IA",
          items: ["HubSpot CRM", "Jira", "FCR / CSAT / NPS", "Automação com IA", "ChatGPT / Claude", "Pacote Office"],
        },
        {
          name: "Desenvolvimento Web",
          items: ["HTML", "CSS", "SCSS", "JavaScript", "APIs REST", "Figma"],
        },
      ],
    },
    projects: {
      title: "Projetos",
      subtitle: "Meus repositórios mais recentes no GitHub",
      viewAll: "Ver todos no GitHub",
      viewProject: "Ver projeto",
      viewCode: "Código",
      loading: "Carregando projetos...",
      error: "Erro ao carregar projetos.",
    },
    education: {
      title: "Educação",
      degree: "Análise e Desenvolvimento de Sistemas",
      school: "Anhembi Morumbi",
      period: "Out 2021 — Jun 2023",
      courses: "HubSpot Academy — Customer Success (2026) · Service Hub Software (2026) · Origamid, CodeBoost, Rocketseat (Front-End)",
    },
    contact: {
      title: "Vamos conversar?",
      subtitle: "Estou disponível para novas oportunidades e projetos.",
      email: "devfecavalieri@gmail.com",
      phone: "(15) 99776-7724",
      cta: "Enviar email",
    },
    footer: {
      made: "Feito com",
      by: "por Felipe Cavalieri",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Felipe Cavalieri",
      title: "Technical Support Analyst",
      subtitle: "& Web Developer",
      description:
        "4 years of experience in corporate environments, managing 1,200+ clients and resolving 125+ tickets/month. Focused on technical support and Customer Success.",
      cta: "Get in touch",
      resume: "View resume",
    },
    about: {
      title: "About me",
      description:
        "Technical Support Analyst with 4 years of experience in corporate environments, managing a portfolio of 1,200+ clients via HubSpot CRM and resolving 125+ tickets/month. Experienced with remote and on-site support, computer maintenance, networks, and servers. Degree in Systems Analysis and Development.",
      stats: [
        { value: "4+", label: "Years of experience" },
        { value: "1,200+", label: "Clients served" },
        { value: "L1/L2", label: "Support level" },
        { value: "ADS", label: "Degree" },
      ],
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          company: "KCMS",
          period: "Oct 2024 — Nov 2025",
          role: "Customer Success",
          tasks: [
            "Active portfolio management with 1,200+ clients in HubSpot CRM",
            "Resolved 125+ tickets/month focused on FCR and customer satisfaction",
            "Onboarding and operational support for new clients adopting the platform",
            "Printer, network, and cloud backup configuration",
            "Implemented internal process improvements using AI tools",
          ],
        },
        {
          company: "MaxMicro Sorocaba",
          period: "Oct 2021 — Oct 2024",
          role: "Technical Support & Customer Success",
          tasks: [
            "Remote and on-site technical support for 100+ companies across multiple segments",
            "Diagnosed and resolved issues in workstations, servers, and peripherals",
            "Configured and maintained TCP/IP networks and cloud backup routines",
            "Support via TeamViewer and AnyDesk with focus on first contact resolution",
            "Direct client relationship management to identify and solve technical needs",
          ],
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Support & Infrastructure",
          items: ["Windows", "Linux", "MacOS", "TCP/IP Networks", "Cloud Backup", "Troubleshooting"],
        },
        {
          name: "Tools & AI",
          items: ["HubSpot CRM", "Jira", "FCR / CSAT / NPS", "AI Automation", "ChatGPT / Claude", "Office Suite"],
        },
        {
          name: "Web Development",
          items: ["HTML", "CSS", "SCSS", "JavaScript", "REST APIs", "Figma"],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "My latest repositories on GitHub",
      viewAll: "View all on GitHub",
      viewProject: "View project",
      viewCode: "Code",
      loading: "Loading projects...",
      error: "Failed to load projects.",
    },
    education: {
      title: "Education",
      degree: "Systems Analysis and Development",
      school: "Anhembi Morumbi",
      period: "Oct 2021 — Jun 2023",
      courses: "HubSpot Academy — Customer Success (2026) · Service Hub Software (2026) · Origamid, CodeBoost, Rocketseat (Front-End)",
    },
    contact: {
      title: "Let's talk?",
      subtitle: "I'm available for new opportunities and projects.",
      email: "devfecavalieri@gmail.com",
      phone: "(15) 99776-7724",
      cta: "Send email",
    },
    footer: {
      made: "Made with",
      by: "by Felipe Cavalieri",
      rights: "All rights reserved.",
    },
  },
};
