import React, { useState } from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps"
import { infectedCoordinates } from "../data/coordinates";



export default function Map() {
    const [zoom, setZoom] = useState(1);  // Default zoom level



    return (
        <div className="p-10 col-span-4 bg-white rounded-xl shadow-sm">
            {/* Zoom Controls */}


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
            <div className="flex space-x-4 mb-4">

                <button
                    onClick={() => setZoom(zoom / 1.2)}
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                >
                    <i className="ri-zoom-out-line"></i>        </button><button
                        onClick={() => setZoom(zoom * 1.2)}
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                    >
                    <i className="ri-zoom-in-line"></i>
                </button>

            </div>
        </div>
    )
}
