import React, { useState } from 'react';
import './App.css';

import { Card, CardHeader, CardBody, Collapse } from 'reactstrap';
import ReactMapGL from 'react-map-gl';

import CordsTable from './components/CordsTable/CordsTable';
import MapMarkers from './components/MapMarkers/MapMarkers';

const mapAccessToken = "pk.eyJ1Ijoic3BlYXJlayIsImEiOiJjazhsdmhzMWswNmc5M21vMjhrZXpxMmwzIn0.0ZcL6pbb5Wk1h7PL4KvrFw";

function App() {

  const [collapses, setCollapses] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 52.0628,
    longitude: 19.7923,
    zoom: 5.10
  })
  const [markers, setMarkers] = useState([]);

  const mapClickHandler = (eventData) => {
    const id = eventData.timeStamp;
    const [longitude, latitude] = eventData.lngLat;
    setMarkers(markers => [...markers, { longitude, latitude, id }]);
  }

  const removeMarkerHandler = (markerId) => {
    const updatedMarkers = markers.filter(el => el.id !== markerId);
    setMarkers(updatedMarkers);
  }

  const dragMarkerHandler = (id, lng, lat) => {
    const innerPos = markers.findIndex((el) => el.id === id);
    const newMarkers = [...markers];
    newMarkers[innerPos] = {
      id: id,
      longitude: lng,
      latitude: lat
    }
    setMarkers(newMarkers);
  }

  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  return (
    <div className="App">
      <div id="acordeon">
        <div aria-multiselectable={true} id="accordion" role="tablist">
          <Card className="no-transition">
            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <h5 className="mb-0 panel-title">
                <a
                  aria-expanded={collapses.includes(1)}
                  className="collapsed"
                  data-parent="#accordion"
                  href="#pablo"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(1);
                  }}
                >
                  Mapa
                </a>
              </h5>
            </CardHeader>
            <Collapse isOpen={collapses.includes(1)}>
              <CardBody>

                <ReactMapGL
                  {...viewport}
                  width="70vw"
                  height="60vh"
                  mapboxApiAccessToken={mapAccessToken}
                  mapStyle={"mapbox://styles/spearek/ck8lxcwd913fv1inxw2wl5ia8"}
                  onViewportChange={setViewport}
                  onClick={mapClickHandler}>
                  <MapMarkers data={markers} dragMarker={dragMarkerHandler} />
                </ReactMapGL>
                
              </CardBody>
            </Collapse>
            <CardHeader className="card-collapse" id="headingTwo" role="tab">
              <h5 className="mb-0 panel-title">
                <a
                  aria-controls="collapseTwo"
                  aria-expanded={collapses.includes(2)}
                  className="collapsed"
                  data-parent="#accordion"
                  href="#pablo"
                  id="collapseTwo"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(2);
                  }}
                >
                  Dodane miejsca
                </a>
              </h5>
            </CardHeader>
            <Collapse isOpen={collapses.includes(2)}>
              <CardBody>
                <CordsTable
                  data={markers}
                  removeMarker={removeMarkerHandler} />
              </CardBody>
            </Collapse>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
