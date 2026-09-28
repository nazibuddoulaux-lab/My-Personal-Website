import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Home from './pages/Home'
import CaseStudyAI from './pages/CaseStudyAI'

function App() {
  useSmoothScroll()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/ai-analytics-platform" element={<CaseStudyAI />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
