import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ClassRoomScreen from './ClassRoomScreen';
import ClassroomLoading from '../../../Components/Loading/ClassroomLoading';

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

export default function ClassRoomWrapper() {
  const { courseId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [courseData, setCourseData] = useState<CourseData | null>(null);

  useEffect(() => {
    const loadCourseData = async () => {
      setIsLoading(true);
      try {
        // Simula uma chamada à API
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock de dados do curso
        const data: CourseData = {
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
                  title: "Email Marketing",
                  duration: "15 min",
                  completed: false,
                  active: true
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
} 