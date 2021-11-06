import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, Document, Page } from '@react-pdf/renderer';

const App = () => {
  return (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
      <Document>
        <Page></Page>
      </Document>
    </PDFViewer>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
