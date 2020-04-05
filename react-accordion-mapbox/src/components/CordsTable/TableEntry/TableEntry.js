import React from 'react';


const TableEntry = props => {

    return (
        <tr>
            <th scope="row"><i className="now-ui-icons location_map-big"></i></th>
            <td>{props.longitude}</td>
            <td>{props.latitude}</td>
            <td><i className="now-ui-icons ui-1_simple-remove" onClick={props.removeMarker}></i></td>
        </tr>
    )
}

export default TableEntry;