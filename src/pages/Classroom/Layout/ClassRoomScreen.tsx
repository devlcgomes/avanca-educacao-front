import { useState } from 'react';
import { 
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilIcon,
  DocumentTextIcon,
  ChatBubbleLeftIcon,
  AcademicCapIcon
} from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface ClassRoomScreenProps {
  courseData: {
    id: number | null;
    title: string;
    currentLesson: string;
    category: string;
    instructor: {
      name: string;
      role: string;
      avatar: string;
    };
    modules: Array<{
      id: number;
      title: string;
      duration: string;
      lessons: Array<{
        id: number;
        title: string;
        duration: string;
        completed: boolean;
        active: boolean;
      }>;
    }>;
  }
}

export default function ClassRoomScreen({ courseData }: ClassRoomScreenProps) {
  const [expandedModules, setExpandedModules] = useState<number[]>([1]);
  const [showNotes, setShowNotes] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  
  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev => 
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId) // Remove se já existe
        : [...prev, moduleId] // Adiciona se não existe
    );
  };

  const isModuleExpanded = (moduleId: number) => expandedModules.includes(moduleId);

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span>Meus Cursos</span>
          <span>/</span>
          <span>{courseData.title}</span>
        </div>

        {/* Course Title */}
        <h1 className="text-2xl font-bold mb-6">{courseData.title}</h1>

        {/* Video Player */}
        <div className="mb-6">
          <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ujX6CuRELFE"
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        {/* Video Controls */}
        <div className="flex items-center justify-between mt-4">
          <button
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            <span>Aula Anterior</span>
          </button>

          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              showNotes 
                ? 'bg-purple-100 text-purple-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <PencilIcon className="w-5 h-5" />
            <span>Anotações</span>
          </button>

          <button
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span>Próxima Aula</span>
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lesson Info and Notes */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mb-6">
        {/* Lesson Info */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">{courseData.currentLesson}</h2>
          <p className="text-gray-600 mb-6">
            Explore os princípios fundamentais da propulsão de foguetes, tipos de combustíveis 
            e como as diferentes tecnologias de propulsão são utilizadas na exploração espacial moderna. 
            Aprenda sobre os desafios e soluções na engenharia de foguetes.
          </p>

          {/* Instructor */}
          <div className="flex items-center gap-4">
            <img 
              src={courseData.instructor.avatar}
              alt={courseData.instructor.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-medium">{courseData.instructor.name}</div>
              <div className="text-sm text-gray-500">{courseData.instructor.role}</div>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        {showNotes && (
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Minhas Anotações</h2>
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Digite suas anotações sobre esta aula..."
              className="w-full h-[200px] p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 resize-none"
            />
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Salvar Anotações
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Progresso do Curso - Agora com margem superior */}
      <div className="bg-white rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">Progresso do Curso</h3>
            <p className="text-sm text-gray-500">3 de 12 módulos completos</p>
          </div>
          <span className="text-2xl font-bold text-purple-600">25%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '25%' }} />
        </div>
      </div>

    </div>

    {/* Course Content Sidebar */}
    <div className="w-80 border-l border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Conteúdo do Curso</h2>

        {/* Modules */}
        <div className="space-y-4 mb-6">
          {courseData.modules.map((module) => (
            <div key={module.id} className="border border-gray-200 rounded-lg">
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
              >
                <div>
                  <h3 className="font-medium text-left">{module.title}</h3>
                  <p className="text-sm text-gray-500">
                    {module.duration} • {module.lessons.length} aulas
                  </p>
                </div>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    isModuleExpanded(module.id) ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Lessons */}
              <div 
                className={`transition-all duration-200 ease-in-out ${
                  isModuleExpanded(module.id) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="border-t border-gray-200">
                  {module.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      className={`w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors ${
                        lesson.active ? 'bg-purple-50' : ''
                      }`}
                    >
                      <CheckCircleIcon 
                        className={`w-5 h-5 transition-colors ${
                          lesson.completed ? 'text-green-500' : 'text-gray-300'
                        }`}
                      />
                      <div className="flex-1 text-left">
                        <div className={`font-medium ${lesson.active ? 'text-purple-600' : ''}`}>
                          {lesson.title}
                        </div>
                        <div className="text-sm text-gray-500">{lesson.duration}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recursos do Curso - Movido para a sidebar */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Recursos do Curso</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-all">
              <DocumentTextIcon className="w-5 h-5 text-purple-600 shrink-0" />
              <div className="text-left">
                <h4 className="font-medium">Material de Apoio</h4>
                <p className="text-xs text-gray-500">PDFs e documentos</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-all">
              <ChatBubbleLeftIcon className="w-5 h-5 text-purple-600 shrink-0" />
              <div className="text-left">
                <h4 className="font-medium">Fórum de Discussão</h4>
                <p className="text-xs text-gray-500">Tire suas dúvidas</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-all">
              <AcademicCapIcon className="w-5 h-5 text-purple-600 shrink-0" />
              <div className="text-left">
                <h4 className="font-medium">Exercícios</h4>
                <p className="text-xs text-gray-500">Pratique o conteúdo</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}   