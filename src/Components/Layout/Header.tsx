import { useLocation } from 'react-router-dom';
import { HomeIcon, ChevronRightIcon, BellIcon, Cog6ToothIcon, Bars3Icon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

type HeaderProps = {
  setIsSidebarOpen: (value: boolean) => void;
  notificationsRef: React.RefObject<HTMLDivElement>;
  userMenuRef: React.RefObject<HTMLDivElement>;
  showNotifications: boolean;
  setShowNotifications: (value: boolean) => void;
  showUserMenu: boolean;
  setShowUserMenu: (value: boolean) => void;
  unreadCount: number;
  notifications: any[];
  handleLogout: () => void;
};

export default function Header({
  setIsSidebarOpen,
  notificationsRef,
  userMenuRef,
  showNotifications,
  setShowNotifications,
  showUserMenu,
  setShowUserMenu,
  unreadCount,
  handleLogout
}: HeaderProps) {
  const location = useLocation();

  return (
    <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-20">
      <div className="flex items-center justify-between px-4 lg:px-8 h-full">
        {/* Menu Button & Breadcrumbs */}
        <div className="flex items-center gap-4 flex-1">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg lg:hidden"
          >
            <Bars3Icon className="w-5 h-5" />
          </button>

          {/* Breadcrumbs */}
          <div className="hidden sm:flex items-center space-x-1 text-sm">
            <HomeIcon className="w-4 h-4 text-gray-500" />
            {location.pathname.split('/').filter(Boolean).map((path, index, arr) => (
              <div key={path} className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-1" />
                <span className={`${
                  index === arr.length - 1
                    ? 'font-medium text-purple-600'
                    : 'text-gray-600'
                }`}>
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button 
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <BellIcon className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 min-w-[16px] px-1 flex items-center justify-center bg-red-500 text-white text-xs font-medium rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-lg border border-gray-200 z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
                {/* Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">Notificações</h3>
                      <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded-full">
                        {unreadCount} novas
                      </span>
                    </div>
                    <button className="text-xs text-purple-600 hover:text-purple-700 font-medium">
                      Marcar todas como lidas
                    </button>
                  </div>
                </div>

                {/* Filtros */}
                <div className="flex gap-2 p-2 border-b border-gray-200">
                  <button className="px-3 py-1 text-xs font-medium bg-purple-50 text-purple-600 rounded-full">
                    Todas
                  </button>
                  <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-full">
                    Não lidas
                  </button>
                  <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-full">
                    Importantes
                  </button>
                </div>

                {/* Lista de notificações */}
                <div className="divide-y divide-gray-100">
                  {/* Notificação não lida */}
                  <div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Novo curso disponível</p>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              O curso "Marketing Digital Avançado" já está disponível para você começar!
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-xs text-gray-500">há 5 minutos</span>
                          <span className="text-xs font-medium text-purple-600">Cursos</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notificação lida */}
                  <div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm text-gray-700">Certificado emitido</p>
                            <p className="text-sm text-gray-500 line-clamp-2">
                              Seu certificado do curso "Gestão de Pessoas" foi emitido com sucesso!
                            </p>
                          </div>
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-xs text-gray-500">há 2 horas</span>
                          <span className="text-xs font-medium text-purple-600">Certificados</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notificação com ação */}
                  <div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm text-gray-700">Lembrete de aula</p>
                            <p className="text-sm text-gray-500 line-clamp-2">
                              Sua próxima aula de "Marketing Digital" começa em 30 minutos
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <button className="px-3 py-1 text-xs font-medium bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                            Acessar aula
                          </button>
                          <span className="text-xs text-gray-500">há 10 minutos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-2 border-t border-gray-200 bg-gray-50">
                  <button className="w-full text-center py-2 text-sm font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors">
                    Ver todas as notificações
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg hidden sm:block">
            <Cog6ToothIcon className="w-5 h-5" />
          </button>

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-gray-200 cursor-pointer group"
            >
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Luciano Gomes</div>
                <div className="text-xs text-gray-600">854 Pontos</div>
              </div>
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User"
                className="w-8 h-8 rounded-full ring-2 ring-white"
              />
            </button>

            {/* User Menu Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-300 z-50">
                <div className="p-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Luciano Gomes</div>
                      <div className="text-xs text-gray-500">luciano@email.com</div>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <button 
                    onClick={() => {
                      setShowUserMenu(false);
                      handleLogout();
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2"
                  >
                    <ArrowRightOnRectangleIcon className="w-4 h-4" />
                    Sair
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 