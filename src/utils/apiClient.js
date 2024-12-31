import axios from 'axios';

// Create an instance of Axios with default configurations
const apiClient = axios.create({
  baseURL: 'http://54.174.28.68', // Replace with your backend's base URL
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch volume data
export const fetchVolume = async (startTime, endTime, dexId = null) => {
  try {
    const params = { start_time: startTime, end_time: endTime };
    if (dexId) params.dex_id = dexId;

    const response = await apiClient.get('/volume', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching volume data:', error);
    throw error;
  }
};


// Function to fetch transactions
export const fetchTransactions = async (startTime, endTime, dexId = null) => {
  try {
    const params = { start_time: startTime, end_time: endTime };
    if (dexId) params.dex_id = dexId;

    const response = await apiClient.get('/transactions', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

export default apiClient;
