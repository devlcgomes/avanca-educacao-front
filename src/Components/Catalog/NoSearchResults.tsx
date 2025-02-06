import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type NoSearchResultsProps = {
  searchQuery: string;
  selectedCategory: string;
  onClearFilters: () => void;
};

export default function NoSearchResults({ 
  searchQuery, 
  selectedCategory,
  onClearFilters 
}: NoSearchResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-gray-100 rounded-full p-4 mb-4">
        <MagnifyingGlassIcon className="w-8 h-8 text-gray-400" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Nenhum resultado encontrado
      </h3>
      
      <p className="text-gray-600 text-center mb-6 max-w-md">
        {searchQuery && selectedCategory !== 'Todos' ? (
          <>
            Não encontramos resultados para "<span className="font-medium">{searchQuery}</span>" 
            na categoria "<span className="font-medium">{selectedCategory}</span>"
          </>
        ) : searchQuery ? (
          <>
            Não encontramos resultados para "<span className="font-medium">{searchQuery}</span>"
          </>
        ) : (
          <>
            Não encontramos cursos na categoria "<span className="font-medium">{selectedCategory}</span>"
          </>
        )}
      </p>

      <button
        onClick={onClearFilters}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Limpar Filtros
      </button>
    </div>
  );
} 