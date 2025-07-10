import React, { useState } from 'react';
import { recognizeAudio } from '../api/recognize';

function HomePage() {
  const [audioFile, setAudioFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!audioFile) return;
    setLoading(true);
    setResult(null);
    const res = await recognizeAudio(audioFile);
    setResult(res);
    setLoading(false);
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>Kadabra - Shazam Clone</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="audio/*" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>Recognize</button>
      </form>
      {loading && <p>Recognizing...</p>}
      {result && (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default HomePage;
