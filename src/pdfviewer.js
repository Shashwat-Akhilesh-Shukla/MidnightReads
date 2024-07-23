import { Document, Page } from 'react-pdf';

const PdfViewer = ({ pdfUrl }) => {
  const onDocumentLoadSuccess = ({ numPages }) => {
    // You can use numPages to implement page navigation if needed
  };

  return (
    <div className="pdf-container">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfViewer;
