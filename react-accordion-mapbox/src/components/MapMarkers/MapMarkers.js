import React from 'react';
import { Marker } from 'react-map-gl';

const MapMarkers = props => {

    const dragMarkerHandler = (markerId, event) => {
        const [longitude, latitude] = event.lngLat;
        props.dragMarker(markerId, longitude, latitude);
    }

    return (
        <div>
            {props.data.map(el => {
                return (
                    <Marker
                        key={el.id}
                        longitude={el.longitude}
                        latitude={el.latitude}
                        offsetLeft={-10}
                        offsetTop={-10}
                        draggable={true}
                        onDragEnd={dragMarkerHandler.bind(this, el.id)}
                    >
                        <i className="now-ui-icons location_pin"></i>
                    </Marker>
                )
            })}
        </div>
    )
}

export default MapMarkers;