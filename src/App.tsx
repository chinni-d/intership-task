import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import CreateTrip from "./pages/CreateTrip";
import Trips from "./pages/Trips";
import Profile from "./pages/Profile";
import Onboarding from "./pages/Onboarding";
import TravelPreferences from "./pages/TravelPreferences";

function App() {
  const hasCompletedOnboarding = true;

  return (
    <Router>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route
          path="/"
          element={
            hasCompletedOnboarding ? <Home /> : <Navigate to="/onboarding" />
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/travel-preferences"
          element={<TravelPreferences onContinue={() => {}} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
