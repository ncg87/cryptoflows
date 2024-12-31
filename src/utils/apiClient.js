import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://54.174.28.68', // Gateway API URL
  timeout: 10000,
});

export const fetchVolume = async (startTime, endTime, dexId) => {
  const params = { start_time: startTime, end_time: endTime };
  if (dexId) params.dex_id = dexId;
  const response = await apiClient.get('/volume', { params });
  return response.data;
};

export const fetchTransactions = async (startTime, endTime, dexId) => {
  const params = { start_time: startTime, end_time: endTime };
  if (dexId) params.dex_id = dexId;
  const response = await apiClient.get('/transactions', { params });
  return response.data.transactions;
};
