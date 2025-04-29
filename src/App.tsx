import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GuidePage from './pages/GuidePage'
import ScrollToTop from './components/ScrollToTop'
import StartPage from './pages/StartPage';
import SPANISHLandingPage from './pages/SPANISHLandingPage'
import SPANISHGuidePage from './pages/SPANISHGuidePage'
import SPANISHStartPage from './pages/SPANISHStartPage';




function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/es/" element={<SPANISHLandingPage />} />
        <Route path="/es/guide" element={<SPANISHGuidePage />} />
        <Route path="/es/start" element={<SPANISHStartPage />} />



      </Routes>
    </>
  )
}

export default App
