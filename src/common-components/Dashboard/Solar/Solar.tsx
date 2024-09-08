import React, { useState, useEffect } from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import './Solar.css';

// Define the findClosestBuilding function
const findClosestBuilding = async (location: google.maps.LatLng, apiKey: string) => {
  const params = new URLSearchParams({
    'location.latitude': location.lat().toString(),
    'location.longitude': location.lng().toString(),
    'requiredQuality': 'HIGH', // Set quality to HIGH, MEDIUM, or LOW based on your needs
    'key': apiKey,
  });

  const response = await fetch(`https://solar.googleapis.com/v1/buildingInsights:findClosest?${params}`);
  
  if (!response.ok) {
    throw new Error(`Error fetching building insights: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

const Solar = () => {
  const [location, setLocation] = useState({ lat: 36.191013, lng: -86.511166 });
  const [buildingData, setBuildingData] = useState<any>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyACOSlepxS0umdp8HaDICPxXYzVX2jDick", // Replace with your API key
    libraries: [],
  });

  useEffect(() => {
    if (isLoaded) {
      fetchBuildingData(location);
    }
  }, [isLoaded]);

  const fetchBuildingData = async (location: { lat: number; lng: number }) => {
    try {
      const buildingInfo = await findClosestBuilding(
        new google.maps.LatLng(location.lat, location.lng),
        "AIzaSyACOSlepxS0umdp8HaDICPxXYzVX2jDick"
      );
      setBuildingData(buildingInfo);
    } catch (error) {
      console.error("Failed to fetch building data:", error);
      setBuildingData(null);
    }
  };

  const handleLocationChange = (newLocation: { lat: number; lng: number }) => {
    setLocation(newLocation);
    fetchBuildingData(newLocation);
  };

  return (
    <div className="solar-container">
      {isLoaded && (
        <GoogleMap
          center={location}
          zoom={15}
          mapContainerClassName="map-container"
          onClick={(e) => handleLocationChange({ lat: e.latLng?.lat()!, lng: e.latLng?.lng()! })}
        >
          <Marker position={location} />
        </GoogleMap>
      )}
      {buildingData ? (
        <div className="solar-info">
          <h2>Solar Potential for the Selected Location</h2>
          <p>Building Name: {buildingData.name || "Unknown"}</p>
          <p>Latitude: {buildingData.center?.latitude || "N/A"}</p>
          <p>Longitude: {buildingData.center?.longitude || "N/A"}</p>
          <p>Max Sunshine Hours/Year: {buildingData.solarPotential?.maxSunshineHoursPerYear || "N/A"}</p>
          {/* Add more data display as needed */}
        </div>
      ) : (
        <p>No building data available for this location.</p>
      )}
    </div>
  );
};

export default Solar;
