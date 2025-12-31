import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SoftwareEngineering from './pages/solutions/SoftwareEngineering';
import AIAutomation from './pages/solutions/AIAutomation';
import DataAnalytics from './pages/solutions/DataAnalytics';
import TechnicalConsulting from './pages/solutions/TechnicalConsulting';
import Process from './pages/how-we-work/Process';
import DecisionFirst from './pages/how-we-work/DecisionFirst';
import QualitySecurity from './pages/how-we-work/QualitySecurity';
import Industries from './pages/industries';
import Company from './pages/Company';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
      
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/solutions/software" element={<SoftwareEngineering />} />
            <Route path="/solutions/ai" element={<AIAutomation />} />
            <Route path="/solutions/data" element={<DataAnalytics/>} />
            <Route path="/solutions/consulting" element={<TechnicalConsulting/>} />
            <Route path="/how-we-work/Process" element={<Process/>} />
            <Route path="/how-we-work/Approach" element={<DecisionFirst/>} />
            <Route path="/how-we-work/quality" element={<QualitySecurity/>} />
            <Route path="/industries" element={<Industries/>}/>
            <Route path="/company" element={<Company/>}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;