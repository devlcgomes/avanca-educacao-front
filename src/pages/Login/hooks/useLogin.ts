import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface OkDocsFormData {
  tipo_usua: string
  ndoc_usua: string
  senha: string
}

interface LoginFormData {
  email: string
  password: string
}

const api = axios.create({
  baseURL: '/okdocs',
  headers: {
    'Content-Type': 'application/json'
  }
})

export function useLogin() {
  const navigate = useNavigate()
  const [showOkDocsModal, setShowOkDocsModal] = useState(false)
  const [okDocsFormData, setOkDocsFormData] = useState<OkDocsFormData>({
    tipo_usua: '0',
    ndoc_usua: '',
    senha: ''
  })
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  const handleOkDocsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await api.post('/servicos/api/auth.php', {
        tipo_usua: okDocsFormData.tipo_usua,
        ndoc_usua: okDocsFormData.ndoc_usua,
        senha: okDocsFormData.senha
      })

      console.log('Resposta da API:', response.data)

      if (response.status === 200) {
        setShowOkDocsModal(false)
        navigate('/dashboard')
      } else {
        alert('Erro ao fazer login: ' + (response.data.message || 'Tente novamente'))
      }

    } catch (error) {
      console.error('Erro ao fazer login:', error)
      if (axios.isAxiosError(error)) {
        alert('Erro ao fazer login: ' + (error.response?.data?.message || 'Tente novamente'))
      } else {
        alert('Erro ao conectar com o servidor. Por favor, tente novamente.')
      }
    }
  }

  return {
    showOkDocsModal,
    setShowOkDocsModal,
    okDocsFormData,
    setOkDocsFormData,
    formData,
    setFormData,
    handleSubmit,
    handleOkDocsSubmit
  }
} 