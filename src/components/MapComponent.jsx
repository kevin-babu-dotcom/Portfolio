import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

// Fallback location (New York City)
const defaultCenter = {
  lat: 9.9312,
  lng: 76.2673
};

const ultraBlack = [
  {
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#ffffff"}]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [{"color": "#000000"}]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{"color": "#333333"}]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{"color": "#001122"}]
  }
];

const MapComponent = ({ onLocationSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(defaultCenter);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  console.log('API Key exists:', !!apiKey);

  // Get user's current location on component mount
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const userLocation = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude
  //         };
  //         setCurrentLocation(userLocation);
  //         setIsLoadingLocation(false);
  //         console.log('User location found:', userLocation);
  //       },
  //       (error) => {
  //         console.log('Geolocation error:', error);
  //         setIsLoadingLocation(false);
  //       },
  //       {
  //         enableHighAccuracy: true,
  //         timeout: 10000,
  //         maximumAge: 300000
  //       }
  //     );
  //   } else {
  //     console.log('Geolocation is not supported by this browser.');
  //     setIsLoadingLocation(false);
  //   }
  // }, []);

  const handleMapClick = useCallback((event) => {

    
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const address = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
    
    console.log('Coordinates:', lat, lng);
    console.log('Address:', address);
    
    const newLocation = { lat, lng };
    setSelectedLocation(newLocation);
    
    // Store data for later use
    const locationData = {
      latitude: lat,
      longitude: lng,
      address: address
    };
    
    console.log('💾 Location data:', locationData);
    
    if (onLocationSelect) {
      onLocationSelect(locationData);
      console.log('📤 Sent to parent');
    } else {
      console.log('📭 No parent handler - data stored locally');
    }
  }, [onLocationSelect]);

  const handleScriptLoad = () => {
    console.log('Google Maps script loaded');
    setMapLoaded(true);
  };

  const handleScriptError = (error) => {
    console.error('Google Maps script failed to load:', error);
  };

  // If no API key, show error message
  if (!apiKey) {
    return (
      <div className="h-full w-full rounded-xl  border-black bg-red-100 flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-600 font-bold">Google Maps API Key Missing</p>

        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full rounded-4xl border-20  border-white justify-center items-center flex text-5xl font-family-gilroy overflow-hidden relative">
      {/* {isLoadingLocation && (
        <div className="absolute inset-0 bg-blue-100 flex items-center justify-center z-10 rounded-2xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
            <p className="text-blue-600 font-medium">Finding your location...</p>
          </div>
        </div>
      )} */}
      {!mapLoaded && (
        <div className="absolute inset-0 bg-black flex items-center  justify-center z-10">
          <span className="transition-text text-white">Please Reload :(</span>
        </div>
      )}
      <LoadScript 
        googleMapsApiKey={apiKey}
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={13}
          onClick={handleMapClick}
          onLoad={(map) => console.log('Map instance loaded', map)}
          options={{
            disableDefaultUI: false,
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            styles: ultraBlack
          }}
        >
          {/* Show user's current location - simple marker */}
          {/* <Marker
            position={defaultCenter}
            title="Your current location"
            icon={{
              path: window.google?.maps?.SymbolPath?.CIRCLE || 0,
              fillColor: '#3B82F6',
              fillOpacity: 1,
              strokeColor: '#FFFFFF',
              strokeWeight: 3,
              scale: 8
            }}
          /> */}
          
          {/* Show selected location marker */}
          {selectedLocation && (
            <Marker
              position={selectedLocation}
              title="Selected location"
              animation={mapLoaded && window.google?.maps?.Animation?.BOUNCE}
              
            />
            
          )}
        </GoogleMap>
      </LoadScript>
      
    </div>
  );
};

export default MapComponent;