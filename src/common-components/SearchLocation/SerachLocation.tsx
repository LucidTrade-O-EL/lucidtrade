import React, { useEffect, useState } from "react";
import {
  AmbientLight,
  DirectionalLight,
  Matrix4,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyACOSlepxS0umdp8HaDICPxXYzVX2jDick", // Replace with your API key
  version: "weekly",
  libraries: ["places"],
});

const mapOptions = {
  tilt: 0,
  heading: 0,
  zoom: 20,
  center: { lat: 35.6594945, lng: 139.6999859 },
  mapId: "4257b5eb846e456a", // Replace with your map ID
  disableDefaultUI: true,
  gestureHandling: "none",
  keyboardShortcuts: false,
};

interface SearchLocationProps {
  location: string;
  onConfirmLocation: () => void;
}

const SearchLocation: React.FC<SearchLocationProps> = ({
  location,
  onConfirmLocation,
}) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    loader.load().then(() => {
      const mapDiv = document.getElementById("map");
      if (mapDiv) {
        const newMap = new google.maps.Map(mapDiv, mapOptions);
        setMap(newMap);
        initWebglOverlayView(newMap);
      }
    });
  }, []);

  useEffect(() => {
    if (map && location) {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const { lat, lng } = results[0].geometry.location;
          mapOptions.center = { lat: lat(), lng: lng() };
          map.setCenter(mapOptions.center);
          mapOptions.tilt = 0;
          mapOptions.heading = 0;
          mapOptions.zoom = 19.4;

          animateCamera();
        }
      });
    }
  }, [location, map]);

  const animateCamera = () => {
    if (map) {
      const interval = setInterval(() => {
        map.moveCamera({
          tilt: mapOptions.tilt,
          heading: mapOptions.heading,
          zoom: mapOptions.zoom,
        });
  
        if (mapOptions.tilt < 67.5) {
          mapOptions.tilt += 2; // Faster tilt (increase the value)
        } else if (mapOptions.heading <= 360) {
          mapOptions.heading += 1.5; // Faster rotation (increase the value)
          mapOptions.zoom -= 0.00005; // Faster zoom out (increase the value)
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust the timing to slow down further if needed
    }
  };
  

  const initWebglOverlayView = (map: google.maps.Map) => {
    let scene: Scene,
      renderer: WebGLRenderer,
      camera: PerspectiveCamera,
      loader: GLTFLoader;

    const webglOverlayView = new google.maps.WebGLOverlayView();

    webglOverlayView.onAdd = () => {
      scene = new Scene();
      camera = new PerspectiveCamera();

      const ambientLight = new AmbientLight(0xffffff, 0.75);
      scene.add(ambientLight);

      const directionalLight = new DirectionalLight(0xffffff, 0.25);
      directionalLight.position.set(0.5, -1, 0.5);
      scene.add(directionalLight);

      loader = new GLTFLoader();
      const source =
        "https://raw.githubusercontent.com/googlemaps/js-samples/main/assets/pin.gltf";
      loader.load(source, (gltf) => {
        gltf.scene.scale.set(10, 10, 10);
        gltf.scene.rotation.x = Math.PI;
        scene.add(gltf.scene);
      });
    };

    webglOverlayView.onContextRestored = ({ gl }) => {
      renderer = new WebGLRenderer({
        canvas: gl.canvas,
        context: gl,
        ...gl.getContextAttributes(),
      });
      renderer.autoClear = false;

      loader.manager.onLoad = () => {
        renderer.setAnimationLoop(() => {
          webglOverlayView.requestRedraw();
          const { tilt, heading, zoom } = mapOptions;
          map.moveCamera({ tilt, heading, zoom });

          renderer.render(scene, camera);
          renderer.resetState();
        });
      };
    };

    webglOverlayView.onDraw = ({ gl, transformer }) => {
      const latLngAltitudeLiteral: google.maps.LatLngAltitudeLiteral = {
        lat: mapOptions.center.lat,
        lng: mapOptions.center.lng,
        altitude: 100,
      };

      const matrix = transformer.fromLatLngAltitude(latLngAltitudeLiteral);
      camera.projectionMatrix = new Matrix4().fromArray(matrix);

      webglOverlayView.requestRedraw();
      renderer.render(scene, camera);
      renderer.resetState();
    };

    webglOverlayView.setMap(map);
  };

  return (
    <div>
      <div id="map" style={{ height: "100vh", width: "100%" }} />
      <button onClick={onConfirmLocation} className="confirm-location-button">
        Confirm Location
      </button>
    </div>
  );
};

export default SearchLocation;
