import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";

import ExportPDFView from "./OrderAccecptance/Index";
import ExportPDFViewTwo from "./OrderAccecptanceTwo/Index";
import ExportPDFViewThree from "./OrderAccecptanceThree/Index";

function App() {
  return (
    <div className="main1">
      <PDFViewer width="100%" height="100%">
        {/* <ExportPDFView /> */}
        {/* <ExportPDFViewTwo /> */}
        <ExportPDFViewThree />
      </PDFViewer>
    </div>
  );
}

export default App;
