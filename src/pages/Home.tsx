import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRightIcon,
  CheckCircleIcon,
  Clock3Icon,
  SunIcon,
  MoonIcon,
  UserIcon,
  Book,
} from "lucide-react";
import AppLayout from "../components/Layout/AppLayout";

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppLayout>
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Hello Chhavi!</h1>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Ready for the trip?
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
              </button>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-xl font-semibold text-white">
                C
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Your Upcoming Trip</h2>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://hoponworld.com/wp-content/uploads/2021/05/tokyo-tower-japan-landmark-1200x900.jpg"
                alt="Tokyo"
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
              <div className="absolute top-4 left-4">
                <h3 className="text-4xl font-bold tracking-wider text-white">
                  TOKYO
                </h3>
                <p className="text-sm mt-1 text-white">
                  27.01.2025 - 02.02.2025
                </p>
              </div>
              <div className="absolute top-4 right-4 text-white">
                <ArrowUpRightIcon className="w-6 h-6" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-sm text-white">
                <div className="flex items-center">
                  <Clock3Icon
                    className="w-4 h-4 mr-1"
                    style={{ color: "#d1f462" }}
                  />

                  <span>
                    8 Days
                    <br />
                    Duration
                  </span>
                </div>
                <div className="flex items-center">
                  <UserIcon
                    className="w-4 h-4 mr-1"
                    style={{ color: "#d1f462" }}
                  />
                  <span>
                    4(2M,2F) <br />
                    Group Size
                  </span>
                </div>
                <div className="flex items-center">
                  <Book
                    className="w-4 h-4 mr-1 "
                    style={{ color: "#d1f462" }}
                  />
                  <span>
                    14 <br />
                    Activities
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Flight Details</h2>
              <button className="text-blue-500">See all</button>
            </div>
            <div className="bg-[#4052FF] rounded-3xl p-4 text-white">
              <p className="text-sm mb-2">26.01.2025, 10:50 am</p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">DEL</h3>
                  <p className="text-sm text-gray-200">Delhi, India</p>
                </div>
                <div className="flex-1 mx-4 relative">
                  <ArrowRight className="w-6 h-6" />

                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <div>
                      <h3 className="text-2xl font-bold">NRT</h3>
                      <p className="text-sm text-gray-200">Narita, Tokyo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Accommodation</h2>
              <button className="text-blue-500">See all</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`rounded-2xl overflow-hidden ${
                  isDarkMode ? "bg-gray-800" : "bg-white border border-gray-200"
                }`}
              >
                <img
                  src="https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg"
                  alt="Shinagawa Prince Hotel"
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <div className="flex items-center mb-1">
                    <span className="text-blue-400">★</span>
                    <span className="text-sm ml-1">4.0 Very Good</span>
                  </div>
                  <h3 className="font-semibold mb-1">Shinagawa Prince Hotel</h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Check in: 26.01.2025, 11:15 pm
                  </p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Check out: 28.01.2025, 11:15 am
                  </p>
                  <div className="flex items-center mt-2">
                    <p className="text-sm">2 Nights</p>
                    <div className="flex items-center ml-2 text-green-500">
                      <CheckCircleIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">Confirmed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`rounded-2xl overflow-hidden ${
                  isDarkMode ? "bg-gray-800" : "bg-white border border-gray-200"
                }`}
              >
                <img
                  src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
                  alt="Mercure Tokyo Hotel"
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <div className="flex items-center mb-1">
                    <span className="text-blue-400">★</span>
                    <span className="text-sm ml-1">4.1 Very Good</span>
                  </div>
                  <h3 className="font-semibold mb-1">Mercure Tokyo Hotel</h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Check in: 28.01.2025, 6:00 pm
                  </p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Check out: 30.01.2025, 11:15 am
                  </p>
                  <div className="flex items-center mt-2">
                    <p className="text-sm">2 Nights</p>
                    <div className="flex items-center ml-2 text-orange-500">
                      <Clock3Icon className="w-4 h-4 mr-1" />
                      <span className="text-sm">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Activities</h2>
              <button className="text-blue-500">See all</button>
            </div>
            <div
              className={`rounded-2xl p-4 ${
                isDarkMode ? "bg-gray-800" : "bg-white border border-gray-200"
              }`}
            >
              <div className="flex space-x-2 mb-4">
                <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Day Plan
                </button>
                <button
                  className={`px-4 py-1 rounded-full text-sm ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  14 Activities
                </button>
              </div>

              <div className="flex space-x-4 mb-4 overflow-x-auto">
                {["MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, i) => (
                  <div
                    key={day}
                    className={`text-center min-w-[60px] rounded-lg p-2 ${
                      i === 0
                        ? "bg-blue-600 text-white"
                        : isDarkMode
                        ? "bg-gray-700"
                        : "bg-gray-100"
                    }`}
                  >
                    <div className="text-xs">JAN</div>
                    <div className="font-semibold">{27 + i}</div>
                    <div className="text-xs">{day}</div>
                  </div>
                ))}
              </div>

              <div
                className={`rounded-xl p-3 mb-4 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-500">Day 1</span>
                  <span>27.01.2025</span>
                  <span className="text-blue-500">3 Activities</span>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <img
                      src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg"
                      alt="Senso-ji Temple"
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">
                        Senso-ji Temple & Nakamise Shopping Street
                      </h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Timing: 8:15 am Morning
                      </p>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Duration: 3 hours
                      </p>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Pick up: From Hotel
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img
                      src="https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg"
                      alt="Tokyo Sky Tree"
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Tokyo Sky Tree</h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Timing: 1:00 pm Afternoon
                      </p>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Duration: 3 hours
                      </p>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Pick up: From Nakamise Street
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img
                      src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg"
                      alt="Kimono Wearing"
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Kimono Wearing</h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Timing: Anytime before 8:00pm
                      </p>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Duration: 1-2 hours
                      </p>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Pick up: From Hotel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
