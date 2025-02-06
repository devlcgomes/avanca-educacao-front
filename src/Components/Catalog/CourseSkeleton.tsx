export default function CourseSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse">
      {/* Imagem */}
      <div className="w-full h-48 bg-gray-200" />
      
      <div className="p-4">
        {/* Título */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
        
        {/* Descrição */}
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
        
        {/* Autor */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-4 bg-gray-200 rounded w-8" />
          <div className="h-4 bg-gray-200 rounded w-24" />
        </div>

        {/* Rating e Duração */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="h-4 bg-gray-200 rounded w-16" />
            <div className="h-4 bg-gray-200 rounded w-20" />
          </div>
          <div className="h-4 bg-gray-200 rounded w-16" />
        </div>

        {/* Preço */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-6 bg-gray-200 rounded w-20" />
          <div className="h-4 bg-gray-200 rounded w-16" />
        </div>

        {/* Botão */}
        <div className="h-9 bg-gray-200 rounded w-full mb-3" />

        {/* Tags */}
        <div className="flex gap-1.5">
          <div className="h-5 bg-gray-200 rounded w-16" />
          <div className="h-5 bg-gray-200 rounded w-16" />
        </div>
      </div>
    </div>
  );
} 