export type Lang = "en" | "pt" | "es";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export const SESSION_PRICE = 90;
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

interface Translation {
  nav: {
    about: string;
    specialties: string;
    content: string;
    testimonials: string;
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
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    highlights: string[];
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
    items: Testimonial[];
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
      price: string;
      description: string;
      features: string[];
    };
    package: {
      title: string;
      price: string;
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
    sessionLanguage: string;
    payment: string;
    cardName: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
    payNow: string;
    processing: string;
    securityNote: string;
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
      label: "Testimonials",
      title: "Words from people I've had the honor to accompany",
      subtitle: "Every story is unique — these are some of them, shared with permission.",
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
    booking: {
      label: "Booking",
      title: "Choose a moment that is just for you",
      subtitle:
        "Pick a date in my calendar, choose your time, and complete your payment — all in one place. I'll be waiting for you.",
      stepPlan: "Plan",
      stepSchedule: "Schedule",
      stepPayment: "Payment",
      single: {
        title: "Single session",
        price: "€90",
        description: "One 50-minute online session, at your pace.",
        features: ["50-minute session", "Online via video call", "EN · PT · ES"],
      },
      package: {
        title: "Monthly package",
        price: "€360",
        badge: "Most convenient",
        description:
          "Four sessions booked at once — same price per session, one single payment.",
        features: [
          "4 sessions of 50 minutes",
          "Book all dates at once",
          "One single payment",
          "Same price per session (€90)",
        ],
      },
      perSession: "per session",
      choosePlan: "Continue with this plan",
      selectDateSingle: "Choose your date",
      selectDatePackage: "Choose your 4 dates",
      selectedDates: "Selected dates",
      selectTime: "Choose your time",
      timezoneNote: "Times shown in Central European Time (CET) · Mon–Fri",
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
      sessionLanguage: "Session language",
      payment: "Payment",
      cardName: "Name on card",
      cardNumber: "Card number",
      expiry: "Expiry",
      cvc: "CVC",
      payNow: "Confirm and pay",
      processing: "Processing payment…",
      securityNote: "Secure payment · Your details are encrypted",
      successTitle: "Your session is booked! 💙",
      successMessage:
        "Thank you for trusting me with your story. You'll receive a confirmation email with the video call link shortly.",
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
      label: "Depoimentos",
      title: "Palavras de pessoas que tive a honra de acompanhar",
      subtitle: "Cada história é única — estas são algumas delas, compartilhadas com permissão.",
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
    booking: {
      label: "Agendamento",
      title: "Escolha um momento que seja só seu",
      subtitle:
        "Escolha uma data no meu calendário, defina o horário e finalize o pagamento — tudo em um só lugar. Estarei te esperando.",
      stepPlan: "Plano",
      stepSchedule: "Agenda",
      stepPayment: "Pagamento",
      single: {
        title: "Sessão avulsa",
        price: "€90",
        description: "Uma sessão online de 50 minutos, no seu ritmo.",
        features: ["Sessão de 50 minutos", "Online por videochamada", "PT · EN · ES"],
      },
      package: {
        title: "Pacote mensal",
        price: "€360",
        badge: "Mais prático",
        description:
          "Quatro sessões agendadas de uma vez — mesmo valor por sessão, um único pagamento.",
        features: [
          "4 sessões de 50 minutos",
          "Agende todas as datas de uma vez",
          "Um único pagamento",
          "Mesmo valor por sessão (€90)",
        ],
      },
      perSession: "por sessão",
      choosePlan: "Continuar com este plano",
      selectDateSingle: "Escolha a sua data",
      selectDatePackage: "Escolha as suas 4 datas",
      selectedDates: "Datas selecionadas",
      selectTime: "Escolha o horário",
      timezoneNote: "Horários no fuso da Europa Central (CET) · Seg–Sex",
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
      sessionLanguage: "Idioma da sessão",
      payment: "Pagamento",
      cardName: "Nome no cartão",
      cardNumber: "Número do cartão",
      expiry: "Validade",
      cvc: "CVC",
      payNow: "Confirmar e pagar",
      processing: "Processando pagamento…",
      securityNote: "Pagamento seguro · Seus dados são criptografados",
      successTitle: "Sua sessão está agendada! 💙",
      successMessage:
        "Obrigada por confiar a sua história a mim. Em breve você receberá um e-mail de confirmação com o link da videochamada.",
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
      label: "Testimonios",
      title: "Palabras de personas que tuve el honor de acompañar",
      subtitle: "Cada historia es única — estas son algunas, compartidas con permiso.",
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
    booking: {
      label: "Reservas",
      title: "Elige un momento que sea solo tuyo",
      subtitle:
        "Elige una fecha en mi calendario, define la hora y completa el pago — todo en un solo lugar. Te estaré esperando.",
      stepPlan: "Plan",
      stepSchedule: "Agenda",
      stepPayment: "Pago",
      single: {
        title: "Sesión individual",
        price: "€90",
        description: "Una sesión online de 50 minutos, a tu ritmo.",
        features: ["Sesión de 50 minutos", "Online por videollamada", "ES · PT · EN"],
      },
      package: {
        title: "Paquete mensual",
        price: "€360",
        badge: "Más práctico",
        description:
          "Cuatro sesiones reservadas de una vez — mismo precio por sesión, un solo pago.",
        features: [
          "4 sesiones de 50 minutos",
          "Reserva todas las fechas de una vez",
          "Un solo pago",
          "Mismo precio por sesión (€90)",
        ],
      },
      perSession: "por sesión",
      choosePlan: "Continuar con este plan",
      selectDateSingle: "Elige tu fecha",
      selectDatePackage: "Elige tus 4 fechas",
      selectedDates: "Fechas seleccionadas",
      selectTime: "Elige la hora",
      timezoneNote: "Horarios en hora de Europa Central (CET) · Lun–Vie",
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
      sessionLanguage: "Idioma de la sesión",
      payment: "Pago",
      cardName: "Nombre en la tarjeta",
      cardNumber: "Número de tarjeta",
      expiry: "Vencimiento",
      cvc: "CVC",
      payNow: "Confirmar y pagar",
      processing: "Procesando el pago…",
      securityNote: "Pago seguro · Tus datos están cifrados",
      successTitle: "¡Tu sesión está reservada! 💙",
      successMessage:
        "Gracias por confiarme tu historia. Pronto recibirás un correo de confirmación con el enlace de la videollamada.",
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
