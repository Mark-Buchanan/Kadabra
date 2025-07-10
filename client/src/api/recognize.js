export async function recognizeAudio(file) {
  const formData = new FormData();
  formData.append('audio', file);
  const response = await fetch('http://localhost:8000/recognize', {
    method: 'POST',
    body: formData,
  });
  return response.json();
}
