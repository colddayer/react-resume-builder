import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, Document, Page } from '@react-pdf/renderer';
import Easy from './template/EasyStyle';
import { injectFont } from './static/font';

injectFont();

const App = () => {
  return (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
      <Document>
        <Page style={{ fontFamily: 'Chinese' }}>
          <Easy />
        </Page>
      </Document>
    </PDFViewer>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
