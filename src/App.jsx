import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Brands from './pages/Brands';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import DataCenterServices from './pages/DataCenterServices';
import TelecomManagementServices from './pages/TelecomManagementServices';
import InfrastructureServices from './pages/InfrastructureServices';
import SecurityServices from './pages/SecurityServices';
import CloudSolutions from './pages/CloudSolutions';
import NetworkDesign from './pages/NetworkDesign';
import Saas from './pages/Saas';
import AiDevelopment from './pages/AiDevelopment';
import Scada from './pages/Scada';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/data-center" element={<DataCenterServices />} />
        <Route path="/services/telecom-management" element={<TelecomManagementServices />} />
        <Route path="/services/infrastructure" element={<InfrastructureServices />} />
        <Route path="/services/security" element={<SecurityServices />} />
        <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/services/network-design" element={<NetworkDesign />} />
        <Route path="/services/saas" element={<Saas />} />
        <Route path="/services/ai-development" element={<AiDevelopment />} />
        <Route path="/services/scada" element={<Scada />} />
      </Routes>
    </Router>
  );
}

export default App;
