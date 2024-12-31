import React, { useEffect, useState } from 'react';
import { fetchVolume } from '../utils/apiClient';

const VolumeData = () => {
  const [volumeData, setVolumeData] = useState(null);
  const [loading, setLoading] = useState(true);
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
        console.error(err.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    getVolumeData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h1>Volume Data (Last 24 Hours)</h1>
      {volumeData ? (
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(volumeData).map(([token, volume]) => (
              <tr key={token}>
                <td>{token}</td>
                <td>{volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default VolumeData;
