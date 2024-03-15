// BowlersTable.tsx
import React from 'react';
import { BowlingLeague } from './types/BowlingLeague';
import { useState, useEffect } from 'react';

// interface Bowler {
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   teamName: string;
//   address: string;
//   city: string;
//   state: string;
//   zip: string;
//   phoneNumber: string;
// }

// interface Props {
//   bowlers: Bowler[];
// }

// const BowlersTable: React.FC<Props> = ({ bowlers }) => {
//   return (
//     <div>
//       <h2>List of Bowlers</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Team Name</th>
//             <th>Address</th>
//             <th>City</th>
//             <th>State</th>
//             <th>Zip</th>
//             <th>Phone Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bowlers.map((bowler, index) => (
//             <tr key={index}>
//               <td>{`${bowler.firstName} ${bowler.middleName} ${bowler.lastName}`}</td>
//               <td>{bowler.teamName}</td>
//               <td>{bowler.address}</td>
//               <td>{bowler.city}</td>
//               <td>{bowler.state}</td>
//               <td>{bowler.zip}</td>
//               <td>{bowler.phoneNumber}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

function BowlersTable() {
  const [bowlerData, setBowlerData] = useState<BowlingLeague[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5030/api/BowlingLeague');
      const f = await rsp.json();
      setBowlerData(f);
    };
    fetchBowlerData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowling Team Info!</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>{b.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlersTable;
