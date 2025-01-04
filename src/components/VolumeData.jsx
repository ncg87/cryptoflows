import React, { useEffect, useState } from "react";
import GeneralList from "./GeneralList";
import { fetchVolume } from "../utils/apiClient";
import { useNavigate } from "react-router-dom";

const VolumeData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getVolumeData = async () => {
      try {
        const now = Math.floor(Date.now() / 1000);
        const oneDayAgo = now - 24 * 60 * 60;
        const volumeData = await fetchVolume(oneDayAgo, now);
        setData(
          volumeData.map((token) => ({
            id: token.id,
            displayName: `${token.name} (${token.symbol})`,
            volume: token.volume,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch volume data", error);
      } finally {
        setLoading(false);
      }
    };
    getVolumeData();
  }, []);

  const handleTokenClick = (tokenId) => {
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

export default VolumeData;
