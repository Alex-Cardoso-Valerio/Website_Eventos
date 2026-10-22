import {
  Heart,
  Clock,
  Smile,
  Sparkles,
  Palette,
  GlassWater,
  Building2,
  CalendarCheck,
  ShieldCheck,
  Music,
  PartyPopper,
  Wine,
  Camera,
  Layers,
  Award,
  Flame,
} from "lucide-react";

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const STATS = [
  { icon: Heart, value: "650+", label: "Celebrações Marcantes" },
  { icon: Clock, value: "12+", label: "Anos Criando Festas" },
  { icon: Smile, value: "100%", label: "Momentos Inesquecíveis" },
  { icon: Sparkles, value: "Até 05h", label: "Festas Pela Madrugada" },
];

export const SALAO_HIGHLIGHTS = [
  {
    title: "Salão Nobre Principal",
    capacity: "Até 1.000 convidados",
    description: "Pé-direito duplo de 7 metros com imponentes lustres de cristal Baccarat, iluminação indireta dimerizável e climatização inteligente para noites de pura sofisticação.",
    image: img("photo-1519167758481-83f550bb49b3", 900),
    tags: ["Lustres de Cristal", "Pé-direito 7m", "Climatizado"],
  },
  {
    title: "Pista de Dança & Iluminação Cênica Club",
    capacity: "Até 600 na pista",
    description: "Grid computadorizado de moving heads, painéis de LED de ultra definição, sonorização line-array com isolamento acústico para vibrar até a madrugada.",
    image: img("photo-1516450360452-9312f5e86fc7", 900),
    tags: ["Moving Lights", "Painel de LED", "Som de Alta Fidelidade"],
  },
  {
    title: "Bar Central Monumental & Cocktails",
    capacity: "Área de Atendimento 360°",
    description: "Balcão nobre em mármore retroiluminado com bartenders performáticos, carta de drinks autorais e serviço de champanhe gelado a noite toda.",
    image: img("photo-1514362545857-3bc16c4c7d1b", 900),
    tags: ["Mixologia Show", "Balcão Iluminado", "Drinks Autorais"],
  },
  {
    title: "Mezanino VIP & Camarote Lounge",
    capacity: "Até 200 convidados",
    description: "Ambiente reservado com vista panorâmica para a pista de dança e o salão nobre, poltronas em veludo, bistrôs dourados e bar privativo.",
    image: img("photo-1511795409834-ef04bbd61622", 900),
    tags: ["Vista Panorâmica", "Camarote Exclusivo", "Lounge Noturno"],
  },
  {
    title: "Camarim & Sala de Apoio dos Anfitriões",
    capacity: "Privativo & Climatizado",
    description: "Espaço intimista com espelho profissional iluminado para make & hair, poltronas para descanso e apoio para troca de figurino durante a festa.",
    image: img("photo-1582719478250-c89cae4dc85b", 900),
    tags: ["Espelho Make Camarim", "Climatizado", "Privacidade Total"],
  },
  {
    title: "Cozinha Industrial & Apoio Gastronômico",
    capacity: "Produção de Alta Capacidade",
    description: "Cozinha com fluxo contínuo para garantir que jantares à francesa, ilhas de risotos e finger foods sejam servidos com velocidade e precisão.",
    image: img("photo-1556910103-1c02745aae4d", 900),
    tags: ["Padrão Internacional", "Serviço Rápido", "Alta Gastronomia"],
  },
];

export const SERVICOS_LIST = [
  {
    id: "assessoria",
    icon: Sparkles,
    title: "Assessoria & Planejamento Festivo 360°",
    shortDesc: "Cuidamos de cada detalhe, do cronograma até o último brinde da madrugada.",
    fullDesc:
      "Nossa equipe de assessoria festiva desenha um roteiro dinâmico e empolgante. Gerenciamos fornecedores de som, luz, bar, atrativos da pista, gastronomia e gestão de confirmações de presença.",
    items: [
      "Planejamento com cronograma reverso e dinâmica da festa",
      "Seleção dos melhores DJs, bandas e atrações de pista",
      "Coordenação de horários de abertura de buffet e bar",
      "Gestão de confirmação de presença (R.S.V.P ativo)",
    ],
  },
  {
    id: "cenografia-noturna",
    icon: Palette,
    title: "Cenografia Noturna & Iluminação Cênica",
    shortDesc: "Projetos 3D de impacto, lustres majestosos e ambientação iluminada.",
    fullDesc:
      "Criamos cenários noturnos deslumbrantes com contrastes marcantes entre sombras aconchegantes e feixes dourados. Caminhos de velas, lustres de cristal reluzentes, estruturas metálicas e arranjos florais exuberantes.",
    items: [
      "Iluminação arquitetural e cênica computadorizada",
      "Arranjos florais nobres com folhagens e orquídeas",
      "Mobiliário festivo de luxo (bistrôs, lounges, cadeiras tiffany)",
      "Túneis de luz, neon e cenários altamente instagramáveis",
    ],
  },
  {
    id: "buffet-noturno",
    icon: GlassWater,
    title: "Gastronomia Festiva & Bar de Mixologia",
    shortDesc: "Ilhas gastronômicas ativas, finger foods quentes e carta de drinks premiada.",
    fullDesc:
      "Uma celebração memorável pede comida deliciosa a noite inteira. Oferecemos jantares empratados de gala, ilhas de antepastos e risotos preparados ao vivo e 'lanchinho da madrugada' servido na pista de dança.",
    items: [
      "Open Bar Premium com gin, vodka importada e drinks autorais",
      "Ilhas gastronômicas com atendimento ininterrupto",
      "Finger foods sofisticados e 'Menu Madrugada' na pista",
      "Degustação completa para aprovação do cardápio",
    ],
  },
  {
    id: "audiovisual",
    icon: Music,
    title: "Sonorização Profissional & Pista de Dança",
    shortDesc: "Isolamento acústico que permite música vibrante até às 05h da manhã.",
    fullDesc:
      "O espaço conta com tratamento acústico de estúdio, permitindo que a festa atinja o ápice da energia sem restrições. Painéis de LED para retrospectivas, clipes e apresentações de DJs e bandas.",
    items: [
      "Sistema de som line-array balanceado e potente",
      "Painel de LED de alta definição para imagens e efeitos",
      "Efeitos cênicos de pista (máquinas de fumaça, laser e sparklers)",
      "Rider completo e camarim para recepção de atrações musicais",
    ],
  },
  {
    id: "seguranca-conforto",
    icon: ShieldCheck,
    title: "Segurança, Gerador Próprio & Limpeza Contínua",
    shortDesc: "Gerador automático de 500kVA, brigadistas e equipe de apoio dedicada.",
    fullDesc:
      "Celebre com total tranquilidade. Dispomos de gerador de energia automático que mantém 100% da iluminação, som e ar-condicionado operando sem falhas, além de equipe de portaria e camareiras de toalete contínuas.",
    items: [
      "Gerador próprio automático de 500 kVA com redundância total",
      "Equipe profissional de recepção, controle de portaria e segurança",
      "Manutenção e higienização contínua dos toaletes durante a festa",
      "Ambiente totalmente climatizado com controle térmico dinâmico",
    ],
  },
  {
    id: "coordenacao",
    icon: CalendarCheck,
    title: "Coordenação de Pista & Cerimonial do Dia",
    shortDesc: "Equipe com comunicação em tempo real conduzindo cada momento festivo.",
    fullDesc:
      "Nossa equipe comanda a festa nos bastidores: recepção de convidados, entrada triunfal dos anfitriões, cortes de bolo, abertura de pista e distribuição de adereços luminosos.",
    items: [
      "Acompanhamento presencial da montagem até o encerramento da festa",
      "Coordenação da entrada dos anfitriões e homenagens",
      "Sincronização entre bar, buffet e atrações musicais",
      "Fechamento cuidadoso e entrega de pertences ao final da noite",
    ],
  },
];

export const DECORACOES_STYLES = [
  {
    id: "glam-noturno",
    title: "Glam Noturno & Cristais",
    subtitle: "A imponência da noite com brilho e sofisticação",
    desc: "Predomínio de tons escuros sofisticados, preto ônix, dourado reluzente e fendi, valorizados por cascatas de lustres de cristal, castiçais altos de velas acesas e arranjos nobres de orquídeas e rosas champanhe.",
    image: img("photo-1519167758481-83f550bb49b3", 800),
    palette: ["#0B0E0D", "#D9B98B", "#F5EFE6", "#2A3630"],
    features: ["Lustres de Cristal Baccarat", "Caminho de Velas Aromatizadas", "Castiçais em Ouro e Cristal"],
  },
  {
    id: "modern-club",
    title: "Contemporâneo Neon & Pista Imersiva",
    subtitle: "Energia vibrante, tubos de LED e modernidade",
    desc: "Perfeito para festas de 15 anos marcantes, formaturas e comemorações jovens. Mesas espelhadas pretas, iluminação linear dinâmica em LED, lounges confortáveis em veludo escuro e pontos instagramáveis de neon.",
    image: img("photo-1516450360452-9312f5e86fc7", 800),
    palette: ["#0F1513", "#D9B98B", "#8B5A2B", "#FFFFFF"],
    features: ["Tubos de LED Dinâmicos", "Mesas Espelhadas Negras", "Lounges em Veludo Escuro"],
  },
  {
    id: "dourado-velas",
    title: "Gala Dourado & Velas Flutuantes",
    subtitle: "Calor, acolhimento e requinte cinematográfico",
    desc: "Atmosfera intimista criada com centenas de pontos de velas, arranjos aéreos suspensos, detalhes em folha de ouro, louças com borda dourada e toalhas de linho escuro para um banquete triunfal.",
    image: img("photo-1511795409834-ef04bbd61622", 800),
    palette: ["#141A17", "#D4AF37", "#EBD5B3", "#38473F"],
    features: ["Candelabros Dourados Altos", "Centenas de Velas Acentuadas", "Louças Filetadas em Ouro"],
  },
  {
    id: "esmeralda-ouro",
    title: "Esmeralda Imperial & Veludo",
    subtitle: "Uma paleta nobre e festiva de alto luxo",
    desc: "Verde esmeralda escuro combinado com toques de madeira nobre laqueada e metais dourados. Proporciona um ambiente imponente, ideal para aniversários de gala e jantares comemorativos inesquecíveis.",
    image: img("photo-1464366400600-7168b8af9bc3", 800),
    palette: ["#0B130E", "#2C4035", "#D9B98B", "#FAF8F5"],
    features: ["Tecidos em Veludo Esmeralda", "Mobiliário Laqueado Escuro", "Design Floral Imponente"],
  },
];

export const BUFFET_MENUS = [
  {
    category: "Ilhas Gastronômicas & Antepastos",
    items: [
      {
        name: "Ilha de Queijos Nobres & Charcutaria Gourmet",
        desc: "Queijo Brie maçaricado com favo de mel silvestre, Jamón Ibérico pata negra laminado, queijo Grana Padano inteiro, terrine de figos e pães rústicos artesanais.",
      },
      {
        name: "Estação de Risotos ao Vivo na Roda de Parmesão",
        desc: "Risoto de filé mignon com funghi secchi e risoto de camarões rosa flambados no conhaque, finalizados na carcaça de queijo parmesão 24 meses.",
      },
      {
        name: "Ceviches & Tartares Refrescantes",
        desc: "Tartar de salmão com azeite de trufas brancas e ceviche de robalo no limão siciliano com chips crocantes de mandioquinha.",
      },
    ],
  },
  {
    category: "Jantar de Gala & Pratos Principais",
    items: [
      {
        name: "Tornedor de Filé Mignon ao Molho de Vinho do Porto & Trufas",
        desc: "Acompanhado de aligot aveludado de queijo Canastra e aspargos frescos grelhados na manteiga.",
      },
      {
        name: "Salmão Grelhado em Crosta de Amêndoas & Ervas Finas",
        desc: "Servido com mousseline de batata-baroa e emulsão cítrica de maracujá da caatinga.",
      },
      {
        name: "Raviolone Artesanal de Ricota Defumada & Nozes",
        desc: "Massa fresca banhada em fonduta de queijo fontina e folhas de sálvia crocantes (Opção Vegetariana Sofisticada).",
      },
    ],
  },
  {
    category: "Lanchinhos da Madrugada & Pista",
    items: [
      {
        name: "Mini Smash Burgers Gourmet com Cheddar Inglês",
        desc: "Servidos quentinhos na pista com maionese trufada e pão brioche dourado.",
      },
      {
        name: "Coxinhas de Pato Confit & Pastelzinhos de Brie com Geleia",
        desc: "Frituras artesanais servidas em embalagens individuais para recarregar as energias da dança.",
      },
      {
        name: "Churros Crocantes com Doce de Leite Viçosa",
        desc: "Mini churros passados no açúcar de canela com potinhos de doce de leite artesanal e chocolate belga.",
      },
    ],
  },
  {
    category: "Cocktails & Bar de Mixologia",
    items: [
      {
        name: "Eterna Night Celebration (Drink Exclusivo)",
        desc: "Gin artesanal botânico, infusão de flor de sabugueiro, xarope de amora, espumante brut, folhas de ouro comestíveis e bolha aromática defumada.",
      },
      {
        name: "Smoked Passion Bourbon",
        desc: "Whisky Bourbon americano envelhecido, purê artesanal de maracujá com especiarias e fumaça de canela aromática.",
      },
      {
        name: "Bar de Gin Tônica & Caipirinhas de Frutas Exóticas",
        desc: "Mais de 12 especiarias selecionadas, frutas frescas da estação, tônicas especiais e destilados de padrão premium (Tanqueray, Grey Goose, Black Label).",
      },
    ],
  },
];
