import { useState } from 'react';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';

// Dados mockados
const communityMembers = [
  {
    id: 1,
    name: 'Ana Silva',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    city: 'São Paulo, SP',
    courses: ['Marketing Digital', 'Social Media'],
    role: 'Estudante',
    studyStatus: 'Disponível para grupo de estudos',
    interests: ['Marketing', 'Redes Sociais', 'Branding'],
    lastActive: '2 dias atrás'
  },
  {
    id: 2,
    name: 'Carlos Santos',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    city: 'Rio de Janeiro, RJ',
    courses: ['Gestão Financeira', 'Gestão de Pessoas'],
    role: 'Profissional',
    studyStatus: 'Procurando mentoria em Finanças',
    interests: ['Finanças', 'Liderança', 'Gestão'],
    lastActive: '3 dias atrás'
  },
  {
    id: 3,
    name: 'Marina Costa',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    city: 'Curitiba, PR',
    courses: ['Social Media', 'Marketing Digital'],
    role: 'Estudante',
    studyStatus: 'Disponível para grupo de estudos',
    interests: ['Comunicação', 'Marketing Digital', 'Design'],
    lastActive: '1 hora atrás'
  },
  {
    id: 4,
    name: 'Pedro Oliveira',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    city: 'Belo Horizonte, MG',
    courses: ['Gestão de Pessoas', 'Marketing Digital'],
    role: 'Profissional',
    studyStatus: 'Buscando parceiros de estudo',
    interests: ['RH', 'Desenvolvimento', 'Liderança'],
    lastActive: '5 horas atrás'
  },
  {
    id: 5,
    name: 'Juliana Lima',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    city: 'São Paulo, SP',
    courses: ['Gestão Financeira', 'Social Media'],
    role: 'Estudante',
    studyStatus: 'Disponível para networking',
    interests: ['Finanças', 'Investimentos', 'Marketing'],
    lastActive: '1 dia atrás'
  },
  {
    id: 6,
    name: 'Ricardo Mendes',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    city: 'Rio de Janeiro, RJ',
    courses: ['Marketing Digital', 'Gestão de Pessoas'],
    role: 'Profissional',
    studyStatus: 'Procurando grupo de estudos',
    interests: ['Marketing', 'Vendas', 'Gestão'],
    lastActive: '4 dias atrás'
  },
  {
    id: 7,
    name: 'Fernanda Souza',
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    city: 'Curitiba, PR',
    courses: ['Social Media', 'Gestão Financeira'],
    role: 'Estudante',
    studyStatus: 'Disponível para projetos',
    interests: ['Mídias Sociais', 'Análise de Dados', 'Marketing'],
    lastActive: '2 horas atrás'
  },
  {
    id: 8,
    name: 'Lucas Ferreira',
    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    city: 'Belo Horizonte, MG',
    courses: ['Gestão de Pessoas', 'Social Media'],
    role: 'Profissional',
    studyStatus: 'Buscando mentoria',
    interests: ['Recursos Humanos', 'Comunicação', 'Liderança'],
    lastActive: '6 horas atrás'
  },
  {
    id: 9,
    name: 'Beatriz Santos',
    avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
    city: 'São Paulo, SP',
    courses: ['Marketing Digital', 'Gestão Financeira'],
    role: 'Estudante',
    studyStatus: 'Disponível para grupo de estudos',
    interests: ['Marketing', 'Finanças', 'Empreendedorismo'],
    lastActive: '30 minutos atrás'
  },
  {
    id: 10,
    name: 'Gabriel Costa',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    city: 'Rio de Janeiro, RJ',
    courses: ['Gestão de Pessoas', 'Marketing Digital'],
    role: 'Profissional',
    studyStatus: 'Procurando parceiros de estudo',
    interests: ['Gestão', 'Marketing', 'Inovação'],
    lastActive: '1 dia atrás'
  },
  {
    id: 11,
    name: 'Isabella Martins',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
    city: 'Curitiba, PR',
    courses: ['Social Media', 'Gestão de Pessoas'],
    role: 'Estudante',
    studyStatus: 'Disponível para networking',
    interests: ['Redes Sociais', 'Comunicação', 'Marketing Digital'],
    lastActive: '3 horas atrás'
  },
  {
    id: 12,
    name: 'Thiago Silva',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    city: 'Belo Horizonte, MG',
    courses: ['Gestão Financeira', 'Marketing Digital'],
    role: 'Profissional',
    studyStatus: 'Buscando grupo de estudos',
    interests: ['Finanças', 'Investimentos', 'Marketing'],
    lastActive: '2 dias atrás'
  },
  {
    id: 13,
    name: 'Laura Oliveira',
    avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
    city: 'São Paulo, SP',
    courses: ['Marketing Digital', 'Social Media'],
    role: 'Estudante',
    studyStatus: 'Disponível para projetos',
    interests: ['Marketing', 'Design', 'Comunicação'],
    lastActive: '4 horas atrás'
  },
  {
    id: 14,
    name: 'Matheus Santos',
    avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
    city: 'Rio de Janeiro, RJ',
    courses: ['Gestão de Pessoas', 'Gestão Financeira'],
    role: 'Profissional',
    studyStatus: 'Procurando mentoria',
    interests: ['RH', 'Finanças', 'Liderança'],
    lastActive: '5 dias atrás'
  },
  {
    id: 15,
    name: 'Sofia Lima',
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
    city: 'Curitiba, PR',
    courses: ['Social Media', 'Marketing Digital'],
    role: 'Estudante',
    studyStatus: 'Disponível para grupo de estudos',
    interests: ['Mídias Sociais', 'Marketing', 'Criação de Conteúdo'],
    lastActive: '1 hora atrás'
  },
  {
    id: 16,
    name: 'Felipe Costa',
    avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
    city: 'Belo Horizonte, MG',
    courses: ['Gestão Financeira', 'Gestão de Pessoas'],
    role: 'Profissional',
    studyStatus: 'Buscando parceiros de estudo',
    interests: ['Finanças', 'Gestão', 'Análise de Dados'],
    lastActive: '7 horas atrás'
  },
  {
    id: 17,
    name: 'Mariana Ferreira',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    city: 'São Paulo, SP',
    courses: ['Marketing Digital', 'Social Media'],
    role: 'Estudante',
    studyStatus: 'Disponível para networking',
    interests: ['Marketing Digital', 'Branding', 'Comunicação'],
    lastActive: '2 horas atrás'
  },
  {
    id: 18,
    name: 'Rodrigo Santos',
    avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
    city: 'Rio de Janeiro, RJ',
    courses: ['Gestão de Pessoas', 'Marketing Digital'],
    role: 'Profissional',
    studyStatus: 'Procurando grupo de estudos',
    interests: ['Gestão', 'Marketing', 'Desenvolvimento'],
    lastActive: '6 dias atrás'
  },
  {
    id: 19,
    name: 'Carolina Lima',
    avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
    city: 'Curitiba, PR',
    courses: ['Social Media', 'Gestão Financeira'],
    role: 'Estudante',
    studyStatus: 'Disponível para projetos',
    interests: ['Redes Sociais', 'Finanças', 'Marketing'],
    lastActive: '45 minutos atrás'
  },
  {
    id: 20,
    name: 'Bruno Oliveira',
    avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
    city: 'Belo Horizonte, MG',
    courses: ['Gestão de Pessoas', 'Social Media'],
    role: 'Profissional',
    studyStatus: 'Buscando mentoria',
    interests: ['RH', 'Comunicação', 'Gestão de Equipes'],
    lastActive: '8 horas atrás'
  }
];

const cities = ['Todas', 'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Curitiba, PR'];
const courses = ['Todos', 'Marketing Digital', 'Gestão Financeira', 'Social Media', 'Gestão de Pessoas'];

export default function CommunityScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Todas');
  const [selectedCourse, setSelectedCourse] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 10;

  // Filtragem dos membros
  const filteredMembers = communityMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCity = selectedCity === 'Todas' || member.city === selectedCity;
    const matchesCourse = selectedCourse === 'Todos' || member.courses.includes(selectedCourse);

    return matchesSearch && matchesCity && matchesCourse;
  });

  // Paginação
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Comunidade</h1>
          <p className="text-gray-500">Encontre outros alunos e forme grupos de estudo</p>
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
                placeholder="Buscar membros..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-4">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
            >
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Aluno</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Localização</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Cursos</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Interesses</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Última Atividade</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-600">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50/50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPinIcon className="w-4 h-4" />
                      <span className="text-sm">{member.city}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-wrap gap-1">
                      {member.courses.map((course, index) => (
                        <span 
                          key={index}
                          className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                      {member.studyStatus}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-wrap gap-1">
                      {member.interests.map((interest, index) => (
                        <span 
                          key={index}
                          className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-medium"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-500">{member.lastActive}</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button 
                      className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg text-sm font-medium transition-colors"
                      onClick={() => window.open('/grupos-estudo', '_blank')}
                    >
                      Grupos de Estudo
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            Mostrando {indexOfFirstMember + 1} até {Math.min(indexOfLastMember, filteredMembers.length)} de {filteredMembers.length} membros
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>

            <div className="flex items-center gap-1">
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
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Próxima
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}