export default function ClassroomLoading() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
          <span>/</span>
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Course Title */}
        <div className="h-8 w-64 bg-gray-200 rounded mb-6 animate-pulse" />

        {/* Video Player */}
        <div className="mb-6">
          <div className="aspect-video bg-gray-200 rounded-xl animate-pulse" />
        </div>

        {/* Lesson Info */}
        <div className="bg-white rounded-xl p-6">
          <div className="h-6 w-48 bg-gray-200 rounded mb-4 animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>

      {/* Course Content Sidebar */}
      <div className="w-80 border-l border-gray-200 overflow-y-auto">
        <div className="p-4">
          <div className="h-6 w-40 bg-gray-200 rounded mb-4 animate-pulse" />
          
          {/* Modules */}
          <div className="space-y-4">
            {[1, 2, 3].map((module) => (
              <div key={module} className="border border-gray-200 rounded-lg p-4">
                <div className="h-5 w-full bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 