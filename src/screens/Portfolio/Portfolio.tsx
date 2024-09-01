import React, { useState, useRef, useEffect } from "react";
import SearchLocation from "../../common-components/SearchLocation/SerachLocation";
import FloatingLabelInput from "./FloatingLabelInput";
import { FaSearch } from "react-icons/fa";
import { useJsApiLoader } from "@react-google-maps/api";
import "./Portfolio.css";

const Portfolio = () => {
  const [portfolioName, setPortfolioName] = useState("Portfolio 1");
  const [location, setLocation] = useState("");
  const [searchLocation, setSearchLocation] = useState(""); // This state will trigger the map search
  const [isLocationConfirmed, setIsLocationConfirmed] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyACOSlepxS0umdp8HaDICPxXYzVX2jDick", // Replace with your API key
    libraries: [],
  });

  useEffect(() => {
    if (isLoaded && inputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ["geocode"],
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        handleLocationChange(place);
      });
    }
  }, [isLoaded]);

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPortfolioName(e.target.value);
  };

  const handleLocationChange = (
    place: google.maps.places.PlaceResult | null
  ) => {
    if (place && place.formatted_address) {
      setLocation(place.formatted_address);
    }
  };

  const handleCreatePortfolio = () => {
    console.log(`Creating portfolio: ${portfolioName}`);
  };

  const handleConfirmLocation = () => {
    console.log(`Location confirmed: ${location}`);
    setIsLocationConfirmed(true);
  };

  const handleSearchClick = () => {
    setSearchLocation(location); // This triggers the map search when the button is clicked
  };

  console.log("this is the location: ", searchLocation)

  return (
    <div className="portfolio-container">
      <SearchLocation
        location={searchLocation}
        onConfirmLocation={handleConfirmLocation}
      />
      <div className="portfolio-form">
        <h2>Reach financial goals faster</h2>
        <p>
          Achieve your financial objectives swiftly by investing in fractional
          energy.
        </p>
        <div className="location-search-container">
          <FloatingLabelInput
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter a location"
            ref={inputRef}
          />
          <button onClick={handleSearchClick} className="circle-search-button">
            <FaSearch/>
          </button>
        </div>
        <button
          onClick={handleConfirmLocation}
          className="confirm-location-button"
        >
          Confirm Location
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
