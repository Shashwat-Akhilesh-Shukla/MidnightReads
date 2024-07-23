// Example using fetch API in React
const fetchPdf = async (pdfId) => {
  const response = await fetch('/get-pdf/${pdfId}/');
  if (!response.ok) {
    throw new Error('Error fetching PDF');
  }
  return await response.blob();
};

export default fetchPdf;