import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        rotate: [60, 10, 0],
        // center: [-5, -3],
        scale: 1300
      }}
      style={{
        width:"100%",
        height:"100%"
      }}
    >
      <Geographies
        geography="/features.json"
        fill="transparent"
        stroke="#FFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-54.82912589999999, -22.2272034]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
          {"Dourados"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
