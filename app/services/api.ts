import type { ApiOption, FilterData, IdeaResponse, IdeaGenerateResponse } from '~/types/api';

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
      let details = '';
      try {
        const err = await response.json();
        if (err?.message) details = ` - ${err.message}`;
      } catch {
        try {
          const text = await response.text();
          if (text) details = ` - ${text}`;
        } catch {}
      }
      throw new Error(`API request failed: ${response.status} ${response.statusText}${details}`);
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

  async generateIdea(filters: FilterData): Promise<IdeaGenerateResponse> {
    const normalizedComplexity = (filters.complexity === 'expert' ? 'advanced' : filters.complexity);
    const payload = {
      industry: filters.industry,
      projectType: filters.projectType,
      complexity: normalizedComplexity,
      userInterests: filters.userInterest
        ? filters.userInterest.split(',').map(s => s.trim()).filter(Boolean)
        : undefined,
    };

    return this.request<IdeaGenerateResponse>('/ideas/generate', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
}

export const apiService = new ApiService();