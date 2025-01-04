import React, { useEffect, useState } from "react";
import GeneralList from "./GeneralList";
import { fetchDEXVolume } from "../../utils/apiClient";
import { useNavigate } from "react-router-dom";

const TokenData = ({ dexId = null }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const getVolumeData = async () => {
      try {
        const now = Math.floor(Date.now() / 1000);
        const oneDayAgo = now - 24 * 60 * 60;
        if (dexId) {
          console.log("Fetching DEX volume data for dexId:", dexId);
        }
        const volumeData = await fetchDEXVolume(oneDayAgo, now, dexId);
        setData(
          volumeData.map((token) => ({
            id: token.id,
            displayName: `${token.name} (${token.symbol})`,
            volume: token.volume,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch DEX volume data", error);
      } finally {
        setLoading(false);
      }
    };
    getVolumeData();
  }, [dexId]);

  const handleTokenClick = (tokenId) => {
    //console.log('Clicked on token:', tokenId);
    navigate(`/tokens/${tokenId}`);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <GeneralList
      items={data}
      headers={[
        { key: "displayName", label: "Token" },
        { key: "volume", label: "24 Hour Volume" },
      ]}
      pageSize={5}
      onTokenClick={(item) => handleTokenClick(item.id)}
    />
  );
};

export default TokenData;
