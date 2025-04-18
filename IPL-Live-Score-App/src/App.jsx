import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import HomePage from "./page/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<HomePage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
