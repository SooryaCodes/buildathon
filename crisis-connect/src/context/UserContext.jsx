import React, { createContext, useRef, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    // The state for the selected country
    const [selectedCountry, setSelectedCountry] = useState(null);

    // Function to select a country
    const selectCountry = (country) => {
        console.log(country);
        flyToLocation([country.latlng[0], country.latlng[1]])
        setSelectedCountry(country);
    };
    const mapRef = useRef(); // Reference to access the map instance directly

    const flyToLocation = (latitude, longitude, zoom) => {
        mapRef.current?.flyTo({
            center: latitude, longitude,
            zoom: zoom || 5, // Default zoom level if not provided
            essential: true, // This ensures the animation is not interrupted by user interaction
        });
    };

    return (
        <UserContext.Provider value={{ selectedCountry, selectCountry, flyToLocation, mapRef }}>
            {children}
        </UserContext.Provider>
    );
};
