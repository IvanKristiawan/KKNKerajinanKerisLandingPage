import React, { useState } from "react";
import Pin from "../assets/pin";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoiaXZhbi1rcmlzdGlhd2FuIiwiYSI6ImNsMWN4dHljZzA3Z2ozcHFjcnpxbDhnaTIifQ.Z7KSBghh93LRW-7aCNQzEg"; // Set your mapbox token here

export const Testimonials = (props) => {
  const [popupInfo, setPopupInfo] = useState(null);
  const [penduduk, setPenduduk] = useState({});

  return (
    <div id="testimonials" style={{ marginBottom: "100px", marginTop: "-100px" }}>
      <div className="container">
        <div className="row">
          <div
            className="col-xs-12 col-md-12"
            style={{
              height: "400px",
            }}
          >
            <h2>PETA</h2>

            <div>
              <div style={styleMarkerDetail}>
                <Pin/>{" "}
                <h5> Lokasi Bewok Keris Selarong</h5>
              </div>
            </div>

            <Map
              initialViewState={{
                latitude: -7.86471,
                longitude: 110.32019,
                zoom: 15,
                bearing: 0,
                pitch: 0,
              }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={TOKEN}
            >
              <GeolocateControl position="top-left" />
              <FullscreenControl position="top-left" />
              <NavigationControl position="top-left" />
              <ScaleControl />

              {props.data
                ? props.data.LocationPetinggi.map((d, i) => (
                    <>
                      <Marker
                        key={`marker`}
                        latitude={d.latitude}
                        longitude={d.longitude}
                        anchor="bottom"
                        onClick={(e) => {
                          // If we let the click event propagates to the map, it will immediately close the popup
                          // with `closeOnClick: true`
                          e.originalEvent.stopPropagation();
                          setPopupInfo(penduduk);
                        }}
                      >
                        <Pin />
                      </Marker>

                      {popupInfo && (
                        <Popup
                          anchor="top"
                          latitude={d.latitude}
                          longitude={d.longitude}
                          onClose={() => setPopupInfo(null)}
                        >
                          <div>{d.title}</div>
                          <a href={d.linkGoogleMaps}>Lihat</a>
                        </Popup>
                      )}
                    </>
                  ))
                : "Loading..."}
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
};

const styleMarkerDetail = {
  display: "flex",
  alignItems: "center",
};
