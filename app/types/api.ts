export interface ApiOption {
  _id: string;
  name: string;
  description?: string;
  isActive: boolean;
}

export interface FilterData {
  industry: string;
  projectType: string;
  complexity: string;
  userInterest: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface IdeaRequest extends FilterData {}

export interface IdeaResponse {
  title: string;
  description: string;
  features: string[];
  objectives: string[];
  challenges: string[];
  estimatedDuration: string;
}

export interface IdeaGenerateResponse {
  idea: IdeaResponse;
  generatedAt: string;
}