import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTokenData } from '../utils/apiClient';

const TokenPage = () => {
  const { tokenId } = useParams(); // Assuming you are using react-router and tokenId is a URL param
  const [tokenData, setTokenData] = useState(null); // Token data state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch token data using the API client function
        const response = await fetchTokenData(tokenId);

        if (response.tokens && response.tokens.length > 0) {
          setTokenData(response.tokens[0]); // Assuming API returns a list of tokens
        } else {
          setTokenData(null);
        }
      } catch (err) {
        setError(err.message || 'Failed to fetch token data');
      } finally {
        setLoading(false);
      }
    };

    if (tokenId) {
      fetchData();
    }
  }, [tokenId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (!tokenData) {
    return <p>No token data available.</p>;
  }

  return (
    <div>
      <h1>{tokenData.name}</h1>
      <p>Symbol: {tokenData.symbol}</p>
      <p>Decimals: {tokenData.decimals}</p>
      {/* Add more details if available in the API response */}
    </div>
  );
};

export default TokenPage;
