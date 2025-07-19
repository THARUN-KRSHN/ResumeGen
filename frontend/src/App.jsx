import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Main from './pages/Main';
import ResumeBuilder from './pages/ResumeBuilder';
import ATSChecker from './pages/AtsChecking';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page (no header/footer) */}
        <Route path="/" element={<Home />} />

        {/* Pages with header/footer */}
        <Route
          path="/main"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/builder"
          element={
            <>
              <Header />
              <ResumeBuilder />
              <Footer />
            </>
          }
        />
        <Route
          path="/ats-checker"
          element={
            <>
              <Header />
              <ATSChecker />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
