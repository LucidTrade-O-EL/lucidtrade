import "./GoogleEarth.css";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";

const GoogleEarth = () => {
  return (
    <div className="GoogleEarth">
      <APIProvider
        apiKey={"AIzaSyACOSlepxS0umdp8HaDICPxXYzVX2jDick"}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map
          defaultZoom={13}
          defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log(
              "camera changed:",
              ev.detail.center,
              "zoom:",
              ev.detail.zoom
            )
          }
        ></Map>
      </APIProvider>
    </div>
  );
};

export default GoogleEarth;
