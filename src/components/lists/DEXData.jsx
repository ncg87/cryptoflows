import React, { useEffect, useState } from "react";
import GeneralList from "./GeneralList";
import { fetchCryptoVolume } from "../../utils/apiClient";
import { useNavigate } from "react-router-dom";

const DEXData = ({ tokenId = null }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCryptoVolumeData = async () => {
      try {
        const now = Math.floor(Date.now() / 1000);
        const oneDayAgo = now - 24 * 60 * 60;
        if (tokenId) {
          console.log("Fetching token metadata for tokenId:", tokenId);
        }
        const volumeData = await fetchCryptoVolume(oneDayAgo, now, tokenId);

        //console.log('Received volume data:', volumeData);

        setData(
          volumeData.map((dex) => ({
            id: dex.id,
            displayName: `${dex.id}`,
            volume: dex.volume,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch cryptocurrency volume data", error);
      } finally {
        setLoading(false);
      }
    };

    getCryptoVolumeData();
  }, [tokenId]);

  const handleDEXClick = (dexId) => {
    console.log('Clicked on DEX:', dexId);
    navigate(`/dexs/${dexId}`);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <GeneralList
      items={data}
      headers={[
        { key: "displayName", label: "DEX" },
        { key: "volume", label: "24 Hour Volume" },
      ]}
      pageSize={3}
      onTokenClick={(item) => handleDEXClick(item.id)}
    />
  );
};

export default DEXData;
