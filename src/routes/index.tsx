import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginScreen from '../pages/Login/Layout/LoginScreen';
import DashboardScreen from '../pages/Dashboard/Layout/DashboardScreen';
import OverviewScreen from '../pages/Overview/Layout/OverviewScreen';
import CoursesScreen from '../pages/Courses/Layout/CoursesScreen';
import CatalogScreen from '../pages/Catalog/Layout/CatalogScreen';
import CommunityScreen from '../pages/Community/Layout/CommunityScreen';
import ClassRoomScreen from '../pages/Classroom/Layout/ClassRoomScreen';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ClassroomLoading from '../Components/Loading/ClassroomLoading';
import CertificatesScreen from '../pages/Certificates/Layout/CertificatesScreen';
import ValidateCertificateScreen from '../pages/Certificates/ValidateCertificate/ValidateCertificateScreen';

// Defina a interface para o tipo de dados do curso
interface CourseData {
  id: number;
  title: string;
  currentLesson: string;
  category: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  modules: {
    id: number;
    title: string;
    duration: string;
    lessons: {
      id: number;
      title: string;
      duration: string;
      completed: boolean;
      active: boolean;
    }[];
  }[];
}

// Wrapper para o ClassRoomScreen que pega o ID da URL e busca os dados do curso
const ClassRoomWrapper = () => {
  const { courseId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [courseData, setCourseData] = useState<CourseData | null>(null);

  useEffect(() => {
    const loadCourseData = async () => {
      setIsLoading(true);
      try {
        // Simula uma chamada à API
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Aqui você buscaria os dados do curso baseado no ID
        const data = {
          id: Number(courseId),
          title: "Marketing Digital",
          currentLesson: "Email Marketing",
          category: "Marketing",
          instructor: {
            name: "Ana Silva",
            role: "Marketing Specialist",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
          },
          modules: [
            {
              id: 1,
              title: "Fundamentos do Marketing Digital",
              duration: "45min",
              lessons: [
                {
                  id: 1,
                  title: "Introdução ao Marketing Digital",
                  duration: "10 min",
                  completed: true,
                  active: false
                },
                {
                  id: 2,
                  title: "Estratégias de Marketing",
                  duration: "15 min",
                  completed: true,
                  active: false
                },
                {
                  id: 3,
                  title: "Email Marketing",
                  duration: "12 min",
                  completed: false,
                  active: true
                },
                {
                  id: 4,
                  title: "Marketing de Conteúdo",
                  duration: "8 min",
                  completed: false,
                  active: false
                }
              ]
            },
            {
              id: 2,
              title: "Marketing nas Redes Sociais",
              duration: "1h 30min",
              lessons: [
                {
                  id: 5,
                  title: "Facebook Ads",
                  duration: "20 min",
                  completed: false,
                  active: false
                },
                {
                  id: 6,
                  title: "Instagram Marketing",
                  duration: "25 min",
                  completed: false,
                  active: false
                },
                {
                  id: 7,
                  title: "LinkedIn para Negócios",
                  duration: "15 min",
                  completed: false,
                  active: false
                },
                {
                  id: 8,
                  title: "TikTok Marketing",
                  duration: "30 min",
                  completed: false,
                  active: false
                }
              ]
            }
          ]
        };
        
        setCourseData(data);
      } catch (error) {
        console.error('Erro ao carregar dados do curso:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCourseData();
  }, [courseId]);

  if (isLoading) {
    return <ClassroomLoading />;
  }

  return courseData ? <ClassRoomScreen courseData={courseData} /> : null;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginScreen />,
  },
  {
    path: '/dashboard',
    element: <DashboardScreen />,
    errorElement: <Navigate to="/login" replace />,
    children: [
      {
        path: '',
        element: <OverviewScreen />
      },
      {
        path: 'courses',
        element: <CoursesScreen />
      },
      {
        path: 'classroom/:courseId',
        element: <ClassRoomWrapper />
      },
      {
        path: 'catalog',
        element: <CatalogScreen />
      },
      {
        path: 'community',
        element: <CommunityScreen />
      },
      {
        path: 'certificates',
        element: <CertificatesScreen />
      }
    ]
  },
  {
    path: '/validate-certificate',
    element: <ValidateCertificateScreen />
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  }
]); 