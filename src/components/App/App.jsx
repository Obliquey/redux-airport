import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

function App() {

  const currentAirlines = useSelector((store) => store.airlinesArray);
console.log('Airlines', currentAirlines)

  return (
    <div>
      <h1>Redux Airport</h1>
      <input placeholder='Airline Name' />
      <button>Add Airline</button>
      <table>
        <thead>
          <tr>
            <th>Airlines</th>
          </tr>
        </thead>
        <tbody>
          {currentAirlines.map(airline => {
            return (
              <tr key={airline.id}>
                <td>{airline.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
