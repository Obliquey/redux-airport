import { useSelector, useDispatch } from "react-redux";

function Table() {
    const currentAirlines = useSelector((store) => store.airlinesArray);

    return (

        <table>
            <thead>
            <tr>
                <th>Key</th>
                <th>Airlines</th>
                <th>Number of Planes</th>
            </tr>
            </thead>
            <tbody>
            {currentAirlines.map(airline => {
                return (
                    <tr key={airline.id}>
                        <td>{airline.id}</td>
                        <td>{airline.name}</td>
                        <td>{airline.planes}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
export default Table;