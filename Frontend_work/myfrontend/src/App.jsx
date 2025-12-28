import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SoftwareEngineering from './pages/solutions/SoftwareEngineering';
import AIAutomation from './pages/solutions/AIAutomation';
import DataAnalytics from './pages/solutions/DataAnalytics';
import TechnicalConsulting from './pages/solutions/TechnicalConsulting';
import Process from './pages/how-we-work/Process';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        {/* pt-20 creates 80px of space to prevent overlap with the h-20 navbar */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/solutions/software" element={<SoftwareEngineering />} />
            <Route path="/solutions/ai" element={<AIAutomation />} />
            <Route path="/solutions/data" element={<DataAnalytics/>} />
            <Route path="/solutions/consulting" element={<TechnicalConsulting/>} />
            <Route path="/how-we-work/Process" element={<Process/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;