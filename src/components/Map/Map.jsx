/* global google */
import React from 'react'
import "./Map.scss"
import { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, DirectionsRenderer, Marker, withGoogleMap, withScriptjs, useJsApiLoader} from '@react-google-maps/api'
import googleMapReact from 'google-map-react';
import { Axios } from 'axios';

const containerStyle = {
  width: '100%',
  height: '800px'
};


// 7.4310103467961754, 4.9629549130383595
// 7.416462352831374, 4.973491497783046
const Map = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBGteRQGf4nL5TMHhLoxm8-GsTitSFMg4o"
  })

  const [map, setMap] = React.useState(null)
  const [directions, setDirections] = React.useState(null);
  const [position, setPosition] = useState({ lat: null, lng: null });
  const [userLocation, setUserLocation] = useState(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [final, setFinal] = useState({ lat: null, lng: null });

  useEffect(() => {
    if (props.latitude && props.longitude) {
      setPosition({
        lat: props.latitude,
        lng: props.longitude
      });
    }
  }, [props.latitude, props.longitude]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setUserLocation({ lat: userLat, lng: userLng });
          setCenter({ lat: userLat, lng: userLng });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

   // Empty dependency array ensures the effect runs once after the initial render


  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);

    const origin = { lat: 40.756795, lng: -73.954298 };
    const destination = { lat: -3.745, lng: -38.523 };
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.WALKING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result)
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );

    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

 

  return isLoaded ? (
      <>
          <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
       {directions && <DirectionsRenderer directions={directions} />}
       {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              path:
                'M10,0 C15.523,0 20,4.477 20,10 C20,15.523 10,30 10,30 C10,30 0,15.523 0,10 C0,4.477 4.477,0 10,0 Z M10,14 C11.1045695,14 12,13.1045695 12,12 C12,10.8954305 11.1045695,10 10,10 C8.8954305,10 8,10.8954305 8,12 C8,13.1045695 8.8954305,14 10,14 Z',
              fillColor: 'blue',
              fillOpacity: 0.8,
              strokeWeight: 0,
              scale: 1.5
            }}
          />
        )}
         {final.lat !== null && final.lng !== null && (
          <Marker
            position={final}
            icon={{
              path:
                'M10,0 C15.523,0 20,4.477 20,10 C20,15.523 10,30 10,30 C10,30 0,15.523 0,10 C0,4.477 4.477,0 10,0 Z M10,14 C11.1045695,14 12,13.1045695 12,12 C12,10.8954305 11.1045695,10 10,10 C8.8954305,10 8,10.8954305 8,12 C8,13.1045695 8.8954305,14 10,14 Z',
              fillColor: 'red',
              fillOpacity: 1,
              strokeWeight: 0,
              scale: 1.5
            }}
          />
        )}
        <Marker
          position={{
            lat: props.latitude, // Marker latitude 9.05449759250429, 7.498049187641538
            lng: props.longitude, // Marker longitude
          }}
          name={'Marker Name'}
        />
      </GoogleMap>

      latitude is {props.latitude}
      </>
  ) : <></>
}

export default Map
