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
  Zap,
  Car,
  UtensilsCrossed,
  Wine,
  Camera,
  Layers,
  Award,
} from "lucide-react";

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const STATS = [
  { icon: Heart, value: "650+", label: "Eventos Realizados" },
  { icon: Clock, value: "12+", label: "Anos de Tradição" },
  { icon: Smile, value: "100%", label: "Clientes Encantados" },
  { icon: Building2, value: "2.500m²", label: "Área Total Integrada" },
];

export const SALAO_HIGHLIGHTS = [
  {
    title: "Salão Nobre Principal",
    capacity: "Até 1.000 pessoas",
    description: "Pé-direito duplo de 7 metros com imponentes lustres de cristal Baccarat, piso em porcelanato polido e climatização inteligente.",
    image: img("photo-1519167758481-83f550bb49b3", 900),
    tags: ["Climatizado", "Pé-direito 7m", "Lustres de Cristal"],
  },
  {
    title: "Jardim & Gazebo para Cerimônias",
    capacity: "Até 400 pessoas",
    description: "Área externa arborizada com paisagismo exuberante, espelho d'água iluminado e cobertura retrátil translúcida para qualquer clima.",
    image: img("photo-1519741497674-611481863552", 900),
    tags: ["Ar Livre", "Cobertura Retrátil", "Espelho D'água"],
  },
  {
    title: "Mezanino VIP & Lounge de Convidados",
    capacity: "Até 250 pessoas",
    description: "Ambiente reservado com visão panorâmica de todo o evento, poltronas em veludo, bar privativo e acústica dedicada.",
    image: img("photo-1511795409834-ef04bbd61622", 900),
    tags: ["Vista Panorâmica", "Bar Privativo", "Lounge Sofisticado"],
  },
  {
    title: "Suíte do Anfitrião & Camarim VIP",
    capacity: "Exclusivo",
    description: "Espaço intimista com banheira de hidromassagem, camarim iluminado profissional para make & hair, closet e serviço de mordomo.",
    image: img("photo-1582719478250-c89cae4dc85b", 900),
    tags: ["Hidromassagem", "Camarim Profissional", "Serviço VIP"],
  },
  {
    title: "Cozinha Industrial de Alta Performance",
    capacity: "Produção p/ 1.500 pratos",
    description: "Equipada com fornos combinados alemães, câmaras frias e fluxo higiênico rigoroso que garante pratos servidos na temperatura ideal.",
    image: img("photo-1556910103-1c02745aae4d", 900),
    tags: ["Padrão Internacional", "Alta Capacidade", "Segurança Alimentar"],
  },
  {
    title: "Estacionamento com Valet Privativo",
    capacity: "250 vagas internas",
    description: "Portaria com segurança armada 24h, circuito fechado de câmeras e equipe profissional de manobristas com seguro total.",
    image: img("photo-1506521781263-d8422e82f27a", 900),
    tags: ["Valet Service", "Segurança Armada 24h", "250 Vagas"],
  },
];

export const SERVICOS_LIST = [
  {
    id: "assessoria",
    icon: Sparkles,
    title: "Assessoria & Planejamento 360°",
    shortDesc: "Cuidamos de cada detalhe, do cronograma inicial até a última música da noite.",
    fullDesc:
      "Nossa equipe de assessoria e cerimonial desenvolve um planejamento minucioso do seu evento. Realizamos reuniões de alinhamento, gestão financeira, seleção e acompanhamento de todos os fornecedores, ensaios e gestão de R.S.V.P.",
    items: [
      "Planejamento com cronograma reverso detalhado",
      "Indicação e negociação com os melhores fornecedores",
      "Coordenação de ensaios e alinhamento cerimonial",
      "Gestão de confirmação de presença (R.S.V.P ativo)",
    ],
  },
  {
    id: "cenografia",
    icon: Palette,
    title: "Cenografia, Decoração & Floral",
    shortDesc: "Projetos 3D personalizados, florais nobres e iluminação cênica cinematográfica.",
    fullDesc:
      "Transformamos o espaço em um cenário dos sonhos. Nossos designers florais e cenógrafos criam arranjos aéreos monumentais, gazebos exclusivos, mesas imperiais e caminhos de luz que emocionam os convidados.",
    items: [
      "Projetos conceituais e maquetes 3D personalizadas",
      "Flores nobres importadas e sazonais de produtores de elite",
      "Mobiliário de luxo (poltronas, mesas de laca, cadeiras tiffany)",
      "Velas, lustres pendentes e caminhos iluminados",
    ],
  },
  {
    id: "buffet",
    icon: GlassWater,
    title: "Buffet Autoral & Alta Gastronomia",
    shortDesc: "Menus sofisticados assinados por chefs premiados, da entrada à sobremesa.",
    fullDesc:
      "Uma jornada de sabores inesquecíveis. Oferecemos jantares empratados à francesa, ilhas temáticas contemporâneas, finger foods sofisticados e carta de drinks com mixologia molecular.",
    items: [
      "Ilhas gastronômicas ao vivo com risotos e massas frescas",
      "Jantares empratados com cortes nobres e peixes frescos",
      "Open Bar premium com destilados importados e drinks autorais",
      "Degustação completa para anfitriões e família",
    ],
  },
  {
    id: "audiovisual",
    icon: Music,
    title: "Sonorização, Luz & Painéis de LED",
    shortDesc: "Estrutura técnica digna de grandes shows com acústica perfeita.",
    fullDesc:
      "O salão possui tratamento acústico completo, rider técnico de áudio de alta fidelidade, moving lights computadorizados e painéis de LED de ultra definição para vídeos e transmissões ao vivo.",
    items: [
      "Sistema de som line-array calibrado para o salão",
      "Painel de LED de alta resolução para vídeos e retrospectivas",
      "Iluminação computadorizada para pista e cênica arquitetural",
      "Rider completo para bandas famosas e DJs renomados",
    ],
  },
  {
    id: "seguranca-infra",
    icon: ShieldCheck,
    title: "Segurança, Conforto & Infraestrutura",
    shortDesc: "Geradores de 500kVA, brigadistas, ambulatório e limpeza contínua.",
    fullDesc:
      "Garantimos que você e seus convidados desfrutem da festa com máxima tranquilidade. Contamos com gerador de energia próprio que supre 100% da carga do salão em milissegundos.",
    items: [
      "Gerador de energia redundante automático de 500 kVA",
      "Equipe de seguranças treinados e recepção informatizada",
      "Equipe de camareiras e manutenção contínua dos toaletes",
      "Ambulatório com socorrista e convênio médico emergencial",
    ],
  },
  {
    id: "coordenacao",
    icon: CalendarCheck,
    title: "Coordenação & Cerimonial do Dia",
    shortDesc: "Equipe com rádio-comunicadores cuidando da cronologia do evento.",
    fullDesc:
      "No grande dia, nossa equipe de coordenadores assume a batuta. Recebemos fornecedores, conferimos montagens, orientamos os convidados e garantimos que o roteiro transcorra no ritmo exato.",
    items: [
      "Recepção de fornecedores a partir da madrugada de montagem",
      "Conferência de itens contratados e controle de qualidade",
      "Guia e suporte exclusivo aos noivos/anfitriões no camarim",
      "Fechamento e contagem segura de sobras e presentes",
    ],
  },
];

export const DECORACOES_STYLES = [
  {
    id: "classico",
    title: "Clássico Imperial & Cristais",
    subtitle: "A elegância atemporal que nunca sai de moda",
    desc: "Cores predominantes em branco, off-white e fendi, combinadas com castiçais de prata e ouro, arranjos densos de orquídeas phalaenopsis, rosas importadas e caminhos de lustres de cristal.",
    image: img("photo-1519225421980-715cb0215aed", 800),
    palette: ["#FFFFFF", "#F3EDE2", "#D4AF37", "#1A2421"],
    features: ["Orquídeas e Rosas Nobres", "Lustres de Cristal", "Castiçais em Ouro Velho"],
  },
  {
    id: "botanico",
    title: "Rústico Chic & Botânico Moderno",
    subtitle: "O aconchego da natureza com sofisticação",
    desc: "Harmonia sublime entre madeira nobre maciça, tecidos naturais em linho puro, folhagens verdes exuberantes como costela-de-adão, luzes quentes de filamento e velas aromáticas.",
    image: img("photo-1478146896981-b80fe463b330", 800),
    palette: ["#2C3B32", "#E8D8C3", "#8B5A2B", "#FAF8F5"],
    features: ["Madeira Maciça de Demolição", "Luzes de Filamento de Carbono", "Arranjos Aéreos Vivos"],
  },
  {
    id: "romantico",
    title: "Romântico Pastel & Rosé Gold",
    subtitle: "Suavidade poética e delicadeza em cada ângulo",
    desc: "Tons aquarelados em rosa chá, pêssego, lavanda e toques sutis de dourado e rosé gold. Mesas com louças filetadas a ouro, guardanapos de linho e arranjos florais orgânicos e esvoaçantes.",
    image: img("photo-1469371670807-013ccf25f16a", 800),
    palette: ["#F9ECE8", "#E6C2BF", "#C49A82", "#2B3530"],
    features: ["Tons Blush & Aquarelados", "Louças Filetadas em Ouro", "Design Floral Orgânico"],
  },
  {
    id: "contemporaneo",
    title: "Contemporâneo Glam & Iluminação Cênica",
    subtitle: "Modernidade, tecnologia e impacto visual",
    desc: "Ideal para formaturas, festas de 15 anos e eventos corporativos. Mesas espelhadas, estruturas metálicas pretas ou douradas, tubos de LED dinâmicos e túneis de luz imersivos para fotos impactantes.",
    image: img("photo-1516450360452-9312f5e86fc7", 800),
    palette: ["#0F1513", "#D9B98B", "#8B7355", "#EBE7DF"],
    features: ["Mesas Espelhadas", "Cenografia Dinâmica de LED", "Túneis de Luz Imersivos"],
  },
];

export const BUFFET_MENUS = [
  {
    category: "Entradas & Ilhas Gastronômicas",
    items: [
      {
        name: "Ilha de Antepastos Nobres & Queijos Europeus",
        desc: "Brie folhado com favo de mel silvestre, Jamón Ibérico pata negra, queijo Grana Padano, terrine de figos frescos e pães artesanais de fermentação natural.",
      },
      {
        name: "Ceviche de Robalo com Leche de Tigre & Manga",
        desc: "Finas lâminas de robalo selvagem marinado no limão siciliano com cubos de manga fresca, pimenta dedo-de-moça e chips de batata-doce roxa.",
      },
      {
        name: "Mini Blinis com Salmão Curado & Caviar",
        desc: "Massa leve artesanal com sour cream aromático de endro e ovas de peixe frescas.",
      },
    ],
  },
  {
    category: "Pratos Principais (Jantar à Francesa ou Franco-Americano)",
    items: [
      {
        name: "Tornedor de Mignon em Crosta de Ervas & Molho Trufado",
        desc: "Acompanhado de aligot aveludado de queijo Canastra e mini legumes glaceados na manteiga noisette.",
      },
      {
        name: "Risoto de Camarões Rosa com Raspas de Limão Siciliano",
        desc: "Arroz carnaroli al dente cozido em caldo de mariscos nobres, finalizado com azeite extravirgem trufado e queijo parmesão 24 meses.",
      },
      {
        name: "Raviolone de Búfala com Tomates Sweet Grape & Pesto Genovês",
        desc: "Massa fresca artesanal recheada de ricota de búfala cremosa com redução aveludada de tomates tostados na lenha e manjericão fresco (Opção Vegetariana).",
      },
    ],
  },
  {
    category: "Alta Confeitaria & Sobremesas",
    items: [
      {
        name: "Mil-Folhas Caramelizado com Creme Pâtissière de Baunilha de Madagascar",
        desc: "Lâminas crocantes de massa folhada francesa com frutas vermelhas frescas e calda de frutas do bosque.",
      },
      {
        name: "Cúpula de Chocolate Belga Callebaut & Praliné de Castanhas",
        desc: "Mousse aveludada de chocolate meio amargo 70% com crocante dourado de avelãs e calda quente de caramelo salgado.",
      },
      {
        name: "Mesa Monumental de Doces & Macarons Franceses",
        desc: "Seleção com mais de 15 variedades de doces finos artesanais banhados em ouro comestível e macarons de pistache, framboesa e limão.",
      },
    ],
  },
  {
    category: "Bar de Coquetelaria Autoral & Mixologia",
    items: [
      {
        name: "Eterna Signature (Drink Exclusivo da Casa)",
        desc: "Gin artesanal botânico infusionado com chá de hibisco, xarope de lichia, limão siciliano, espumante brut rosé e bolha aromática defumada.",
      },
      {
        name: "Smoked Bourbon Passion",
        desc: "Whisky Bourbon americano envelhecido, purê artesanal de maracujá, bitter aromático e finalização em cloche com fumaça de canela.",
      },
      {
        name: "Ilha de Gin Tônica & Caipirinhas Gourmet",
        desc: "Mais de 12 especiarias selecionadas, frutas frescas da estação, água tônica artesanal e destilados premium (Vodka Grey Goose, Gin Tanqueray, Whisky Black Label).",
      },
    ],
  },
];
