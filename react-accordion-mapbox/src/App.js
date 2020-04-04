import React, { useState } from 'react';
import './App.css';

import { Card, CardHeader, CardBody, Collapse, UncontrolledCollapse } from 'reactstrap';

function App() {

  const [collapses, setCollapses] = useState([]);

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
                  Mapa{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </h5>
            </CardHeader>
            <Collapse isOpen={collapses.includes(1)}>
              <CardBody>
                Tutaj będzie mapa
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
                  Dodane miejsca {" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </h5>
            </CardHeader>
            <Collapse isOpen={collapses.includes(2)}>
              <CardBody>
              Tutaj będą zapisane współrzędne
              </CardBody>
            </Collapse>
          </Card>
        </div>
      </div>

    </div>
  );
}

export default App;
