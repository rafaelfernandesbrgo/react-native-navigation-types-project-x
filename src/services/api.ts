import {API_URL} from '../constants';

class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorMessage = await response.text().catch(() => response.statusText);
    throw new ApiError(
      response.status,
      response.statusText,
      errorMessage || `HTTP Error: ${response.status}`,
    );
  }

  try {
    return await response.json();
  } catch (error) {
    throw new Error('Failed to parse response JSON');
  }
};

export const api = {
  get: async <T>(endpoint: string): Promise<T> => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`);
      return handleResponse<T>(response);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new Error(
        `Network request failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  },

  post: async <T>(endpoint: string, data: unknown): Promise<T> => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return handleResponse<T>(response);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new Error(
        `Network request failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  },
};
