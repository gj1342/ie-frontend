import type { ApiOption, FilterData, IdeaResponse } from '~/types/api';

const API_BASE_URL = 'https://ie-backend-production.up.railway.app/api/v1';

class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }
    
    const result = await response.json();
    
    if (result.success && result.data !== undefined) {
      return result.data;
    }
    
    return result;
  }

  async getIndustries(): Promise<ApiOption[]> {
    return this.request<ApiOption[]>('/industries');
  }

  async getProjectTypes(): Promise<ApiOption[]> {
    return this.request<ApiOption[]>('/project-types');
  }

  async generateIdea(filters: FilterData): Promise<IdeaResponse> {
    return this.request<IdeaResponse>('/ideas/generate', {
      method: 'POST',
      body: JSON.stringify(filters),
    });
  }
}

export const apiService = new ApiService();