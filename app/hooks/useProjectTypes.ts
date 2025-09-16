import { useState, useEffect } from 'react';
import { apiService } from '~/services/api';
import type { ApiOption } from '~/types/api';

interface UseProjectTypesReturn {
  projectTypes: { value: string; label: string }[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const FALLBACK_PROJECT_TYPES = [
  { value: "web-development", label: "Web Development" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "desktop-app", label: "Desktop App" },
];

export function useProjectTypes(): UseProjectTypesReturn {
  const [projectTypes, setProjectTypes] = useState<{ value: string; label: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjectTypes = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data: any[] = await apiService.getProjectTypes();
      const options = data.map((item, index) => ({
        value: item._id || `project-type-${index}`,
        label: item.name
      }));
      
      setProjectTypes(options);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch project types';
      setError(errorMessage);
      setProjectTypes(FALLBACK_PROJECT_TYPES);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectTypes();
  }, []);

  return { 
    projectTypes, 
    loading, 
    error, 
    refetch: fetchProjectTypes 
  };
}