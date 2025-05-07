import React, { useState } from "react";
import { ArrowLeftIcon, PlaneTakeoffIcon, CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Define the trip creation steps
type Step = "destination" | "dates" | "travelers" | "confirmation";

// Popular destinations data
const popularDestinations = [
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    image:
      "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.Mxsb8sDA7x_gcKC3tr_sSQHaD5&rs=1&pid=ImgDetMain",
  },
  {
    id: "newyork",
    name: "New York",
    country: "USA",
    image:
      "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const CreateTrip: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>("destination");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const navigate = useNavigate();

  const goBack = () => {
    if (currentStep === "destination") {
      navigate(-1);
    } else if (currentStep === "dates") {
      setCurrentStep("destination");
    } else if (currentStep === "travelers") {
      setCurrentStep("dates");
    } else {
      setCurrentStep("travelers");
    }
  };

  const goNext = () => {
    if (currentStep === "destination" && destination) {
      setCurrentStep("dates");
    } else if (currentStep === "dates" && startDate && endDate) {
      setCurrentStep("travelers");
    } else if (currentStep === "travelers") {
      setCurrentStep("confirmation");
    } else if (currentStep === "confirmation") {
      // In a real app, you would save the trip data
      navigate("/");
    }
  };

  const isNextDisabled = () => {
    if (currentStep === "destination" && !destination) return true;
    if (currentStep === "dates" && (!startDate || !endDate)) return true;
    return false;
  };

  // Generate step title based on current step
  const getStepTitle = () => {
    switch (currentStep) {
      case "destination":
        return "Where to?";
      case "dates":
        return "When are you going?";
      case "travelers":
        return "Who is going?";
      case "confirmation":
        return "Ready to create your trip!";
      default:
        return "";
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-5 border-b border-gray-200 flex items-center">
        <button onClick={goBack} className="p-2 rounded-full hover:bg-gray-100">
          <ArrowLeftIcon size={20} />
        </button>
        <h1 className="text-lg font-semibold ml-2">{getStepTitle()}</h1>
      </div>

      <div className="p-5">
        {currentStep === "destination" && (
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a destination"
                className="w-full p-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Popular Destinations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {popularDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => setDestination(dest.name)}
                    className={`
                      relative rounded-xl overflow-hidden h-32 cursor-pointer
                      ${
                        destination === dest.name
                          ? "ring-2 ring-purple-500"
                          : ""
                      }
                    `}
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute inset-0 p-3 flex flex-col justify-end">
                      <h4 className="text-white font-semibold">{dest.name}</h4>
                      <p className="text-white text-xs opacity-90">
                        {dest.country}
                      </p>
                    </div>
                    {destination === dest.name && (
                      <div className="absolute top-2 right-2 bg-purple-500 rounded-full p-1">
                        <CheckIcon size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === "dates" && (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Departure
                </label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Return
                </label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  min={startDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
            </div>

            {startDate && endDate && (
              <div className="bg-gray-50 p-3 rounded-xl">
                <p className="text-sm text-gray-600">
                  Your trip to{" "}
                  <span className="font-semibold">{destination}</span> will be
                  for{" "}
                  {Math.ceil(
                    (new Date(endDate).getTime() -
                      new Date(startDate).getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}{" "}
                  days from {formatDate(startDate)} to {formatDate(endDate)}.
                </p>
              </div>
            )}
          </div>
        )}

        {currentStep === "travelers" && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="travelers"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Number of Travelers
              </label>
              <div className="flex items-center">
                <button
                  onClick={() => setTravelers((prev) => Math.max(1, prev - 1))}
                  className="p-2 border border-gray-300 rounded-l-xl bg-gray-50"
                  disabled={travelers <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  id="travelers"
                  min="1"
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                  className="w-16 p-2 text-center border-t border-b border-gray-300"
                />
                <button
                  onClick={() => setTravelers((prev) => prev + 1)}
                  className="p-2 border border-gray-300 rounded-r-xl bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-medium mb-2">Trip Summary</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-gray-600">Destination:</span>{" "}
                  <span className="font-medium">{destination}</span>
                </p>
                <p>
                  <span className="text-gray-600">Dates:</span>{" "}
                  <span className="font-medium">
                    {formatDate(startDate)} - {formatDate(endDate)}
                  </span>
                </p>
                <p>
                  <span className="text-gray-600">Travelers:</span>{" "}
                  <span className="font-medium">{travelers}</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {currentStep === "confirmation" && (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5">
              <PlaneTakeoffIcon size={40} className="text-green-600" />
            </div>

            <h2 className="text-xl font-bold mb-3">Ready for takeoff!</h2>
            <p className="text-center text-gray-600 mb-5">
              Your trip to {destination} is ready to be created. We'll help you
              plan everything from flights to activities.
            </p>

            <div className="bg-gray-50 p-4 rounded-xl w-full mb-5">
              <h3 className="font-medium mb-2 text-center">Trip Summary</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-gray-600">Destination:</span>{" "}
                  <span className="font-medium">{destination}</span>
                </p>
                <p>
                  <span className="text-gray-600">Dates:</span>{" "}
                  <span className="font-medium">
                    {formatDate(startDate)} - {formatDate(endDate)}
                  </span>
                </p>
                <p>
                  <span className="text-gray-600">Travelers:</span>{" "}
                  <span className="font-medium">{travelers}</span>
                </p>
                <p>
                  <span className="text-gray-600">Duration:</span>{" "}
                  <span className="font-medium">
                    {Math.ceil(
                      (new Date(endDate).getTime() -
                        new Date(startDate).getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    days
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-5 bg-white border-t border-gray-200">
        <button
          onClick={goNext}
          disabled={isNextDisabled()}
          className={`
            w-full py-3 px-4 rounded-xl text-white font-medium
            ${
              isNextDisabled()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 transition-colors"
            }
          `}
        >
          {currentStep === "confirmation" ? "Create Trip" : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default CreateTrip;
