import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsCondition from "./components/pages/TermsCondition";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      <Route path="/terms-condition" element={<TermsCondition />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
