import { useNavigate } from 'react-router-dom'
import { 
  BookOpenIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import logoImg from '@/assets/logo.png'
import logoOkDocs from '@/assets/logoOkDocs.png'
import { useLogin } from '../hooks/useLogin'

const features = [
  {
    icon: BookOpenIcon,
    title: 'Cursos Corporativos',
    description: 'Conteúdo alinhado às necessidades do mercado'
  },
  {
    icon: AcademicCapIcon,
    title: 'Certificação Profissional',
    description: 'Certificados reconhecidos por grandes empresas'
  },
  {
    icon: UserGroupIcon,
    title: 'Networking',
    description: 'Conecte-se diretamente com empresas parceiras'
  },
  {
    icon: ChartBarIcon,
    title: 'Carreira',
    description: 'Desenvolvimento profissional orientado ao mercado'
  }
]


export default function LoginScreen() {
  const {
    showOkDocsModal,
    setShowOkDocsModal,
    okDocsFormData,
    setOkDocsFormData,
    formData,
    setFormData,
    handleOkDocsSubmit
  } = useLogin()

  const navigate = useNavigate()

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica real de autenticação
    localStorage.setItem('token', 'dummy-token')
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/4 -right-4 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/3 w-28 h-28 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="flex min-h-screen">
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-[480px] xl:w-[560px] p-4 sm:p-6 lg:p-8 flex items-center justify-center relative z-10">
          <div className="w-full max-w-[420px] animate-fadeIn">
            {/* Logo e Header */}
            <div className="mb-8 lg:mb-12 text-center relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center animate-pulse">
                <SparklesIcon className="w-10 h-10 text-purple-500 animate-bounce" />
              </div>
              <img src={logoImg} alt="Logo" className="h-12 lg:h-14 mx-auto mb-4 lg:mb-6 relative" />
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                Conectando Talentos! 👋
              </h1>
              <p className="text-sm lg:text-base text-gray-500">
                Desenvolva habilidades e conecte-se com as melhores empresas
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.08)] p-6 lg:p-8 transition-all duration-300 hover:shadow-[0_4px_50px_rgba(0,0,0,0.12)] hover:bg-white">
              <form onSubmit={handleSubmitLogin} className="space-y-4 lg:space-y-6">
                <div className="space-y-4 lg:space-y-6">
                  <div className="space-y-2">
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 h-12 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
                      placeholder="Digite seu email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label 
                      htmlFor="password" 
                      className="block text-sm font-medium text-gray-700"
                    >
                      Senha
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full px-4 h-12 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
                      placeholder="Digite sua senha"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between py-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" 
                    />
                    <span className="text-sm text-gray-600">Lembrar-me</span>
                  </label>
                  <a 
                    href="#" 
                    className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Esqueceu a senha?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Entrar na Plataforma
                    <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">ou continue com</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowOkDocsModal(true)}
                  className="w-full h-12 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <img 
                    src={logoOkDocs}
                    alt="OKDocs" 
                    className="w-10"
                  />
                  <span>Entrar com OKDocs</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              <div className="mt-6 lg:mt-8 text-center">
                <p className="text-sm text-gray-500">
                  Ainda não tem uma conta?{' '}
                  <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                    Cadastre-se gratuitamente
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="hidden lg:block flex-1 bg-gradient-to-br from-purple-500 to-indigo-600 p-8 text-white overflow-y-auto relative">
          {/* Elementos decorativos */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-400/20 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-indigo-400/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000" />
          </div>

          <div className="h-full flex items-center justify-center relative">
            <div className="max-w-2xl">
              <div className="space-y-4 animate-fadeIn">
                <h2 className="text-3xl font-bold mb-4 animate-slideRight animation-delay-200">
                  A ponte entre talentos e oportunidades
                </h2>
                <p className="text-lg text-white/90 mb-8 animate-slideRight animation-delay-300">
                  Capacitação profissional direcionada às necessidades reais do mercado
                </p>
              </div>
              
              {/* Features com hover e animações melhoradas */}
              <div className="grid grid-cols-2 gap-8 mt-12">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title} 
                    className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer group animate-fadeIn"
                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 
                      transition-all duration-300 group-hover:scale-110 group-hover:rotate-[360deg]
                      group-hover:bg-white/20"
                    >
                      <feature.icon className="w-6 h-6 transition-all duration-300 
                        group-hover:scale-110 group-hover:text-purple-200" 
                      />
                    </div>
                    <div className="transform transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="font-semibold mb-1 group-hover:text-purple-200 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 text-sm transform transition-all duration-300 
                        group-hover:text-white"
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Card com animação */}
              <div className="mt-12 p-6 rounded-2xl bg-white/10 backdrop-blur transform 
                hover:scale-105 transition-all duration-300 hover:bg-white/15 animate-fadeIn animation-delay-700"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <img
                        key={i}
                        src={`https://randomuser.me/api/portraits/${i % 2 ? 'women' : 'men'}/${i}.jpg`}
                        alt={`User ${i}`}
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-medium">+1000 profissionais conectados</div>
                    <div className="text-sm text-white/80">
                      Empresas parceiras buscando talentos como você
                    </div>
                  </div>
                </div>
              </div>

              {/* Logos com animação */}
              <div className="mt-8 animate-fadeIn animation-delay-1000">
                <p className="text-sm text-white/60 mb-4">
                  Empresas que confiam em nossa plataforma:
                </p>
                <div className="grid grid-cols-4 gap-4">
                  {[1,2,3,4].map((i) => (
                    <div 
                      key={i}
                      className="h-12 bg-white/10 rounded-lg flex items-center justify-center
                        transform transition-all duration-300 hover:scale-105 hover:bg-white/20
                        animate-fadeIn cursor-pointer"
                      style={{ animationDelay: `${(i + 8) * 150}ms` }}
                    >
                      Logo {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal OKDocs */}
      {showOkDocsModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={() => setShowOkDocsModal(false)} />
          
          <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-xl relative animate-fadeIn">
            {/* Header com Logo */}
            <div className="flex flex-col items-center mb-8">
              <img src={logoOkDocs} alt="OKDocs" className="w-48 h-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">Acesse sua conta</h2>
            </div>

            {/* Botão de fechar */}
            <button 
              onClick={() => setShowOkDocsModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <span className="sr-only">Fechar</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <form onSubmit={handleOkDocsSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Usuário
                </label>
                <select
                  value={okDocsFormData.tipo_usua}
                  onChange={(e) => setOkDocsFormData({...okDocsFormData, tipo_usua: e.target.value})}
                  className="w-full px-4 h-12 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
                >
                  <option value="0">Pessoa Física</option>
                  <option value="1">Pessoa Jurídica</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CPF
                </label>
                <input
                  type="number"
                  value={okDocsFormData.ndoc_usua}
                  onChange={(e) => setOkDocsFormData({...okDocsFormData, ndoc_usua: e.target.value})}
                  className="w-full px-4 h-12 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="Digite seu CPF"
                  required
                  maxLength={11}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  value={okDocsFormData.senha}
                  onChange={(e) => setOkDocsFormData({...okDocsFormData, senha: e.target.value})}
                  className="w-full px-4 h-12 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
                  placeholder="Digite sua senha"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg relative overflow-hidden group mt-8"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Entrar com OKDocs
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
