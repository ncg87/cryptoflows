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
          Object.entries(volumeData).map(([name, volume]) => ({
            token: name,
            volume,
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

  const handleTokenClick = (token) => {
    navigate(`/crypto/${token}`); // Navigate to crypto details page
  };

  if (loading) return <p>Loading...</p>;

  return (
    <GeneralList
      items={data}
      headers={[
        { key: "token", label: "Token" },
        { key: "volume", label: "Volume" },
      ]}
      pageSize={5}
      onTokenClick={handleTokenClick}
    />
  );
};

export default VolumeData;
