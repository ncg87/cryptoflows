import axios from 'axios';

//console.log('API Base URL:', import.meta.env.VITE_API_BASE_URL);
//console.log('API Key:', import.meta.env.VITE_API_KEY);

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'api-key': import.meta.env.VITE_API_KEY, 
  },
});

// Function to fetch volume data
export const fetchVolume = async (startTime, endTime, dexId = 'uniswap_v3') => {
  try {
    const params = { start_time: startTime, end_time: endTime };
    if (dexId) params.dex_id = dexId;

    const response = await apiClient.get('/volume', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching volume data:', error.message);
    throw error;
  }
};

// Function to fetch data for a single symbol
export const fetchTokenData = async (symbol) => {
  try {
    const params = { symbol };

    const response = await apiClient.get('/tokens', { params });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for symbol ${symbol}:`, error.message);
    throw error;
  }
};

export default apiClient;
