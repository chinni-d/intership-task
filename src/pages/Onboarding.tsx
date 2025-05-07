import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TravelPreferences from "./TravelPreferences";
import UserProfile from "../components/Onboarding/UserProfile";

type Step = "userProfile" | "travelPreferences";

const Onboarding: React.FC = () => {
  const [step, setStep] = useState<Step>("userProfile");
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const navigate = useNavigate();

  const handleUserProfileComplete = (data: { name: string; email: string }) => {
    setUserData(data);
    setStep("travelPreferences");
  };

  const handleTravelPreferencesComplete = () => {
    // In a real app, you would save this data to your backend
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {step === "userProfile" && (
        <UserProfile onComplete={handleUserProfileComplete} />
      )}

      {step === "travelPreferences" && (
        <TravelPreferences onContinue={handleTravelPreferencesComplete} />
      )}
    </div>
  );
};

export default Onboarding;
