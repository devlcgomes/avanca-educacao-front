import { BookOpenIcon, ClockIcon, CheckCircleIcon, ArrowRightIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

// Importando imagens
import financasImg from '@/assets/financas.jpeg';
import gestaoPessoasImg from '@/assets/gestaoPessoas.jpeg';
import marketingDigitalImg from '@/assets/marketingDigital.jpeg';
import socialMediaImg from '@/assets/socialMedia.jpeg';
import atendimentoClienteImg from '@/assets/atendimentoCliente.jpeg';
import { useState } from 'react';
import { coursesData } from '../../../mocks/courses';

const myCourses = {
  inProgress: [
    {
      id: 1,
      title: "Marketing Digital",
      description: "Aprenda estratégias avançadas de marketing digital",
      thumbnail: marketingDigitalImg,
      progress: 75,
      nextClass: "Email Marketing",
      instructor: "Ana Silva",
      lastAccess: "2 dias atrás",
      duration: "40h",
      deadline: "15 Jan 2024",
      totalLessons: 24,
      completedLessons: 18
    },
    {
      id: 2,
      title: "Gestão Financeira",
      description: "Fundamentos de gestão financeira para negócios",
      thumbnail: financasImg,
      progress: 45,
      nextClass: "Análise de Investimentos",
      instructor: "Carlos Santos",
      lastAccess: "1 semana atrás",
      duration: "32h",
      deadline: "22 Jan 2024",
      totalLessons: 20,
      completedLessons: 9
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

export default function CoursesScreen() {
  const [activeTab, setActiveTab] = useState('progress');
  const navigate = useNavigate();

  const handleContinueCourse = (courseId: number) => {
    navigate(`/dashboard/classroom/${courseId}`);
  };

  return (
    <div className="w-full p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-3">Meus Cursos</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('progress')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'progress'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Em Andamento
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'completed'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Concluídos
          </button>
          <button
            onClick={() => setActiveTab('recommended')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'recommended'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Recomendados
          </button>
        </div>
      </div>

      {/* Cursos em Andamento */}
      {activeTab === 'progress' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {coursesData.inProgress.map((course) => (
            <div key={course.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="relative h-40">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {/* Progress Circle */}
                <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-600">{course.progress}%</div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <img 
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-xs text-gray-600">{course.instructor.name}</span>
                </div>

                <h3 className="font-bold text-lg mb-1 line-clamp-1">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpenIcon className="w-4 h-4" />
                    <span>{course.completedLessons}/{course.totalLessons} aulas</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-3">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-xs text-gray-500">Próxima Aula</div>
                      <div className="text-sm font-medium line-clamp-1">{course.nextClass}</div>
                    </div>
                    <button 
                      onClick={() => handleContinueCourse(course.id)}
                      className="bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cursos Concluídos */}
      {activeTab === 'completed' && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {myCourses.completed.map((course) => (
            <div key={course.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="relative h-36">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  Concluído
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-1">{course.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    <span>{course.completedDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ClockIcon className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                  Ver Certificado
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cursos Recomendados */}
      {activeTab === 'recommended' && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {myCourses.recommended.map((course) => (
            <div key={course.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="relative h-36">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  {course.level}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-1">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ClockIcon className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ArrowRightIcon className="w-4 h-4" />
                    <span>Início em {course.startDate}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {course.prerequisites.map((prereq, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                    >
                      {prereq}
                    </span>
                  ))}
                </div>

                <button 
                  className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                  disabled
                >
                  <LockClosedIcon className="w-4 h-4" />
                  <span>Disponível em breve</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 