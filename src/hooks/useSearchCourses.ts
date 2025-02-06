import { useNavigate } from 'react-router-dom';

export function useSearchCourses() {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/dashboard/catalog?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return { handleSearch };
} 