import { AcademicCapIcon, ArrowDownTrayIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { catalogCourses, Course } from '../../../mocks/courses';

export default function CertificatesScreen() {
  const navigate = useNavigate();
  const completedCourses = catalogCourses.filter(course => course.isCompleted);

  const handleValidate = (course: Course) => {
    // Gera um código único para o certificado
    const certificateCode = `CERT-${course.id}-${Date.now().toString(36).toUpperCase()}`;
    // Abre a página de validação em uma nova aba
    window.open(`/validate-certificate?code=${certificateCode}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Meus Certificados</h1>
          <p className="text-gray-500">Visualize e baixe seus certificados de conclusão</p>
        </div>
      </div>

      {completedCourses.length > 0 ? (
        <div className="space-y-3">
          {completedCourses.map((course) => (
            <div 
              key={course.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all duration-200 gap-3 bg-white"
            >
              <div className="flex items-start sm:items-center gap-3 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-lg bg-gray-100/80 flex items-center justify-center text-lg shrink-0">
                  <AcademicCapIcon className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row items-start gap-1">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium truncate">{course.title}</h3>
                        <span className="text-sm font-medium text-gray-700 ml-2">{course.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600">com {course.author}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600">Concluído em:</span>
                      <span className="text-xs font-medium text-green-600">{course.completedAt}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">•</span>
                      <span className="text-xs text-gray-600">{course.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
                <button 
                  onClick={() => handleValidate(course)}
                  className="flex-1 sm:flex-none bg-purple-100 text-purple-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors flex items-center justify-center gap-2"
                  title="Abrir página de validação do certificado"
                >
                  <ShieldCheckIcon className="w-4 h-4" />
                  Validar
                </button>
                
                <button 
                  className="flex-1 sm:flex-none bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <AcademicCapIcon className="w-4 h-4" />
                  Ver Certificado
                </button>
                
                <button 
                  className="flex-1 sm:flex-none bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Baixar PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 px-4 bg-white rounded-xl border border-gray-200">
          <div className="bg-gray-100 rounded-full p-4 mb-4">
            <AcademicCapIcon className="w-8 h-8 text-gray-400" />
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Nenhum certificado disponível
          </h3>
          
          <p className="text-gray-600 text-center mb-6 max-w-md">
            Complete seus cursos para receber seus certificados de conclusão
          </p>

          <button 
            onClick={() => navigate('/dashboard/catalog')}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Explorar Cursos
          </button>
        </div>
      )}
    </div>
  );
} 