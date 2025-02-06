export interface InProgressCourse {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  progress: number;
  nextClass: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  lastAccess: string;
  duration: string;
  deadline: string;
  totalLessons: number;
  completedLessons: number;
  modules: {
    id: number;
    title: string;
    lessons: any[];
  }[];
} 