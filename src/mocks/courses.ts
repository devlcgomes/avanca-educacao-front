import financasImg from '@/assets/financas.jpeg';
import gestaoPessoasImg from '@/assets/gestaoPessoas.jpeg';
import marketingDigitalImg from '@/assets/marketingDigital.jpeg';
import socialMediaImg from '@/assets/socialMedia.jpeg';
import atendimentoClienteImg from '@/assets/atendimentoCliente.jpeg';

export type Course = {
  id: number;
  title: string;
  description: string;
  author: string;
  level: string;
  duration: string;
  originalPrice: number;
  price: string;
  image: string;
  category: string;
  tags: string[];
  rating: number;
  students: number;
  isCompleted?: boolean;
  completedAt?: string; // Nova propriedade para data de conclusão
};

export const catalogCourses: Course[] = [
  {
    id: 1,
    title: "Marketing Digital",
    description: "Aprenda estratégias avançadas de marketing digital",
    author: "Ana Silva",
    level: "Intermediário",
    duration: "40h",
    originalPrice: 100,
    price: "$100",
    image: marketingDigitalImg,
    category: "Marketing",
    tags: ["Digital", "Marketing"],
    rating: 4.5,
    students: 1000,
    isCompleted: true,
    completedAt: "15 Jan 2024"
  },
];

export const coursesData = {
  inProgress: [
    {
      id: 1,
      title: "Marketing Digital",
      description: "Aprenda estratégias avançadas de marketing digital",
      thumbnail: marketingDigitalImg,
      progress: 75,
      nextClass: "Email Marketing",
      instructor: {
        name: "Ana Silva",
        role: "Marketing Specialist",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      lastAccess: "2 dias atrás",
      duration: "40h",
      deadline: "15 Jan 2024",
      totalLessons: 24,
      completedLessons: 18,
      modules: [
        {
          id: 1,
          title: "Fundamentos do Marketing Digital",
          duration: "45min",
          lessons: [
            {
              id: 1,
              title: "Introdução ao Marketing Digital",
              duration: "10 min",
              completed: true,
              active: false
            },
            {
              id: 2,
              title: "Estratégias de Marketing",
              duration: "15 min",
              completed: true,
              active: false
            },
            {
              id: 3,
              title: "Email Marketing",
              duration: "12 min",
              completed: false,
              active: true
            },
            {
              id: 4,
              title: "Marketing de Conteúdo",
              duration: "8 min",
              completed: false,
              active: false
            }
          ]
        },
        {
          id: 2,
          title: "Marketing nas Redes Sociais",
          duration: "1h 30min",
          lessons: [
            {
              id: 5,
              title: "Facebook Ads",
              duration: "20 min",
              completed: false,
              active: false
            },
            {
              id: 6,
              title: "Instagram Marketing",
              duration: "25 min",
              completed: false,
              active: false
            },
            {
              id: 7,
              title: "LinkedIn para Negócios",
              duration: "15 min",
              completed: false,
              active: false
            },
            {
              id: 8,
              title: "TikTok Marketing",
              duration: "30 min",
              completed: false,
              active: false
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Gestão Financeira",
      description: "Fundamentos de gestão financeira para negócios",
      thumbnail: financasImg,
      progress: 45,
      nextClass: "Análise de Investimentos",
      instructor: {
        name: "Carlos Santos",
        role: "Financial Advisor",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg"
      },
      lastAccess: "1 semana atrás",
      duration: "32h",
      deadline: "22 Jan 2024",
      totalLessons: 20,
      completedLessons: 9,
      modules: [
        // ... módulos do curso de Gestão Financeira
      ]
    }
  ],
  completed: [
    {
      id: 3,
      title: "Social Media",
      description: "Gestão de redes sociais para empresas",
      thumbnail: socialMediaImg,
      completedDate: "10 Dez 2023",
      instructor: "Marina Costa",
      duration: "28h",
      certificate: "https://certificate-url.com"
    }
  ],
  recommended: [
    {
      id: 4,
      title: "Gestão de Pessoas",
      description: "Desenvolvimento de liderança e gestão de equipes",
      thumbnail: gestaoPessoasImg,
      duration: "36h",
      instructor: "Pedro Oliveira",
      prerequisites: ["Marketing Digital", "Gestão Financeira"],
      level: "Intermediário",
      startDate: "1 Fev 2024"
    },
    {
      id: 5,
      title: "Atendimento ao Cliente",
      description: "Aprenda técnicas avançadas de atendimento",
      thumbnail: atendimentoClienteImg,
      duration: "44h",
      instructor: "Juliana Lima",
      prerequisites: ["Marketing Digital"],
      level: "Avançado",
      startDate: "15 Fev 2024"
    }
  ]
}; 