import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchTokenMetadata } from "../utils/apiClient";

const TokenDetails = ({ tokenId }) => {
  const [tokenData, setTokenData] = useState(null); // Token data state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch token data using the API client function with tokenId as id
        const response = await fetchTokenMetadata({ tokenId });
        console.log("TokenDetails response:", response);

        // Check if response is an array and has at least one element
        if (response && response.length > 0) {
          setTokenData(response[0]); // Assign the first element to tokenData
        } else {
          setTokenData(null);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch token data");
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
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  if (!tokenData) {
    return <p>No token data available.</p>;
  }

  console.log("TokenDetails tokenData:", tokenData);

  return (
    <div>
      <h1>{tokenData.name}</h1>
      <p>Symbol: {tokenData.symbol}</p>
      <p>Address: {tokenData.id}</p>
      {/* Add more details if available in the API response */}
    </div>
  );
};

TokenDetails.propTypes = {
  tokenId: PropTypes.string.isRequired,
};

export default TokenDetails;
