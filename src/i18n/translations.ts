export type Lang = "en" | "pt" | "es";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export const PACKAGE_SESSIONS = 4;

export interface Testimonial {
  name: string;
  location: string;
  text: string;
}

export interface Specialty {
  title: string;
  description: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

interface Translation {
  nav: {
    about: string;
    specialties: string;
    content: string;
    testimonials: string;
    faq: string;
    book: string;
    bookCta: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    languagesLabel: string;
    locationNote: string;
    role: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    highlights: string[];
    photoIntro: string;
    photoSticker: string;
  };
  specialties: {
    label: string;
    title: string;
    subtitle: string;
    items: Specialty[];
  };
  content: {
    label: string;
    title: string;
    subtitle: string;
    tiktok: { title: string; description: string; cta: string };
    instagram: { title: string; description: string; cta: string };
    medium: { title: string; description: string; cta: string };
  };
  testimonials: {
    label: string;
    title: string;
    subtitle: string;
    refs: string[];
    items: Testimonial[];
  };
  faq: {
    label: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  booking: {
    label: string;
    title: string;
    subtitle: string;
    stepPlan: string;
    stepSchedule: string;
    stepPayment: string;
    single: {
      title: string;
      description: string;
      features: string[];
    };
    package: {
      title: string;
      badge: string;
      description: string;
      features: string[];
    };
    perSession: string;
    choosePlan: string;
    selectDateSingle: string;
    selectDatePackage: string;
    selectedDates: string;
    selectTime: string;
    timezoneNote: string;
    continue: string;
    back: string;
    summary: string;
    plan: string;
    dates: string;
    total: string;
    yourDetails: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    cpf: string;
    cpfPlaceholder: string;
    country: string;
    countryPlaceholder: string;
    sessionLanguage: string;
    brLimitNote: string;
    payment: string;
    pixTitle: string;
    pixInstructions: string;
    pixKeyLabel: string;
    transferTitle: string;
    transferInstructions: string;
    accountHolderLabel: string;
    ibanLabel: string;
    bicLabel: string;
    amountLabel: string;
    copy: string;
    copied: string;
    confirmBooking: string;
    processing: string;
    paymentNote: string;
    successTitle: string;
    successMessage: string;
    successDetail: string;
    bookAnother: string;
    fillAllFields: string;
  };
  footer: {
    tagline: string;
    contact: string;
    quickLinks: string;
    social: string;
    disclaimer: string;
    rights: string;
  };
}

export const translations: Record<Lang, Translation> = {
  en: {
    nav: {
      about: "About me",
      specialties: "Specialties",
      content: "Content",
      testimonials: "Testimonials",
      faq: "FAQ",
      book: "Booking",
      bookCta: "Book a session",
    },
    hero: {
      badge: "Psychoanalysis · Online sessions worldwide",
      title1: "A warm space to understand",
      title2: "your own story.",
      subtitle:
        "I'm Gabrielle Firmino, a psychoanalyst supporting people across borders — through relationships, immigration, family, love, self-esteem, money and the feminine. Wherever you are, you are welcome here.",
      ctaPrimary: "Book your session",
      ctaSecondary: "Get to know me",
      languagesLabel: "Sessions in",
      locationNote: "Online · Serving clients in Europe, the Americas and beyond",
      role: "Psychoanalyst",
    },
    about: {
      label: "About me",
      title: "Hello, I'm Gabrielle — it's so good to have you here.",
      p1: "I believe that every person carries a story worth listening to with care. As a psychoanalyst, my work is to walk alongside you while you discover the meanings behind what you feel, repeat and dream.",
      p2: "Living between cultures myself, I deeply understand the emotional layers of immigration — the longing, the reinvention, the courage it takes to start again. That's why my practice is international: I welcome clients in English, Portuguese and Spanish, including those living in Germany and across Europe.",
      p3: "My approach is gentle and unhurried. Here there is no judgment — only a safe, warm space where your story can finally breathe.",
      highlights: [
        "Online sessions in 3 languages",
        "International experience with immigrants",
        "A welcoming, judgment-free space",
        "Focus on the feminine and self-esteem",
      ],
      photoIntro: "Hello, I'm",
      photoSticker: "Meet your psychoanalyst.",
    },
    specialties: {
      label: "Specialties",
      title: "Themes we can explore together",
      subtitle:
        "Each journey is unique. These are the areas where I can support you most deeply.",
      items: [
        {
          title: "Relationships",
          description:
            "Understanding the patterns you repeat in love and friendship, and building healthier bonds.",
        },
        {
          title: "Immigration",
          description:
            "The emotional journey of living far from home — grief, identity, belonging and reinvention.",
        },
        {
          title: "Family",
          description:
            "Healing family wounds and understanding the inheritance of emotions across generations.",
        },
        {
          title: "Love & Self-esteem",
          description:
            "Learning to look at yourself with kindness and to receive the love you deserve.",
        },
        {
          title: "Money & Emotions",
          description:
            "Exploring your emotional relationship with money, scarcity, abundance and self-worth.",
        },
        {
          title: "The Feminine",
          description:
            "A space to explore womanhood, cycles, desire and the strength of the feminine in your life.",
        },
      ],
    },
    content: {
      label: "Content",
      title: "Let's stay close — even between sessions",
      subtitle:
        "I share reflections on psychoanalysis and everyday emotional life. Come find me where you feel most at home.",
      tiktok: {
        title: "TikTok",
        description:
          "Short videos on psychoanalysis, relationships and the emotions of living abroad.",
        cta: "Watch on TikTok",
      },
      instagram: {
        title: "Instagram",
        description:
          "Daily reflections, reels and a closer look at my work and routine as an analyst.",
        cta: "Follow on Instagram",
      },
      medium: {
        title: "Medium",
        description:
          "In-depth articles on the feminine, self-esteem, family and the inner life.",
        cta: "Read on Medium",
      },
    },
    testimonials: {
      label: "What clients say",
      title: "Words from people I've had the honor to accompany",
      subtitle: "Every story is unique — these are some of them, shared with permission.",
      refs: ["Clients in 10+ countries", "Sessions in 3 languages", "100% online"],
      items: [
        {
          name: "Mariana S.",
          location: "Berlin, Germany",
          text: "Living abroad was breaking me in silence. Gabrielle helped me name what I was feeling for the first time. Our sessions became my safe place in a foreign country.",
        },
        {
          name: "Sofía R.",
          location: "Madrid, Spain",
          text: "I arrived wanting to fix my relationship, and I ended up meeting myself. Gabrielle has a rare gift of listening without judgment.",
        },
        {
          name: "Emily W.",
          location: "London, UK",
          text: "The monthly package made therapy a real habit in my life. Booking everything at once removed every excuse — and the consistency changed everything.",
        },
        {
          name: "Camila T.",
          location: "Lisbon, Portugal",
          text: "Working on my relationship with money in analysis was unexpected and transformative. I understood that my scarcity was emotional, not financial.",
        },
        {
          name: "Ana Luiza M.",
          location: "São Paulo, Brazil",
          text: "After years of putting everyone first, I'm learning to take up space. Gabrielle's work with the feminine touched something very deep in me.",
        },
        {
          name: "Valentina G.",
          location: "Buenos Aires, Argentina",
          text: "Being able to do analysis in my own language while living so far away is a gift. I always leave our sessions lighter and more whole.",
        },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Frequently asked questions",
      subtitle:
        "Everything you'd like to know before our first session — and if anything is missing, just write to me.",
      items: [
        {
          q: "What is the difference between psychoanalysis and therapy?",
          a: "Therapy often focuses on relieving a specific symptom or solving a present problem. Psychoanalysis goes deeper: it listens to your unconscious — the patterns you repeat, your dreams, your slips — to understand the roots of what you feel. It's a journey of self-knowledge that transforms not just a symptom, but your relationship with your own story.",
        },
        {
          q: "How does psychoanalysis work?",
          a: "In our sessions you are invited to speak freely about whatever comes to mind — there is no script and no judgment. Through this open listening, we discover together the meanings behind what you feel, repeat and dream. Over time, what was confusing starts to make sense, and new ways of living become possible.",
        },
        {
          q: "How do online sessions work?",
          a: "Sessions happen by video call, in English, Portuguese or Spanish. You only need a quiet place and a stable internet connection. After booking, you receive the video call link by email. Online analysis is just as deep and welcoming as in person — wherever you are in the world.",
        },
        {
          q: "How often should I have sessions?",
          a: "Most people start with one session per week — consistency is what makes the process deepen. That's why the monthly package with 4 sessions exists. But every journey is unique: we can find together the rhythm that fits your moment and your life.",
        },
        {
          q: "Which payment methods do you accept?",
          a: "In Brazil, payment is made via PIX. In Europe and all other countries, payment is made by international bank transfer (IBAN). The currency you pay in depends on the country where you live: reais for residents of Brazil, euros for everyone else. The website shows the right option automatically, and you'll find all the details at checkout.",
        },
        {
          q: "I need an urgent session. What should I do?",
          a: "Write to me directly at {email} and tell me briefly what is going on. I will personally find a time for you as soon as possible — even outside the calendar shown on this website.",
        },
        {
          q: "How do I know if psychoanalysis is for me?",
          a: "If you feel that something repeats in your life — in love, in family, in your relationship with money or with yourself — and you want to understand it instead of just enduring it, psychoanalysis can be a powerful path. The best way to find out is to experience a first session, with no commitment to continue.",
        },
      ],
    },
    booking: {
      label: "Booking",
      title: "Choose a moment that is just for you",
      subtitle:
        "Pick a date in my calendar, choose your time, and confirm your payment — all in one place. I'll be waiting for you.",
      stepPlan: "Plan",
      stepSchedule: "Schedule",
      stepPayment: "Payment",
      single: {
        title: "Single session",
        description: "One online session, at your pace.",
        features: ["Online via video call", "EN · PT · ES", "You choose the date and time"],
      },
      package: {
        title: "Monthly package",
        badge: "Most convenient",
        description:
          "Four sessions booked at once — same price per session, one single payment.",
        features: [
          "4 online sessions",
          "Book all dates at once",
          "One single payment",
          "Same price per session",
        ],
      },
      perSession: "per session",
      choosePlan: "Continue with this plan",
      selectDateSingle: "Choose your date",
      selectDatePackage: "Choose your 4 dates",
      selectedDates: "Selected dates",
      selectTime: "Choose your time",
      timezoneNote: "Times shown in Central European Time (CET) · Tue–Thu",
      continue: "Continue",
      back: "Back",
      summary: "Summary",
      plan: "Plan",
      dates: "Date(s)",
      total: "Total",
      yourDetails: "Your details",
      name: "Full name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      cpf: "CPF",
      cpfPlaceholder: "000.000.000-00",
      country: "Country of residence",
      countryPlaceholder: "e.g. Brazil",
      sessionLanguage: "Session language",
      brLimitNote:
        "Limited availability: only 8 spots in my calendar are reserved for residents of Brazil — the remaining spots are exclusive to clients living abroad.",
      payment: "Payment",
      pixTitle: "Pay with PIX",
      pixInstructions:
        "Make a PIX transfer for the total amount using the key below, then confirm your booking. Your times are reserved and you'll receive the confirmation email as soon as the payment is identified.",
      pixKeyLabel: "PIX key (CPF)",
      transferTitle: "Pay by bank transfer (SEPA/IBAN)",
      transferInstructions:
        "Make a bank transfer for the total amount using the details below, then confirm your booking. Your times are reserved and you'll receive the confirmation email as soon as the payment is identified.",
      accountHolderLabel: "Account holder",
      ibanLabel: "IBAN",
      bicLabel: "BIC/SWIFT",
      amountLabel: "Amount to transfer",
      copy: "Copy",
      copied: "Copied!",
      confirmBooking: "I've sent the payment — confirm booking",
      processing: "Confirming your booking…",
      paymentNote:
        "Your booking is confirmed after the payment is identified — usually within a few hours.",
      successTitle: "Your booking is reserved! 💙",
      successMessage:
        "Thank you for trusting me with your story. As soon as your payment is identified, you'll receive a confirmation email with the video call link.",
      successDetail: "I'm truly looking forward to meeting you.",
      bookAnother: "Book another session",
      fillAllFields: "Please fill in all fields to continue.",
    },
    footer: {
      tagline:
        "Psychoanalysis with warmth — in English, Portuguese and Spanish, wherever you are.",
      contact: "Contact",
      quickLinks: "Quick links",
      social: "Follow me",
      disclaimer:
        "This website does not provide emergency care. If you are in crisis, please contact your local emergency services.",
      rights: "All rights reserved.",
    },
  },

  pt: {
    nav: {
      about: "Sobre mim",
      specialties: "Especialidades",
      content: "Conteúdo",
      testimonials: "Depoimentos",
      faq: "Dúvidas",
      book: "Agendamento",
      bookCta: "Agendar sessão",
    },
    hero: {
      badge: "Psicanálise · Sessões online para o mundo todo",
      title1: "Um espaço acolhedor para entender",
      title2: "a sua própria história.",
      subtitle:
        "Eu sou Gabrielle Firmino, psicanalista, e acompanho pessoas em diferentes países — em temas como relacionamentos, imigração, família, amor, autoestima, dinheiro e o feminino. Onde você estiver, aqui é o seu lugar.",
      ctaPrimary: "Agendar minha sessão",
      ctaSecondary: "Me conhecer melhor",
      languagesLabel: "Sessões em",
      locationNote: "Online · Atendendo na Europa, nas Américas e além",
      role: "Psicanalista",
    },
    about: {
      label: "Sobre mim",
      title: "Oi, eu sou a Gabrielle — que bom ter você aqui.",
      p1: "Eu acredito que toda pessoa carrega uma história que merece ser escutada com cuidado. Como psicanalista, meu trabalho é caminhar ao seu lado enquanto você descobre os sentidos por trás do que sente, repete e sonha.",
      p2: "Vivendo entre culturas, eu entendo profundamente as camadas emocionais da imigração — a saudade, a reinvenção, a coragem de recomeçar. Por isso minha prática é internacional: atendo em português, inglês e espanhol, inclusive quem vive na Alemanha e em toda a Europa.",
      p3: "Minha abordagem é gentil e sem pressa. Aqui não existe julgamento — apenas um espaço seguro e acolhedor onde a sua história pode, enfim, respirar.",
      highlights: [
        "Sessões online em 3 idiomas",
        "Experiência internacional com imigrantes",
        "Um espaço acolhedor e sem julgamentos",
        "Foco no feminino e na autoestima",
      ],
      photoIntro: "Olá, eu sou a",
      photoSticker: "Conheça sua psicanalista.",
    },
    specialties: {
      label: "Especialidades",
      title: "Temas que podemos explorar juntas(os)",
      subtitle:
        "Cada jornada é única. Estas são as áreas em que posso te acompanhar mais profundamente.",
      items: [
        {
          title: "Relacionamentos",
          description:
            "Entender os padrões que você repete no amor e nas amizades, e construir vínculos mais saudáveis.",
        },
        {
          title: "Imigração",
          description:
            "A jornada emocional de viver longe de casa — o luto, a identidade, o pertencimento e a reinvenção.",
        },
        {
          title: "Família",
          description:
            "Curar feridas familiares e compreender a herança emocional que atravessa gerações.",
        },
        {
          title: "Amor & Autoestima",
          description:
            "Aprender a se olhar com gentileza e a receber o amor que você merece.",
        },
        {
          title: "Dinheiro & Emoções",
          description:
            "Explorar sua relação emocional com o dinheiro, a escassez, a abundância e o próprio valor.",
        },
        {
          title: "O Feminino",
          description:
            "Um espaço para explorar a mulheridade, os ciclos, o desejo e a força do feminino na sua vida.",
        },
      ],
    },
    content: {
      label: "Conteúdo",
      title: "Vamos ficar perto — mesmo entre as sessões",
      subtitle:
        "Compartilho reflexões sobre psicanálise e a vida emocional do dia a dia. Vem me encontrar onde você se sentir em casa.",
      tiktok: {
        title: "TikTok",
        description:
          "Vídeos curtos sobre psicanálise, relacionamentos e as emoções de viver fora do país.",
        cta: "Assistir no TikTok",
      },
      instagram: {
        title: "Instagram",
        description:
          "Reflexões diárias, reels e um olhar mais próximo do meu trabalho e rotina como analista.",
        cta: "Seguir no Instagram",
      },
      medium: {
        title: "Medium",
        description:
          "Artigos aprofundados sobre o feminino, autoestima, família e a vida interior.",
        cta: "Ler no Medium",
      },
    },
    testimonials: {
      label: "O que dizem",
      title: "Palavras de pessoas que tive a honra de acompanhar",
      subtitle: "Cada história é única — estas são algumas delas, compartilhadas com permissão.",
      refs: ["Clientes em 10+ países", "Sessões em 3 idiomas", "100% online"],
      items: [
        {
          name: "Mariana S.",
          location: "Berlim, Alemanha",
          text: "Viver fora estava me quebrando em silêncio. A Gabrielle me ajudou a nomear o que eu sentia pela primeira vez. Nossas sessões viraram meu lugar seguro em um país estrangeiro.",
        },
        {
          name: "Sofía R.",
          location: "Madri, Espanha",
          text: "Cheguei querendo consertar meu relacionamento e acabei me encontrando comigo mesma. A Gabrielle tem um dom raro de escutar sem julgar.",
        },
        {
          name: "Emily W.",
          location: "Londres, Reino Unido",
          text: "O pacote mensal transformou a terapia em um hábito real na minha vida. Agendar tudo de uma vez tirou todas as desculpas — e a constância mudou tudo.",
        },
        {
          name: "Camila T.",
          location: "Lisboa, Portugal",
          text: "Trabalhar minha relação com o dinheiro na análise foi inesperado e transformador. Entendi que a minha escassez era emocional, não financeira.",
        },
        {
          name: "Ana Luiza M.",
          location: "São Paulo, Brasil",
          text: "Depois de anos colocando todo mundo em primeiro lugar, estou aprendendo a ocupar espaço. O trabalho da Gabrielle com o feminino tocou algo muito profundo em mim.",
        },
        {
          name: "Valentina G.",
          location: "Buenos Aires, Argentina",
          text: "Poder fazer análise na minha própria língua morando tão longe é um presente. Sempre saio das sessões mais leve e mais inteira.",
        },
      ],
    },
    faq: {
      label: "Dúvidas frequentes",
      title: "Perguntas frequentes",
      subtitle:
        "Tudo o que você gostaria de saber antes da nossa primeira sessão — e se faltar algo, é só me escrever.",
      items: [
        {
          q: "Qual a diferença entre psicanálise e terapia?",
          a: "A terapia costuma focar no alívio de um sintoma específico ou na solução de um problema do presente. A psicanálise vai mais fundo: ela escuta o seu inconsciente — os padrões que você repete, os sonhos, os atos falhos — para entender as raízes do que você sente. É uma jornada de autoconhecimento que transforma não só um sintoma, mas a sua relação com a própria história.",
        },
        {
          q: "Como funciona a psicanálise?",
          a: "Nas sessões, você é convidada(o) a falar livremente sobre o que vier à mente — sem roteiro e sem julgamento. Através dessa escuta aberta, descobrimos juntas(os) os sentidos por trás do que você sente, repete e sonha. Com o tempo, o que era confuso começa a fazer sentido, e novas formas de viver se tornam possíveis.",
        },
        {
          q: "Como funcionam as sessões online?",
          a: "As sessões acontecem por videochamada, em português, inglês ou espanhol. Você só precisa de um lugar tranquilo e uma conexão estável. Depois de agendar, você recebe o link da videochamada por e-mail. A análise online é tão profunda e acolhedora quanto a presencial — onde você estiver no mundo.",
        },
        {
          q: "Com que frequência devo fazer sessões?",
          a: "A maioria das pessoas começa com uma sessão por semana — é a constância que faz o processo se aprofundar. Por isso existe o pacote mensal com 4 sessões. Mas cada jornada é única: podemos encontrar juntas(os) o ritmo que cabe no seu momento e na sua vida.",
        },
        {
          q: "Quais meios de pagamento são aceitos?",
          a: "No Brasil, o pagamento é feito via PIX. Na Europa e nos demais países, por transferência bancária internacional (IBAN). A moeda do pagamento depende do país onde você mora: reais para quem reside no Brasil e euros para quem reside fora. O site mostra a opção certa automaticamente, e todos os dados aparecem na hora de agendar.",
        },
        {
          q: "Preciso de uma sessão urgente. O que faço?",
          a: "Me escreva diretamente no e-mail {email} contando brevemente o que está acontecendo. Eu mesma encontro um horário para você o quanto antes — mesmo fora da agenda mostrada neste site.",
        },
        {
          q: "Como sei se a psicanálise é para mim?",
          a: "Se você sente que algo se repete na sua vida — no amor, na família, na relação com o dinheiro ou com você mesma(o) — e quer entender em vez de apenas suportar, a psicanálise pode ser um caminho poderoso. A melhor forma de descobrir é viver uma primeira sessão, sem compromisso de continuar.",
        },
      ],
    },
    booking: {
      label: "Agendamento",
      title: "Escolha um momento que seja só seu",
      subtitle:
        "Escolha uma data no meu calendário, defina o horário e confirme o pagamento — tudo em um só lugar. Estarei te esperando.",
      stepPlan: "Plano",
      stepSchedule: "Agenda",
      stepPayment: "Pagamento",
      single: {
        title: "Sessão avulsa",
        description: "Uma sessão online, no seu ritmo.",
        features: ["Online por videochamada", "PT · EN · ES", "Você escolhe a data e o horário"],
      },
      package: {
        title: "Pacote mensal",
        badge: "Mais prático",
        description:
          "Quatro sessões agendadas de uma vez — mesmo valor por sessão, um único pagamento.",
        features: [
          "4 sessões online",
          "Agende todas as datas de uma vez",
          "Um único pagamento",
          "Mesmo valor por sessão",
        ],
      },
      perSession: "por sessão",
      choosePlan: "Continuar com este plano",
      selectDateSingle: "Escolha a sua data",
      selectDatePackage: "Escolha as suas 4 datas",
      selectedDates: "Datas selecionadas",
      selectTime: "Escolha o horário",
      timezoneNote: "Horários no fuso da Europa Central (CET) · Ter–Qui",
      continue: "Continuar",
      back: "Voltar",
      summary: "Resumo",
      plan: "Plano",
      dates: "Data(s)",
      total: "Total",
      yourDetails: "Seus dados",
      name: "Nome completo",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      emailPlaceholder: "voce@email.com",
      cpf: "CPF",
      cpfPlaceholder: "000.000.000-00",
      country: "País de residência",
      countryPlaceholder: "ex.: Brasil",
      sessionLanguage: "Idioma da sessão",
      brLimitNote:
        "Vagas limitadas: reservo apenas 8 vagas da minha agenda para residentes no Brasil — as demais são exclusivas para quem mora no exterior.",
      payment: "Pagamento",
      pixTitle: "Pague com PIX",
      pixInstructions:
        "Faça um PIX no valor total para a chave abaixo e depois confirme o agendamento. Seus horários ficam reservados e você recebe o e-mail de confirmação assim que o pagamento for identificado.",
      pixKeyLabel: "Chave PIX (CPF)",
      transferTitle: "Pague por transferência bancária (SEPA/IBAN)",
      transferInstructions:
        "Faça uma transferência no valor total usando os dados abaixo e depois confirme o agendamento. Seus horários ficam reservados e você recebe o e-mail de confirmação assim que o pagamento for identificado.",
      accountHolderLabel: "Titular da conta",
      ibanLabel: "IBAN",
      bicLabel: "BIC/SWIFT",
      amountLabel: "Valor a transferir",
      copy: "Copiar",
      copied: "Copiado!",
      confirmBooking: "Já fiz o pagamento — confirmar agendamento",
      processing: "Confirmando seu agendamento…",
      paymentNote:
        "Seu agendamento é confirmado após a identificação do pagamento — geralmente em poucas horas.",
      successTitle: "Seu horário está reservado! 💙",
      successMessage:
        "Obrigada por confiar a sua história a mim. Assim que o pagamento for identificado, você receberá um e-mail de confirmação com o link da videochamada.",
      successDetail: "Estou ansiosa para te conhecer.",
      bookAnother: "Agendar outra sessão",
      fillAllFields: "Por favor, preencha todos os campos para continuar.",
    },
    footer: {
      tagline:
        "Psicanálise com acolhimento — em português, inglês e espanhol, onde você estiver.",
      contact: "Contato",
      quickLinks: "Links rápidos",
      social: "Me acompanhe",
      disclaimer:
        "Este site não oferece atendimento de emergência. Em caso de crise, procure os serviços de emergência da sua região.",
      rights: "Todos os direitos reservados.",
    },
  },

  es: {
    nav: {
      about: "Sobre mí",
      specialties: "Especialidades",
      content: "Contenido",
      testimonials: "Testimonios",
      faq: "Preguntas",
      book: "Reservas",
      bookCta: "Reservar sesión",
    },
    hero: {
      badge: "Psicoanálisis · Sesiones online para todo el mundo",
      title1: "Un espacio cálido para comprender",
      title2: "tu propia historia.",
      subtitle:
        "Soy Gabrielle Firmino, psicoanalista, y acompaño a personas en distintos países — en temas como relaciones, inmigración, familia, amor, autoestima, dinero y lo femenino. Estés donde estés, este es tu lugar.",
      ctaPrimary: "Reservar mi sesión",
      ctaSecondary: "Conocerme mejor",
      languagesLabel: "Sesiones en",
      locationNote: "Online · Atendiendo en Europa, América y más allá",
      role: "Psicoanalista",
    },
    about: {
      label: "Sobre mí",
      title: "Hola, soy Gabrielle — qué bueno tenerte aquí.",
      p1: "Creo que cada persona lleva una historia que merece ser escuchada con cuidado. Como psicoanalista, mi trabajo es caminar a tu lado mientras descubres los sentidos detrás de lo que sientes, repites y sueñas.",
      p2: "Viviendo entre culturas, entiendo profundamente las capas emocionales de la inmigración — la nostalgia, la reinvención, el coraje de empezar de nuevo. Por eso mi práctica es internacional: atiendo en español, portugués e inglés, incluso a quienes viven en Alemania y en toda Europa.",
      p3: "Mi enfoque es amable y sin prisa. Aquí no hay juicio — solo un espacio seguro y cálido donde tu historia puede, por fin, respirar.",
      highlights: [
        "Sesiones online en 3 idiomas",
        "Experiencia internacional con inmigrantes",
        "Un espacio cálido y sin juicios",
        "Enfoque en lo femenino y la autoestima",
      ],
      photoIntro: "Hola, soy",
      photoSticker: "Conoce a tu psicoanalista.",
    },
    specialties: {
      label: "Especialidades",
      title: "Temas que podemos explorar juntas(os)",
      subtitle:
        "Cada camino es único. Estas son las áreas en las que puedo acompañarte más profundamente.",
      items: [
        {
          title: "Relaciones",
          description:
            "Comprender los patrones que repites en el amor y la amistad, y construir vínculos más sanos.",
        },
        {
          title: "Inmigración",
          description:
            "El viaje emocional de vivir lejos de casa — el duelo, la identidad, la pertenencia y la reinvención.",
        },
        {
          title: "Familia",
          description:
            "Sanar heridas familiares y comprender la herencia emocional que atraviesa generaciones.",
        },
        {
          title: "Amor & Autoestima",
          description:
            "Aprender a mirarte con amabilidad y a recibir el amor que mereces.",
        },
        {
          title: "Dinero & Emociones",
          description:
            "Explorar tu relación emocional con el dinero, la escasez, la abundancia y tu propio valor.",
        },
        {
          title: "Lo Femenino",
          description:
            "Un espacio para explorar la feminidad, los ciclos, el deseo y la fuerza de lo femenino en tu vida.",
        },
      ],
    },
    content: {
      label: "Contenido",
      title: "Sigamos cerca — incluso entre sesiones",
      subtitle:
        "Comparto reflexiones sobre psicoanálisis y la vida emocional cotidiana. Ven a encontrarme donde te sientas en casa.",
      tiktok: {
        title: "TikTok",
        description:
          "Videos cortos sobre psicoanálisis, relaciones y las emociones de vivir en el extranjero.",
        cta: "Ver en TikTok",
      },
      instagram: {
        title: "Instagram",
        description:
          "Reflexiones diarias, reels y una mirada cercana a mi trabajo y rutina como analista.",
        cta: "Seguir en Instagram",
      },
      medium: {
        title: "Medium",
        description:
          "Artículos en profundidad sobre lo femenino, la autoestima, la familia y la vida interior.",
        cta: "Leer en Medium",
      },
    },
    testimonials: {
      label: "Lo que dicen",
      title: "Palabras de personas que tuve el honor de acompañar",
      subtitle: "Cada historia es única — estas son algunas, compartidas con permiso.",
      refs: ["Clientes en 10+ países", "Sesiones en 3 idiomas", "100% online"],
      items: [
        {
          name: "Mariana S.",
          location: "Berlín, Alemania",
          text: "Vivir en el extranjero me estaba rompiendo en silencio. Gabrielle me ayudó a nombrar lo que sentía por primera vez. Nuestras sesiones se volvieron mi lugar seguro en un país extranjero.",
        },
        {
          name: "Sofía R.",
          location: "Madrid, España",
          text: "Llegué queriendo arreglar mi relación y terminé encontrándome conmigo misma. Gabrielle tiene el don raro de escuchar sin juzgar.",
        },
        {
          name: "Emily W.",
          location: "Londres, Reino Unido",
          text: "El paquete mensual convirtió la terapia en un hábito real en mi vida. Reservar todo de una vez eliminó todas las excusas — y la constancia lo cambió todo.",
        },
        {
          name: "Camila T.",
          location: "Lisboa, Portugal",
          text: "Trabajar mi relación con el dinero en el análisis fue inesperado y transformador. Entendí que mi escasez era emocional, no financiera.",
        },
        {
          name: "Ana Luiza M.",
          location: "São Paulo, Brasil",
          text: "Después de años poniendo a todos primero, estoy aprendiendo a ocupar mi espacio. El trabajo de Gabrielle con lo femenino tocó algo muy profundo en mí.",
        },
        {
          name: "Valentina G.",
          location: "Buenos Aires, Argentina",
          text: "Poder hacer análisis en mi propio idioma viviendo tan lejos es un regalo. Siempre salgo de las sesiones más liviana y más entera.",
        },
      ],
    },
    faq: {
      label: "Preguntas frecuentes",
      title: "Preguntas frecuentes",
      subtitle:
        "Todo lo que te gustaría saber antes de nuestra primera sesión — y si falta algo, solo escríbeme.",
      items: [
        {
          q: "¿Cuál es la diferencia entre psicoanálisis y terapia?",
          a: "La terapia suele enfocarse en aliviar un síntoma específico o resolver un problema del presente. El psicoanálisis va más profundo: escucha tu inconsciente — los patrones que repites, los sueños, los actos fallidos — para entender las raíces de lo que sientes. Es un camino de autoconocimiento que transforma no solo un síntoma, sino tu relación con tu propia historia.",
        },
        {
          q: "¿Cómo funciona el psicoanálisis?",
          a: "En las sesiones estás invitada(o) a hablar libremente de lo que venga a tu mente — sin guion y sin juicio. A través de esa escucha abierta, descubrimos juntas(os) los sentidos detrás de lo que sientes, repites y sueñas. Con el tiempo, lo que era confuso empieza a tener sentido, y nuevas formas de vivir se vuelven posibles.",
        },
        {
          q: "¿Cómo funcionan las sesiones online?",
          a: "Las sesiones son por videollamada, en español, portugués o inglés. Solo necesitas un lugar tranquilo y una conexión estable. Después de reservar, recibes el enlace de la videollamada por correo. El análisis online es tan profundo y cálido como el presencial — estés donde estés.",
        },
        {
          q: "¿Con qué frecuencia debo tener sesiones?",
          a: "La mayoría de las personas comienza con una sesión por semana — la constancia es lo que hace que el proceso se profundice. Por eso existe el paquete mensual de 4 sesiones. Pero cada camino es único: podemos encontrar juntas(os) el ritmo que se adapta a tu momento y a tu vida.",
        },
        {
          q: "¿Qué métodos de pago aceptan?",
          a: "En Brasil, el pago se hace vía PIX. En Europa y en los demás países, por transferencia bancaria internacional (IBAN). La moneda del pago depende del país donde vives: reales para quienes residen en Brasil y euros para quienes residen fuera. El sitio muestra la opción correcta automáticamente, y todos los datos aparecen al reservar.",
        },
        {
          q: "Necesito una sesión urgente. ¿Qué hago?",
          a: "Escríbeme directamente al correo {email} contándome brevemente lo que está pasando. Yo misma encontraré un horario para ti lo antes posible — incluso fuera de la agenda que muestra este sitio.",
        },
        {
          q: "¿Cómo sé si el psicoanálisis es para mí?",
          a: "Si sientes que algo se repite en tu vida — en el amor, en la familia, en tu relación con el dinero o contigo misma(o) — y quieres entenderlo en lugar de solo soportarlo, el psicoanálisis puede ser un camino poderoso. La mejor forma de descubrirlo es vivir una primera sesión, sin compromiso de continuar.",
        },
      ],
    },
    booking: {
      label: "Reservas",
      title: "Elige un momento que sea solo tuyo",
      subtitle:
        "Elige una fecha en mi calendario, define la hora y confirma el pago — todo en un solo lugar. Te estaré esperando.",
      stepPlan: "Plan",
      stepSchedule: "Agenda",
      stepPayment: "Pago",
      single: {
        title: "Sesión individual",
        description: "Una sesión online, a tu ritmo.",
        features: ["Online por videollamada", "ES · PT · EN", "Tú eliges la fecha y la hora"],
      },
      package: {
        title: "Paquete mensual",
        badge: "Más práctico",
        description:
          "Cuatro sesiones reservadas de una vez — mismo precio por sesión, un solo pago.",
        features: [
          "4 sesiones online",
          "Reserva todas las fechas de una vez",
          "Un solo pago",
          "Mismo precio por sesión",
        ],
      },
      perSession: "por sesión",
      choosePlan: "Continuar con este plan",
      selectDateSingle: "Elige tu fecha",
      selectDatePackage: "Elige tus 4 fechas",
      selectedDates: "Fechas seleccionadas",
      selectTime: "Elige la hora",
      timezoneNote: "Horarios en hora de Europa Central (CET) · Mar–Jue",
      continue: "Continuar",
      back: "Volver",
      summary: "Resumen",
      plan: "Plan",
      dates: "Fecha(s)",
      total: "Total",
      yourDetails: "Tus datos",
      name: "Nombre completo",
      namePlaceholder: "Tu nombre",
      email: "Correo electrónico",
      emailPlaceholder: "tu@email.com",
      cpf: "CPF",
      cpfPlaceholder: "000.000.000-00",
      country: "País de residencia",
      countryPlaceholder: "ej.: España",
      sessionLanguage: "Idioma de la sesión",
      brLimitNote:
        "Disponibilidad limitada: reservo solo 8 lugares de mi agenda para residentes en Brasil — los demás son exclusivos para quienes viven en el extranjero.",
      payment: "Pago",
      pixTitle: "Paga con PIX",
      pixInstructions:
        "Haz un PIX por el importe total a la clave de abajo y luego confirma tu reserva. Tus horarios quedan reservados y recibirás el correo de confirmación en cuanto se identifique el pago.",
      pixKeyLabel: "Clave PIX (CPF)",
      transferTitle: "Paga por transferencia bancaria (SEPA/IBAN)",
      transferInstructions:
        "Haz una transferencia por el importe total con los datos de abajo y luego confirma tu reserva. Tus horarios quedan reservados y recibirás el correo de confirmación en cuanto se identifique el pago.",
      accountHolderLabel: "Titular de la cuenta",
      ibanLabel: "IBAN",
      bicLabel: "BIC/SWIFT",
      amountLabel: "Importe a transferir",
      copy: "Copiar",
      copied: "¡Copiado!",
      confirmBooking: "Ya envié el pago — confirmar reserva",
      processing: "Confirmando tu reserva…",
      paymentNote:
        "Tu reserva se confirma después de identificar el pago — normalmente en pocas horas.",
      successTitle: "¡Tu horario está reservado! 💙",
      successMessage:
        "Gracias por confiarme tu historia. En cuanto se identifique el pago, recibirás un correo de confirmación con el enlace de la videollamada.",
      successDetail: "Tengo muchas ganas de conocerte.",
      bookAnother: "Reservar otra sesión",
      fillAllFields: "Por favor, completa todos los campos para continuar.",
    },
    footer: {
      tagline:
        "Psicoanálisis con calidez — en español, portugués e inglés, estés donde estés.",
      contact: "Contacto",
      quickLinks: "Enlaces rápidos",
      social: "Sígueme",
      disclaimer:
        "Este sitio no ofrece atención de emergencia. Si estás en crisis, contacta los servicios de emergencia de tu zona.",
      rights: "Todos los derechos reservados.",
    },
  },
};
