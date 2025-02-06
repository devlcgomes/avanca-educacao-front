import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Importe os estilos
import 'swiper/css';
import 'swiper/css/navigation';

interface CourseCard {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  progress?: number; 
}

const mockCourses: CourseCard[] = [
  {
    id: '1',
    title: 'Product Manager',
    description: 'Aprenda a gerenciar produtos digitais do zero ao avançado',
    thumbnail: '/path/to/thumbnail.jpg',
    duration: '40h',
    progress: 60
  },
  {
    id: '2',
    title: 'UX Design',
    description: 'Fundamentos de design de experiência do usuário',
    thumbnail: '/path/to/thumbnail2.jpg',
    duration: '32h',
    progress: 25
  },
  // Adicione mais cursos conforme necessário
];

export default function FeaturedCourses() {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Cursos em Destaque</h2>
      
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        className="w-full"
      >
        {mockCourses.map((course) => (
          <SwiperSlide key={course.id} className="w-[300px]">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-200">
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                {course.progress && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                    <div 
                      className="h-full bg-green-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {course.description}
                </p>
                <span className="text-xs text-gray-500">
                  {course.duration}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}