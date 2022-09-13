import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Landing />} />

          <Route path="*" />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
