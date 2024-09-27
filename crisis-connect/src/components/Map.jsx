import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"


export default function Map() {
    return (
        <div className="p-10  col-span-4  bg-white rounded-xl shadow-sm">
            <ComposableMap>
                <Geographies geography="/features.json">
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div>

    )
}