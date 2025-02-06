import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MagnifyingGlassIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import financasImg from '@/assets/financas.jpeg';
import gestaoPessoasImg from '@/assets/gestaoPessoas.jpeg';
import atendimentoClienteImg from '@/assets/atendimentoCliente.jpeg';
import marketingDigitalImg from '@/assets/marketingDigital.jpeg';
import socialMediaImg from '@/assets/socialMedia.jpeg';
import NoSearchResults from '../../../Components/Catalog/NoSearchResults';
import CourseGridSkeleton from '../../../Components/Catalog/CourseGridSkeleton';

type Course = {
  id: number;
  title: string;
  description: string;
  author: string;
  level: string;
  duration: string;
  originalPrice: number;
  price: number | string;
  image: string;
  category: string;
  tags: string[];
  rating: number;
  students: number;
  isCompleted?: boolean;
};

const catalogCourses: Course[] = [
  {
    id: 1,
    title: 'Gestão Financeira',
    description: 'Aprenda a gerenciar suas finanças pessoais e empresariais de forma eficaz',
    author: 'Grupo GDC',
    level: 'Iniciante',
    duration: '3 horas',
    originalPrice: 69.00,
    price: 'Gratuito',
    image: financasImg,
    category: 'Finanças',
    tags: ['Online', 'Certificado'],
    rating: 4.8,
    students: 1234
  },
  {
    id: 2,
    title: 'Gestão de Pessoas',
    description: 'Desenvolva habilidades essenciais para liderar e gerenciar equipes de forma eficiente',
    author: 'Grupo GDC',
    level: 'Intermediário',
    duration: '8 horas',
    originalPrice: 89.00,
    price: 'Gratuito',
    image: gestaoPessoasImg,
    category: 'Gestão',
    tags: ['Online', 'Certificado'],
    rating: 4.7,
    students: 892
  },
  {
    id: 3,
    title: 'Atendimento ao Cliente',
    description: 'Aprenda técnicas avançadas de atendimento para encantar seus clientes',
    author: 'Grupo GDC',
    level: 'Iniciante',
    duration: '4 horas',
    originalPrice: 59.00,
    price: 'Gratuito',
    image: atendimentoClienteImg,
    category: 'Vendas',
    tags: ['Online', 'Certificado'],
    rating: 4.9,
    students: 2156
  },
  {
    id: 4,
    title: 'Marketing Digital',
    description: 'Domine as principais estratégias de marketing digital para alavancar seu negócio',
    author: 'Grupo GDC',
    level: 'Intermediário',
    duration: '12 horas',
    originalPrice: 99.00,
    price: 'Gratuito',
    image: marketingDigitalImg,
    category: 'Marketing',
    tags: ['Online', 'Certificado'],
    rating: 4.6,
    students: 1567,
    isCompleted: true
  },
  {
    id: 5,
    title: 'Social Media',
    description: 'Aprenda a criar estratégias eficientes para redes sociais',
    author: 'Grupo GDC',
    level: 'Iniciante',
    duration: '6 horas',
    originalPrice: 79.00,
    price: ' Gratuito',
    image: socialMediaImg,
    category: 'Marketing',
    tags: ['Online', 'Certificado'],
    rating: 4.7,
    students: 943
  },
  // ... adicione os outros 5 cursos com o mesmo padrão
];

const categories = ['Todos', 'Finanças', 'Gestão', 'Marketing', 'Vendas', 'Tecnologia'];

export default function CatalogScreen() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const coursesPerPage = 8;

  // Simulando carregamento inicial
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      // Aqui você fará a chamada à API quando implementar
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulando delay
      setIsLoading(false);
    };

    loadData();
  }, []);

  // Simulando carregamento ao mudar filtros
  useEffect(() => {
    const loadFilteredData = async () => {
      setIsLoading(true);
      // Aqui você fará a chamada à API com os filtros quando implementar
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulando delay menor para filtros
      setIsLoading(false);
    };

    loadFilteredData();
  }, [searchQuery, selectedCategory]);

  // Atualiza a busca quando o parâmetro da URL mudar
  useEffect(() => {
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [searchParams]);

  // Limpa a pesquisa quando mudar os filtros
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setSearchParams({});
    setCurrentPage(1);
  };

  // Filtragem dos cursos
  const filteredCourses = catalogCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Paginação
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  // Componente de Paginação
  const Pagination = () => {
    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`w-8 h-8 rounded-lg text-sm font-medium ${
              currentPage === pageNumber
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Próxima
        </button>
      </div>
    );
  };

  const handleClearFilters = () => {
    setSelectedCategory('Todos');
    setSearchQuery('');
    setSearchParams({});
    setCurrentPage(1);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Catálogo de Cursos</h1>
          <p className="text-gray-500">Explore nossa seleção de cursos e comece a aprender</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo condicional baseado nos resultados */}
      {isLoading ? (
        <CourseGridSkeleton />
      ) : (
        filteredCourses.length > 0 ? (
          <>
            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentCourses.map((course) => (
                <div 
                  key={course.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200"
                >
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-purple-600 text-xs font-medium px-2 py-1 rounded">
                        {course.category}
                      </span>
                      {course.isCompleted && (
                        <span className="bg-green-50 text-green-600 text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                          <AcademicCapIcon className="w-4 h-4" />
                          Concluído
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1.5 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm">Por</span>
                      <span className="text-sm font-semibold">{course.author}</span>
                    </div>

                    <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <span>⭐ {course.rating}</span>
                        <span>•</span>
                        <span>{course.students} alunos</span>
                      </div>
                      <span>{course.duration}</span>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">{course.price}</span>
                        <span className="text-sm text-gray-500 line-through">R${course.originalPrice.toFixed(2)}</span>
                      </div>
                    </div>

                    {course.isCompleted ? (
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors mb-3 flex items-center justify-center gap-2">
                        <AcademicCapIcon className="w-4 h-4" />
                        Ver Certificado
                      </button>
                    ) : (
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors mb-3">
                        Matricular-se
                      </button>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                      {course.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-0.5 text-xs font-medium bg-purple-50 text-purple-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {course.isCompleted && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-green-50 text-green-600 rounded flex items-center gap-1">
                          <AcademicCapIcon className="w-3 h-3" />
                          Certificado Disponível
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginação */}
            <Pagination />
          </>
        ) : (
          <NoSearchResults 
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onClearFilters={handleClearFilters}
          />
        )
      )}
    </div>
  );
}