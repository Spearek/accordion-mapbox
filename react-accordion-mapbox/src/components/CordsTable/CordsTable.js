import React from 'react';

import TableEntry from './TableEntry/TableEntry';


const CordsTable = props => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Długość</th>
                    <th>Szerokość</th>
                    <th>Usuń</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(el => <TableEntry key={el.id} latitude={el.latitude} longitude={el.longitude} removeMarker={props.removeMarker.bind(this,el.id)}/>)}
            </tbody>
        </table>
    )
}

export default CordsTable;