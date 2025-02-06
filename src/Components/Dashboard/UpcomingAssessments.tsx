import { BookOpenIcon, CalendarIcon, ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const assessments = [
  {
    id: 1,
    course: 'Gestão Financeira',
    title: 'Teste 1',
    date: '15 Jan',
    time: '14:00',
    duration: '60 min',
    status: 'pending',
    type: 'Avaliação Final',
    points: 100
  },
  {
    id: 2,
    course: 'Gestão de Pessoas',
    title: 'Teste 2',
    date: '22 Jan',
    time: '10:00',
    duration: '45 min',
    status: 'pending',
    type: 'Quiz Intermediário',
    points: 50
  },
  {
    id: 3,
    course: 'Marketing Digital',
    title: 'Teste 3',
    date: '24 Jan',
    time: '15:30',
    duration: '30 min',
    status: 'pending',
    type: 'Avaliação Prática',
    points: 75
  }
];

export default function UpcomingAssessments() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Próximas Avaliações</h2>
          <p className="text-sm text-gray-500 mt-1">Mantenha-se preparado para suas avaliações</p>
        </div>
        <Link 
          to="/dashboard/assessments"
          className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium px-3 py-2 rounded-lg hover:bg-purple-50 transition-all"
        >
          Ver Todas
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="space-y-4">
        {assessments.map((assessment) => (
          <div 
            key={assessment.id}
            className="group relative bg-white rounded-xl border border-gray-100 p-4 hover:border-purple-200 hover:shadow-md transition-all duration-200"
          >
            <div className="absolute top-0 right-0 mt-4 mr-4 flex flex-col items-end gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                {assessment.points} pontos
              </span>
              <button 
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-lg text-xs font-medium transition-colors"
                onClick={() => {/* Adicionar ação aqui */}}
              >
                Acessar Avaliação
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-sm shrink-0">
                <AcademicCapIcon className="w-6 h-6" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">
                    {assessment.course}
                  </h3>
                  <span className="h-1 w-1 rounded-full bg-gray-300 hidden sm:block" />
                  <span className="text-sm text-gray-500">{assessment.type}</span>
                </div>

                <p className="text-sm font-medium text-gray-700 mb-3">
                  {assessment.title}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-purple-500 shrink-0" />
                    <span>{assessment.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-purple-500 shrink-0" />
                    <span>{assessment.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpenIcon className="w-4 h-4 text-purple-500 shrink-0" />
                    <span>{assessment.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 