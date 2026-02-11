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
        "4 anos de experiência em ambientes corporativos, unindo suporte técnico e desenvolvimento web para criar soluções eficientes.",
      cta: "Entre em contato",
      resume: "Ver currículo",
    },
    about: {
      title: "Sobre mim",
      description:
        "Analista de Suporte Técnico com 4 anos de experiência em ambientes corporativos, atuando com atendimento remoto e presencial, manutenção de computadores, redes e servidores. Experiência com CRM (HubSpot), automação de processos e uso de ferramentas de acesso remoto. Formação em Análise e Desenvolvimento de Sistemas.",
      stats: [
        { value: "4", label: "Anos de experiência" },
        { value: "2", label: "Empresas" },
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
            "Suporte técnico para aplicativo de food service",
            "Configuração de impressoras e redes de computadores",
            "Atendimento ao cliente e suporte operacional",
            "Cadastro e gestão de clientes no CRM HubSpot",
            "Uso de IA para automação de processos internos",
          ],
        },
        {
          company: "MaxMicro Sorocaba",
          period: "Out 2021 — Out 2024",
          role: "Customer Success",
          tasks: [
            "Suporte técnico para empresas de diversos segmentos",
            "Atendimento remoto e presencial a usuários",
            "Formatação, manutenção e troubleshooting de computadores",
            "Configuração e manutenção de redes (TCP/IP)",
            "Manutenção de servidores e rotinas de backup em nuvem",
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
          items: ["HubSpot CRM", "Jira", "Git", "Automação com IA", "ChatGPT / Claude", "Pacote Office"],
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
      courses: "Cursos em desenvolvimento web — Origamid, CodeBoost, Rocketseat",
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
        "4 years of experience in corporate environments, combining technical support and web development to create efficient solutions.",
      cta: "Get in touch",
      resume: "View resume",
    },
    about: {
      title: "About me",
      description:
        "Technical Support Analyst with 4 years of experience in corporate environments, working with remote and on-site support, computer maintenance, networks, and servers. Experienced with CRM (HubSpot), process automation, and remote access tools. Degree in Systems Analysis and Development.",
      stats: [
        { value: "4", label: "Years of experience" },
        { value: "2", label: "Companies" },
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
            "Technical support for food service application",
            "Printer and computer network configuration",
            "Customer service and operational support",
            "Client registration and management in HubSpot CRM",
            "AI usage for internal process automation",
          ],
        },
        {
          company: "MaxMicro Sorocaba",
          period: "Oct 2021 — Oct 2024",
          role: "Customer Success",
          tasks: [
            "Technical support for multi-segment companies",
            "Remote and on-site user support",
            "Computer formatting, maintenance, and troubleshooting",
            "Network configuration and maintenance (TCP/IP)",
            "Server maintenance and cloud backup routines",
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
          items: ["HubSpot CRM", "Jira", "Git", "AI Automation", "ChatGPT / Claude", "Office Suite"],
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
      courses: "Web development courses — Origamid, CodeBoost, Rocketseat",
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
