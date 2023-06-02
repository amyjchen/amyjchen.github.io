import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import { ResumeProvider } from './components/contexts/ResumeContext';
import JobAlert from './components/shared/niche/JobAlert';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/resume">
          <ResumeProvider>
            <ResumePage />
          </ResumeProvider>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
      <JobAlert />
    </Router>
  );
}

export default App;
