import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Importe os estilos
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
// Importando a imagem
import financasImg from '@/assets/financas.jpeg';
import gestaoPessoasImg from '@/assets/gestaoPessoas.jpeg';
import atendimentoClienteImg from '@/assets/atendimentoCliente.jpeg';
import marketingDigitalImg from '@/assets/marketingDigital.jpeg';
import socialMediaImg from '@/assets/socialMedia.jpeg';


const recommendedCourses = [
  {
    id: 1,
    title: 'Gestão Financeira',
    description: 'Aprenda a gerenciar suas finanças pessoais e empresariais de forma eficaz',
    author: 'Grupo GDC',
    level: 'Iniciante',
    duration: '3 horas',
    originalPrice: 69.00,
    price:'Gratuito',
    image: financasImg, // Usando a imagem importada
    tags: ['Online'],
    progress: 0 // Adicionando progress com valor padrão
  },
  {
    id: 2,
    title: 'Gestão de Pessoas',
    description: 'Tenha uma visão ampla sobre a gestão de pessoas e como melhorar a produtividade',
    author: 'Grupo GDC',
    duration: '8 horas',
    originalPrice: 69.00,
    price:'Gratuito',
    image: gestaoPessoasImg,
    tags: ['Online'],
  },
  {
    id: 3,
    title: 'Atendimento ao Cliente',
    description: 'Aprenda a melhorar a experiência do cliente e como melhorar a satisfação',
    author: 'Grupo GDC',
    duration: '3 horas',
    originalPrice: 69.00,
    price:'Gratuito',
    image:atendimentoClienteImg,
    tags: ['Online']
  },
  {
    id: 4,
    title: 'Marketing Digital',
    description: 'Descubra como construir e monitorar uma estratégia de marketing digital para alavancar o seu negócio.',
    author: 'Grupo GDC',
    duration: '3 horas',
    originalPrice: 69.00,
    price:'Gratuito',
    image: marketingDigitalImg,
    tags: ['Online']
  },
  {
    id: 5,
    title: 'Social Media',
    description: 'Saiba como manter sua presença online a favor do seu negócio.',
    author: 'Grupo GDC',
    duration: '3 horas',
    originalPrice: 69.00,
    price:'Gratuito',
    image: socialMediaImg,
    tags: ['Online']
  },
  
];

export default function RecommendedCourses() {
  return (
    <div className="bg-white rounded-xl p-4 mb-6 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Recomendado para você</h2>
        <div className="flex gap-2">
          <button className="swiper-prev p-2 rounded-lg hover:bg-gray-100 text-gray-500">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button className="swiper-next p-2 rounded-lg hover:bg-gray-100 text-gray-500">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-prev',
          nextEl: '.swiper-next'
        }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 }
        }}
        className="!px-1"
      >
        {recommendedCourses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {course.description}
                </p>
                
                {/* Informações do autor e duração */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">By</span>
                    <span className="text-xs font-semibold">{course.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {course.duration}
                  </span>
                </div>

                {/* Preço e botão de matrícula */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                       {course.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      R$ {course.originalPrice.toFixed(2)}
                    </span>
                  </div>

                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Matricule-se
                  </button>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {course.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-0.5 text-xs font-medium bg-purple-50 text-purple-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}