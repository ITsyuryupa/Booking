import React from 'react';
import {YMaps, Map, FullscreenControl, SearchControl, Placemark} from '@pbe/react-yandex-maps';
import "./YMap.css"
const YMap = ({...props}) => {
    const placemarkCoordinates = [55.792235362895,49.16762359325406];
    const placemarkProperties = {
        balloonContentBody: 'Отель ИГОРЯНА'
    };
    const mapStyle = {
        margin: "auto",
        height: 400,
        width: 400,
        "@media (max-width: 900px)": {
            height: 300,
            width: "100vw"
        }
    };
    return (
        <div className="header">
            <YMaps
                query={{
                    apikey: "27d724ec-2b6a-40a3-a353-ceda3de147dc"
                }}>
                <Map
                    style={mapStyle}
                    defaultState={{
                        center: [55.792235362895,49.16762359325406],
                        zoom: 9,
                        controls: [],
                    }}
                >
                    <Placemark geometry={placemarkCoordinates} properties={placemarkProperties} />
                    <FullscreenControl />
                    <SearchControl options={{ float: "right" }} />
                </Map>
            </YMaps>
        </div>
    );
};

export default YMap;