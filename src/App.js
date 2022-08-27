import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DemoOne from "./pages/DemoOne";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/demo1" element={<DemoOne />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
