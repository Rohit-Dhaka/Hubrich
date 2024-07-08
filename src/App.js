import './App.css';
import './assets/css/root.css'
import ClientsSection from './components/ClientsSection';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import LawyerSection from './components/LawyerSection';
import Nonbinding from './components/Nonbinding';
import Overyourex from './components/Overyourex';
import SeparationSection from './components/SeparationSection';
import TargetSection from './components/TargetSection';
import WillgetSection from './components/WillgetSection';
import YourfaltSection from './components/YourfaltSection';

function App() {
  return (
    <>
      <HeroSection />
      <YourfaltSection />
      <WillgetSection />
      <TargetSection />
      <SeparationSection />
      <Overyourex />
      <LawyerSection />
      <ClientsSection />
      <Nonbinding />
      <FooterSection />
    </>
  );
}

export default App;
