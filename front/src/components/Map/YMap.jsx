import React from 'react';
import {YMaps, Map, FullscreenControl, SearchControl, Placemark} from '@pbe/react-yandex-maps';
import "./YMap.css"
const YMap = ({...props}) => {
    const placeCoordinatesStr = props.coordinates;
    const placemarkCoordinates = placeCoordinatesStr.split(",");
    const mapStyle = {
        margin: "auto",
        height: 350,
        width: 350,
    };
    console.log(props.coordinates)
    return (
        <div className="header">
            <YMaps
                query={{
                    apikey: "27d724ec-2b6a-40a3-a353-ceda3de147dc"
                }}>
                <Map
                    style={mapStyle}
                    defaultState={{
                        center: placeCoordinatesStr.split(","),
                        zoom: 15,
                        controls: [],
                    }}
                >
                    <Placemark geometry={placemarkCoordinates} />
                    <FullscreenControl />
                    <SearchControl options={{ float: "right" }} />
                </Map>
            </YMaps>
        </div>
    );
};

export default YMap;