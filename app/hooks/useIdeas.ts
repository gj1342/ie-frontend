import { useState } from 'react';
import { apiService } from '~/services/api';
import type { FilterData, IdeaResponse, IdeaGenerateResponse } from '~/types/api';

interface UseIdeasReturn {
  generateIdea: (filters: FilterData) => Promise<IdeaResponse | null>;
  loading: boolean;
  error: string | null;
}

export function useIdeas(): UseIdeasReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateIdea = async (filters: FilterData): Promise<IdeaResponse | null> => {
    try {
      setLoading(true);
      setError(null);
      
      const result: IdeaGenerateResponse = await apiService.generateIdea(filters);
      return result.idea;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate idea';
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { 
    generateIdea, 
    loading, 
    error 
  };
}
