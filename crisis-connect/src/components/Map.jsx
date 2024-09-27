import React, { useState } from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps"
import { infectedCoordinates } from "../data/coordinates";



export default function Map() {
    const [zoom, setZoom] = useState(1);  // Default zoom level



    return (
        <div className="p-6 col-span-5 bg-white rounded-xl shadow-sm">
            {/* Zoom Controls */}


            <div className="bg-blue-100 rounded-xl">
                <ComposableMap>
                    {/* ZoomableGroup enables zooming functionality */}
                    <ZoomableGroup zoom={zoom}>
                        <Geographies geography="/features.json">
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography key={geo.rsmKey} geography={geo} />
                                ))
                            }
                        </Geographies>


                        {/* Markers for infected locations */}
                        {infectedCoordinates.map(({ coordinates }, i) => {
                            return (
                                <Marker key={i} coordinates={coordinates}>
                                    <circle r={4} fill={"red"} stroke="" />
                                    {/* <text
                                    textAnchor="middle"
                                    y={-size - 5}  // Adjust text position based on marker size
                                    style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: 10 }}
                                >
                                </text>  */}
                                </Marker>
                            );
                        })}
                    </ZoomableGroup>
                </ComposableMap>
            </div>
            <div className="flex space-x-4 mt-4">

                <button
                    onClick={() => setZoom(zoom / 1.2)}
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <i className="ri-zoom-out-line"></i>        </button><button
                        onClick={() => setZoom(zoom * 1.2)}
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                    <i className="ri-zoom-in-line"></i>
                </button>

            </div>
        </div>
    )
}
