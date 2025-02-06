import { HomeIcon, BookOpenIcon, UserGroupIcon,CalendarIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import logoImg from '@assets/logo.jpg'
import { ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { useDashboard } from '../hooks/useDashboard'
import Header from '../../../Components/Layout/Header'

const learningTools = [

  {
    title: 'Anotações',
    icon: BookOpenIcon,
    path: '/dashboard/notes',
    description: 'Suas anotações de aula'
  },
  {
    title: 'Flashcards',
    icon: ClockIcon,
    path: '/dashboard/flashcards',
    description: 'Memorização ativa'
  },
  {
    title: 'Calendário',
    icon: CalendarIcon,
    path: '/dashboard/calendar',
    description: 'Agenda de estudos'
  },
  {
    title: 'Biblioteca',
    icon: BookmarkIcon,
    path: '/dashboard/library',
    description: 'Material complementar'
  },
  {
    title: 'Meus Certificados',
    icon: AcademicCapIcon,
    path: '/dashboard/certificates',
    description: 'Suas conquistas'
  },
]

export default function DashboardScreen() {
  const navigate = useNavigate();
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    showNotifications,
    setShowNotifications,
    showUserMenu,
    setShowUserMenu,
    notifications,
    unreadCount,
    handleLogout,
    notificationsRef,
    userMenuRef,
  } = useDashboard()

  const menuItems = [
    { 
      title: 'Página Inicial',
      icon: HomeIcon,
      path: '/dashboard',
      badge: null
    },
    { 
      title: 'Meus Cursos',
      icon: BookOpenIcon,
      path: '/dashboard/courses',
      badge: '3'
    },
    { 
      title: 'Catálogo',
      icon: BookOpenIcon,
      path: '/dashboard/catalog',
      badge: '6'
    },
    { 
      title: 'Comunidade',
      icon: UserGroupIcon,
      path: '/dashboard/community',
      badge: '25+'
    }
  ]

  const handleMenuClick = (path: string) => {
    navigate(path);
    setIsSidebarOpen(false);
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Overlay para mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-40
        w-[280px] lg:w-64 
        transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200  gap-2">
          <img src={logoImg} alt="Logo" className="h-14" />
          <h1 className="text-2xl font-bold">OK! Educa</h1>
        </div>

        {/* Menu */}
        <nav className="p-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <div
                key={item.title}
                onClick={() => handleMenuClick(item.path)}
                className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors group relative cursor-pointer"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
                {item.badge && (
                  <span className="absolute right-3 bg-purple-100 text-purple-600 text-xs font-medium px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Ferramentas
            </h3>
            <div className="mt-2 space-y-1">
            

              {learningTools.map((tool) => (
                <Link
                  key={tool.title}
                  to={tool.path}
                  className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors"
                >
                  <tool.icon className="w-5 h-5" />
                  <span className="font-medium">{tool.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        <Header 
          setIsSidebarOpen={setIsSidebarOpen}
          notificationsRef={notificationsRef}
          userMenuRef={userMenuRef}
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
          showUserMenu={showUserMenu}
          setShowUserMenu={setShowUserMenu}
          unreadCount={unreadCount}
          notifications={notifications}
          handleLogout={handleLogout}
        />

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
