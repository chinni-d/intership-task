import React from "react";
import { PlusIcon, MapPinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";

// Sample trips data
const trips = [
  {
    id: 1,
    destination: "Tokyo",
    country: "Japan",
    image:
      "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    dates: "Oct 15 - Oct 22, 2025",
    status: "upcoming",
    daysLeft: 7,
  },
  {
    id: 2,
    destination: "Paris",
    country: "France",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.Mxsb8sDA7x_gcKC3tr_sSQHaD5&rs=1&pid=ImgDetMain",
    dates: "Dec 10 - Dec 20, 2025",
    status: "upcoming",
    daysLeft: 63,
  },
  {
    id: 3,
    destination: "Bali",
    country: "Indonesia",
    image:
      "https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    dates: "Apr 5 - Apr 15, 2025",
    status: "completed",
    daysLeft: 0,
  },
];

// Filter trips by status
const upcomingTrips = trips.filter((trip) => trip.status === "upcoming");
const pastTrips = trips.filter((trip) => trip.status === "completed");

const TripCard: React.FC<{
  destination: string;
  country: string;
  image: string;
  dates: string;
  status: string;
  daysLeft: number;
}> = ({ destination, country, image, dates, status, daysLeft }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <div className="relative h-32">
        <img
          src={image}
          alt={destination}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-3 text-white">
          <h3 className="font-bold text-lg">{destination}</h3>
          <div className="flex items-center text-xs">
            <MapPinIcon size={12} className="mr-1" />
            <span>{country}</span>
          </div>
        </div>

        {status === "upcoming" && (
          <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
            {daysLeft === 0
              ? "Today!"
              : daysLeft === 1
              ? "Tomorrow"
              : `${daysLeft} days left`}
          </div>
        )}

        {status === "completed" && (
          <div className="absolute top-3 right-3 bg-gray-600 text-white text-xs font-medium px-2 py-1 rounded-full">
            Completed
          </div>
        )}
      </div>

      <div className="p-3">
        <p className="text-xs text-gray-600">{dates}</p>

        <div className="flex justify-between items-center mt-2">
          <button className="text-purple-600 text-xs font-medium">
            View Details
          </button>

          {status === "upcoming" && (
            <button className="text-blue-600 text-xs font-medium">Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

const Trips: React.FC = () => {
  return (
    <AppLayout>
      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold">My Trips</h1>

          <Link
            to="/create-trip"
            className="flex items-center justify-center p-2 bg-purple-600 text-white rounded-full"
          >
            <PlusIcon size={20} />
          </Link>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Upcoming</h2>

          {upcomingTrips.length === 0 ? (
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-gray-500">No upcoming trips</p>
              <Link
                to="/create-trip"
                className="inline-flex items-center justify-center mt-2 text-sm text-purple-600 font-medium"
              >
                <PlusIcon size={16} className="mr-1" />
                Create a new trip
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {upcomingTrips.map((trip) => (
                <TripCard
                  key={trip.id}
                  destination={trip.destination}
                  country={trip.country}
                  image={trip.image}
                  dates={trip.dates}
                  status={trip.status}
                  daysLeft={trip.daysLeft}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Past Trips</h2>

          {pastTrips.length === 0 ? (
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-gray-500">No past trips</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {pastTrips.map((trip) => (
                <TripCard
                  key={trip.id}
                  destination={trip.destination}
                  country={trip.country}
                  image={trip.image}
                  dates={trip.dates}
                  status={trip.status}
                  daysLeft={trip.daysLeft}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Trips;
