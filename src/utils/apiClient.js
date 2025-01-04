import axios from 'axios';

//console.log('API Base URL:', import.meta.env.VITE_API_BASE_URL);
//console.log('API Key:', import.meta.env.VITE_API_KEY);

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'api-key': import.meta.env.VITE_API_KEY, 
  },
});

// Function to fetch volume data
export const fetchDEXVolume = async (startTime, endTime, dexId = null) => {
  try {
    const params = { start_time: startTime, end_time: endTime };
    if (dexId) params.dex_id = dexId;

    const response = await apiClient.get('/dex_volume', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching volume data:', error.message);
    throw error;
  }
};

export const fetchTokenMetadata = async ({ tokenId, symbol, name }) => {
  try {
    const params = {};
    if (tokenId) params.token_id = tokenId;
    if (symbol) params.symbol = symbol;
    if (name) params.name = name;

    const response = await apiClient.get('/token_metadata', { params });
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching token metadata: ${error.message}`
    );
    throw error;
  }
};

// Function to fetch cryptocurrency volume
export const fetchCryptoVolume = async (startTime, endTime, cryptoId = null) => {
  try {
    const params = { start_time: startTime, end_time: endTime, crypto_id: cryptoId };

    const response = await apiClient.get('/crypto_volume', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptocurrency volume:', error.message);
    throw error;
  }
};



export default apiClient;
