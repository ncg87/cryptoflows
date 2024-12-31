import React, { useEffect, useState } from 'react';
import { fetchVolume } from '../utils/apiClient';

const VolumeData = () => {
  const [volumeData, setVolumeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVolumeData = async () => {
      const now = Math.floor(Date.now() / 1000); // Current timestamp in seconds
      const oneDayAgo = now - 24 * 60 * 60; // 24 hours ago

      try {
        const data = await fetchVolume(oneDayAgo, now);
        setVolumeData(data);
      } catch (err) {
        setError('Failed to fetch volume data.');
        console.error(err);
      }
    };

    getVolumeData();
  }, []);

  return (
    <div>
      <h1>Volume Data (Last 24 Hours)</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {volumeData ? (
        <pre>{JSON.stringify(volumeData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VolumeData;
