import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface Notification {
  id: number
  title: string
  message: string
  time: string
  read: boolean
  type: 'course' | 'activity' | 'certificate'
}


// Dados mockados de notificações
const notifications: Notification[] = [
  {
    id: 1,
    title: 'Nova aula disponível',
    message: 'A aula "Email Marketing" do curso Marketing Digital já está disponível!',
    time: '5 minutos atrás',
    read: false,
    type: 'course'
  },
  {
    id: 2,
    title: 'Lembrete de atividade',
    message: 'Não se esqueça de entregar a atividade do módulo Gestão Financeira',
    time: '1 hora atrás',
    read: false,
    type: 'activity'
  },
  {
    id: 3,
    title: 'Certificado emitido',
    message: 'Seu certificado do curso Social Media está disponível',
    time: '2 dias atrás',
    read: true,
    type: 'certificate'
  }
]

export const useDashboard = () => {
  const navigate = useNavigate()
  
  const [searchQuery, setSearchQuery] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  
  const notificationsRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)

  const unreadCount = notifications.filter(n => !n.read).length

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    
    navigate('/login', { replace: true })
  }

  return {
    searchQuery,
    setSearchQuery,
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
  }
} 