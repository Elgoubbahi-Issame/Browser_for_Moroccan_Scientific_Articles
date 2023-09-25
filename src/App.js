import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Home from './comp/HomePage/home'
import Articles from './comp/articlesPage/indexAll'
import Admin from './comp/adminPage/AdminAll'
import { AnimatePresence } from 'framer-motion'

function App() {
  // const location = useLocation();
  return (
    <Router>
      <div className="App">
        <AnimatePresence>
          <Routes>
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Articles" element={<Articles />} />
            <Route exact path="/Articles/:id" element={<Articles />} />
            <Route exact path="/Admin/*" element={<Admin />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
