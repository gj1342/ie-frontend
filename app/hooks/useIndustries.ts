import { useState, useEffect } from 'react';
import { apiService } from '~/services/api';
import type { ApiOption } from '~/types/api';

interface UseIndustriesReturn {
  industries: { value: string; label: string }[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const FALLBACK_INDUSTRIES = [
  { value: "healthcare", label: "Healthcare" },
  { value: "technology", label: "Technology" },
  { value: "finance", label: "Finance" },
];

export function useIndustries(): UseIndustriesReturn {
  const [industries, setIndustries] = useState<{ value: string; label: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchIndustries = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data: any[] = await apiService.getIndustries();
      const options = data.map((item, index) => ({
        value: item._id || `industry-${index}`,
        label: item.name
      }));
      
      setIndustries(options);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch industries';
      setError(errorMessage);
      setIndustries(FALLBACK_INDUSTRIES);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIndustries();
  }, []);

  return { 
    industries, 
    loading, 
    error, 
    refetch: fetchIndustries 
  };
}