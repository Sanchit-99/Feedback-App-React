import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutLinkIcon from "./components/AboutLinkIcon";
import {FeedbackProvider} from "./context/FeedbackContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header text={"Feedback UI"} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="container">
                  <FeedbackForm  />
                  <FeedbackStats />
                  <FeedbackList
                  />
                </div>
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutLinkIcon />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
