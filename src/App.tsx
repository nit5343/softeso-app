import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import WebDevelopment from './pages/Services/WebDevelopment';
import MobileDevelopment from './pages/Services/MobileDevelopment';
import UIUXDesign from './pages/Services/UIUXDesign';
import CloudDevOps from './pages/Services/CloudDevOps';
import { ROUTES } from './constants/routes';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.ABOUT} element={<About />} />
              <Route path={ROUTES.CONTACT} element={<Contact />} />
              <Route path={ROUTES.TERMS} element={<Terms />} />
              <Route path={ROUTES.REFUND} element={<Refund />} />
              <Route path={ROUTES.SERVICES.WEB_DEVELOPMENT} element={<WebDevelopment />} />
              <Route path={ROUTES.SERVICES.MOBILE_DEVELOPMENT} element={<MobileDevelopment />} />
              <Route path={ROUTES.SERVICES.UI_UX_DESIGN} element={<UIUXDesign />} />
              <Route path={ROUTES.SERVICES.CLOUD_DEVOPS} element={<CloudDevOps />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;