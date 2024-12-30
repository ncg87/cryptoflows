import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Update with your API Gateway URL
  timeout: 10000,
});

export const fetchTransactions = async () => {
  const response = await api.get('/transactions');
  return response.data;
};

export const fetchTransactionDetail = async (id) => {
  const response = await api.get(`/transactions/${id}`);
  return response.data;
};

export default api;
