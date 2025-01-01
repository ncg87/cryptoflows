import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TokenPage = () => {
  const { token } = useParams();
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(`/api/crypto/${token}`); // Example endpoint
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto details:", error);
      }
    };

    fetchCryptoData();
  }, [token]);

  if (!cryptoData) return <p>Loading...</p>;

  return (
    <div>
      <h1>{cryptoData.name}</h1>
      <p>Symbol: {cryptoData.symbol}</p>
      <p>Market Cap: {cryptoData.marketCap}</p>
      <p>Price: ${cryptoData.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TokenPage;
