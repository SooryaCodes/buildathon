import React, { useState } from "react";
import Map, { Layer, Marker, NavigationControl, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { infectedCoordinates } from "../data/coordinates";
import * as turf from "@turf/turf"; // Importing turf.js

// Ensure you replace this with your own Mapbox access token
const MAPBOX_TOKEN = "your_mapbox_access_token";



export default function MapboxMap() {
    // Function to create a circular zone using turf.js
    const createCircleZone = (center, radiusInKm) => {
        const radiusInMeters = radiusInKm * 1000;
        const options = { steps: 64, units: "meters" }; // Higher steps make the circle smoother
        return turf.circle(center, radiusInMeters, options);
    };

    const [viewport, setViewport] = useState({
        latitude: 20, // Default center latitude
        longitude: 78, // Default center longitude
        zoom: 1, // Default zoom level
    });

    // Generate radius zones for each infected point (e.g., 5km radius)
    const radiusZones = infectedCoordinates.map(({ coordinates }) =>
        createCircleZone([coordinates[0], coordinates[1]], 100) // 5km radius
    );

    // Combine the zones into a single GeoJSON FeatureCollection
    const radiusZonesGeoJSON = turf.featureCollection(radiusZones);


    return (
        <div className="p-6 col-span-5 bg-white rounded-xl shadow-sm">
            {/* Mapbox map container */}
            <div className="bg-blue-100 rounded-xl">
                <Map
                    initialViewState={viewport}
                    mapStyle="mapbox://styles/mapbox/streets-v12"
                    style={{ width: "100%", height: "400px" }}
                    mapboxAccessToken={"pk.eyJ1Ijoic29vcnlhLWtyaXoiLCJhIjoiY20xa29vNnYyMDBjZzJycHUyamp2Y2Q0biJ9.l5wejacWfpUBAuv3sQ9TLw"}
                    onMove={(evt) => setViewport(evt.viewState)}

                >


                    {/* Source for rendering the circular radius zones */}
                    <Source id="radius-zones" type="geojson" data={radiusZonesGeoJSON}>
                        {/* Layer for the radius zones with transparency */}
                        <Layer
                            id="radius-zone-layer"
                            type="fill"
                            paint={{
                                "fill-color": "#FF0000", // Red color for the zone
                                "fill-opacity": 0.3, // Transparent
                            }}
                        />
                        {/* Outline for the circular radius */}
                        <Layer
                            id="radius-zone-outline"
                            type="line"
                            paint={{
                                "line-color": "#FF0000", // Red outline
                                "line-width": 1,
                            }}
                        />
                    </Source>

                    {/* Navigation controls for zooming */}
                    <NavigationControl position="top-left" />

                    {/* Markers for infected locations */}
                    {infectedCoordinates.map(({ coordinates }, i) => (
                        <Marker
                            key={i}
                            latitude={coordinates[1]} // Mapbox uses lat, lng instead of lng, lat
                            longitude={coordinates[0]}
                        >
                            <div className="bg-red-500 w-1 h-1 rounded-full" />
                        </Marker>
                    ))}
                </Map>
            </div>


        </div>
    );
}
