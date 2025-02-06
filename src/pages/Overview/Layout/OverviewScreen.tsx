import { 
  BookOpenIcon, 
  AcademicCapIcon, 
  UserGroupIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import RecommendedCourses from '../../../Components/Home/RecommendedCourses';
import UpcomingAssessments from '../../../Components/Dashboard/UpcomingAssessments';
import { useState } from 'react';
import { coursesData } from '../../../mocks/courses';
import { useSearchCourses } from '../../../hooks/useSearchCourses';
import { useNavigate } from 'react-router-dom';

export default function OverviewScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const { handleSearch } = useSearchCourses();
  const navigate = useNavigate();

  const stats = [
    {
      id: 1,
      label: 'Cursos em Progresso',
      value: '5',
      icon: BookOpenIcon,
      color: 'rgb(249, 115, 22)',
      bgColor: 'bg-orange-50',
      trend: '+2 essa semana',
      trendUp: true
    },
    {
      id: 2,
      label: 'Cursos Concluídos',
      value: '3',
      icon: AcademicCapIcon,
      color: 'rgb(34, 197, 94)',
      bgColor: 'bg-green-50',
      trend: '+1 esse mês',
      trendUp: true
    },
    {
      id: 3,
      label: 'Certificados Concluídos',
      value: '2',
      icon: BookOpenIcon,
      color: 'rgb(59, 130, 246)',
      bgColor: 'bg-blue-50',
      trend: 'Último há 2 dias',
      trendUp: false
    },
    {
      id: 4,
      label: 'Suporte à Comunidade',
      value: '12',
      icon: UserGroupIcon,
      color: 'rgb(244, 63, 94)',
      bgColor: 'bg-pink-50',
      trend: '+3 interações',
      trendUp: true
    }
  ];

  const handleContinueCourse = (courseId: number) => {
    navigate(`/dashboard/classroom/${courseId}`);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div className="w-full p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-xl font-semibold">Seja bem vindo !</h1>
        
        {/* Barra de Pesquisa */}
        <form onSubmit={onSubmit} className="w-full sm:w-96 mt-4 sm:mt-0">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar cursos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </form>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon 
                  className="w-6 h-6" 
                  style={{ color: stat.color }} 
                />
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">
                  {stat.label}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </span>
                  <div className={`flex items-center gap-1 text-xs ${
                    stat.trendUp ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {stat.trendUp && (
                      <ArrowTrendingUpIcon className="w-3 h-3" />
                    )}
                    <span>{stat.trend}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grid de 2 colunas para Cursos e Avaliações */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Cursos em Andamento */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div className="mb-2 sm:mb-0">
              <h2 className="text-lg font-semibold">Seus Cursos em Andamento</h2>
              <p className="text-sm text-gray-600">Continue de onde parou</p>
            </div>
            <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
              Ver Todos os Cursos
            </button>
          </div>

          <div className="space-y-3">
            {coursesData.inProgress.map((course) => (
              <div 
                key={course.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all duration-200 gap-3"
              >
                <div className="flex items-start sm:items-center gap-3 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-lg bg-gray-100/80 flex items-center justify-center text-lg shrink-0">
                    <BookOpenIcon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row items-start gap-1">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium truncate">{course.title}</h3>
                          <span className="text-sm font-medium text-gray-700 ml-2">{course.progress}%</span>
                        </div>
                        <p className="text-sm text-gray-600">com {course.instructor.name}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex-1">
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                          <div 
                            className="bg-purple-600 h-1.5 rounded-full transition-all duration-300" 
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-gray-600 whitespace-nowrap">
                        {course.completedLessons} aulas
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.lastAccess}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleContinueCourse(course.id)}
                    className="bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Próximas Avaliações */}
        <div className="bg-white rounded-xl p-4">
          <UpcomingAssessments />
        </div>
      </div>

      {/* Cursos Recomendados*/}
      <RecommendedCourses />
    </div>
  );
} 