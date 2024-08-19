// // import React, { useState } from 'react';
// // import { UserPlus, Users, Award, Edit } from 'lucide-react';
// // import { Card, CardContent, CardHeader } from './components/ui';

// // const Screen = ({ children, title }) => (
// //   <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 mb-8">
// //     <h2 className="text-xl font-semibold mb-4">{title}</h2>
// //     {children}
// //   </div>
// // );

// // const Button = ({ icon: Icon, label, onClick }) => (
// //   <button
// //     onClick={onClick}
// //     className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
// //   >
// //     <Icon size={18} className="mr-2" />
// //     <span>{label}</span>
// //   </button>
// // );

// // const BragaGameManagement = () => {
// //   const [members, setMembers] = useState([]);
// //   // const [teams, setTeams] = useState(['Team A', 'Team B', 'Team C']); // Predefined teams
// //   const [currentScreen, setCurrentScreen] = useState('registration');

// //   const addMember = (name, team) => {
// //     setMembers([...members, { name, team, scores: [0, 0, 0] }]);
// //   };

// //   const updateScore = (memberIndex, gameIndex, score) => {
// //     const newMembers = [...members];
// //     newMembers[memberIndex].scores[gameIndex] = score;
// //     setMembers(newMembers);
// //   };

// //   const calculateTotalScore = (member) => member.scores.reduce((a, b) => a + b, 0);

// //   const sortedMembers = [...members].sort((a, b) => 
// //     calculateTotalScore(b) - calculateTotalScore(a)
// //   );

// //   return (
// //     <div className="p-4 bg-gray-100 min-h-screen">
// //       <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Braga Game Management</h1>
      
// //       {currentScreen === 'registration' && (
// //         <Screen title="Member Registration">
// //           <form onSubmit={(e) => {
// //             e.preventDefault();
// //             addMember(e.target.name.value, e.target.team.value);
// //             e.target.reset();
// //           }}>
// //             <input name="name" placeholder="Member Name" className="w-full p-2 mb-2 border rounded" required />
// //             {/* <select name="team" className="w-full p-2 mb-2 border rounded" required>
// //               <option value="">Select Team</option>
// //               {teams.map((team, index) => (
// //                 <option key={index} value={team}>{team}</option>
// //               ))}
// //             </select> */}
// //             <Button icon={UserPlus} label="Add Member" type="submit" />
// //           </form>
// //           {/* <Button 
// //             icon={Edit} 
// //             label="Enter Scores" 
// //             onClick={() => setCurrentScreen('scoring')}
// //             className="mt-4"
// //           /> */}
// //         </Screen>
// //       )}

// //       {currentScreen === 'scoring' && (
// //         <Screen title="Enter Scores">
// //           {members.map((member, memberIndex) => (
// //             <Card key={memberIndex} className="mb-4">
// //               <CardHeader>{member.name} - {member.team}</CardHeader>
// //               <CardContent>
// //                 {[0, 1, 2].map((gameIndex) => (
// //                   <div key={gameIndex} className="flex items-center justify-between mb-2">
// //                     <span>Game {gameIndex + 1}</span>
// //                     <input 
// //                       type="number" 
// //                       value={member.scores[gameIndex]}
// //                       onChange={(e) => updateScore(memberIndex, gameIndex, parseInt(e.target.value) || 0)}
// //                       className="w-16 p-1 border rounded"
// //                     />
// //                   </div>
// //                 ))}
// //               </CardContent>
// //             </Card>
// //           ))}
// //           <Button 
// //             icon={Award} 
// //             label="View Rankings" 
// //             onClick={() => setCurrentScreen('rankings')}
// //           />
// //         </Screen>
// //       )}

// //       {currentScreen === 'rankings' && (
// //         <Screen title="Rankings">
// //           {sortedMembers.map((member, index) => (
// //             <Card key={index} className="mb-2">
// //               <CardContent className="flex justify-between items-center">
// //                 <span>{index + 1}. {member.name} ({member.team})</span>
// //                 <span className="font-bold">{calculateTotalScore(member)} points</span>
// //               </CardContent>
// //             </Card>
// //           ))}
// //           <Button 
// //             icon={Users} 
// //             label="Back to Registration" 
// //             onClick={() => setCurrentScreen('registration')}
// //           />
// //         </Screen>
// //       )}
// //     </div>
// //   );
// // };

// // export default BragaGameManagement;

// import React, { useState, useEffect } from 'react';
// import { UserPlus, Users, Award, Edit, Camera } from 'lucide-react';
// import { Card, CardContent, CardHeader } from './components/ui';
// import { QRCode } from 'react-qr-code';

// const Screen = ({ children, title }) => (
//   <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 mb-8">
//     <h2 className="text-xl font-semibold mb-4">{title}</h2>
//     {children}
//   </div>
// );

// const Button = ({ icon: Icon, label, onClick }) => (
//   <button
//     onClick={onClick}
//     className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//   >
//     <Icon size={18} className="mr-2" />
//     <span>{label}</span>
//   </button>
// );

// const BragaGameManagement = () => {
//   const [members, setMembers] = useState([]);
//   const [currentScreen, setCurrentScreen] = useState('registration');
//   const [currentGame, setCurrentGame] = useState(1);

//   useEffect(() => {
//     const storedMembers = localStorage.getItem('members');
//     if (storedMembers) {
//       setMembers(JSON.parse(storedMembers));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('members', JSON.stringify(members));
//   }, [members]);

//   const addMember = (name) => {
//     setMembers([...members, { name, scores: [0, 0, 0] }]);
//   };

//   const updateScore = (memberIndex, gameIndex, score) => {
//     const newMembers = [...members];
//     newMembers[memberIndex].scores[gameIndex] = parseInt(score) || 0;
//     setMembers(newMembers);
//   };

//   const calculateTotalScore = (member) => member.scores.reduce((a, b) => a + b, 0);

//   const sortedMembers = [...members].sort((a, b) => 
//     calculateTotalScore(b) - calculateTotalScore(a)
//   );

//   const renderRegistration = () => (
//     <Screen title="Game">
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         addMember(e.target.name.value);
//         e.target.reset();
//       }}>
//         <input name="name" placeholder="Name" className="w-full p-2 mb-2 border rounded" required />
//         <Button icon={UserPlus} label="Add" type="submit" />
//       </form>
//       <ul className="mt-4">
//         {members.map((member, index) => (
//           <li key={index}>{index + 1}. {member.name}</li>
//         ))}
//       </ul>
//       {members.length > 0 && (
//         <Button 
//           icon={Edit} 
//           label="Start Games" 
//           onClick={() => setCurrentScreen('game')}
//           className="mt-4"
//         />
//       )}
//     </Screen>
//   );

//   const renderGame = () => (
//     <Screen title={`GAME ${currentGame}`}>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>{currentGame === 2 ? 'Step Count' : 'Score'}</th>
//             <th>Current Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {members.map((member, index) => (
//             <tr key={index}>
//               <td>{member.name}</td>
//               <td>
//                 <input 
//                   type="number" 
//                   value={member.scores[currentGame - 1]}
//                   onChange={(e) => updateScore(index, currentGame - 1, e.target.value)}
//                   className="w-16 p-1 border rounded"
//                 />
//               </td>
//               <td>{calculateTotalScore(member)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Button 
//         icon={currentGame < 3 ? Edit : Award} 
//         label={currentGame < 3 ? "Next Game" : "View Rankings"}
//         onClick={() => currentGame < 3 ? setCurrentGame(currentGame + 1) : setCurrentScreen('rankings')}
//         className="mt-4"
//       />
//     </Screen>
//   );

//   const renderRankings = () => (
//     <Screen title="Final Individual Ranking">
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th>Rank</th>
//             <th>Name</th>
//             <th>Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedMembers.map((member, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{member.name}</td>
//               <td>{calculateTotalScore(member)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* <div className="mt-4 flex justify-center">
//         <QRCode value={JSON.stringify(sortedMembers)} />
//       </div> */}
//       <Button 
//         icon={Users} 
//         label="Team vs Team" 
//         onClick={() => setCurrentScreen('teamVsTeam')}
//         className="mt-4"
//       />
//     </Screen>
//   );

//   const renderTeamVsTeam = () => {
//     const middleIndex = Math.ceil(sortedMembers.length / 2);
//     const teamA = sortedMembers.slice(0, middleIndex);
//     const teamB = sortedMembers.slice(middleIndex);

//     return (
//       <Screen title="Team">
//         <div className="flex justify-between">
//           <div>
//             <h3 className="font-bold">Team A</h3>
//             <ul>
//               {teamA.map((member, index) => (
//                 <li key={index}>{index + 1}. {member.name}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="font-bold text-2xl">VS</div>
//           <div>
//             <h3 className="font-bold">Team B</h3>
//             <ul>
//               {teamB.map((member, index) => (
//                 <li key={index}>{index + 1}. {member.name}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <Button 
//           icon={Award} 
//           label="Show Winner" 
//           onClick={() => setCurrentScreen('winner')}
//           className="mt-4"
//         />
//       </Screen>
//     );
//   };

//   const renderWinner = () => {
//     const middleIndex = Math.ceil(sortedMembers.length / 2);
//     const teamA = sortedMembers.slice(0, middleIndex);
//     const teamB = sortedMembers.slice(middleIndex);
//     const teamAScore = teamA.reduce((sum, member) => sum + calculateTotalScore(member), 0);
//     const teamBScore = teamB.reduce((sum, member) => sum + calculateTotalScore(member), 0);
//     const winner = teamAScore > teamBScore ? 'A' : 'B';
//     const winningTeam = winner === 'A' ? teamA : teamB;
  
//     return (
//       <Screen title="Winner">
//         <div className="mb-6">
//           <h3 className="text-center text-2xl font-bold mb-4">Team {winner}</h3>
//           <ul className="list-disc pl-6">
//             {winningTeam.map((member, index) => (
//               <li key={index} className="text-lg mb-2">{member.name}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex flex-col items-center">
//           <p className="text-center mb-2 font-bold">Photo Gallery for All Participants</p>
//           <img src="qr.jpeg" alt="Photo Gallery QR Code" className="w-48 h-48" />
//         </div>
//       </Screen>
//     );
//   };

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Braga Game Management</h1>
      
//       {currentScreen === 'registration' && renderRegistration()}
//       {currentScreen === 'game' && renderGame()}
//       {currentScreen === 'rankings' && renderRankings()}
//       {currentScreen === 'teamVsTeam' && renderTeamVsTeam()}
//       {currentScreen === 'winner' && renderWinner()}
//     </div>
//   );
// };

// export default BragaGameManagement;







// import React, { useState, useEffect } from 'react';
// import { UserPlus, Users, Award, Edit, ArrowLeft, Save } from 'lucide-react';
// import { Card, CardContent, CardHeader } from './components/ui';

// const Screen = ({ children, title, onBack }) => (
//   <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 mb-8">
//     <div className="flex justify-between items-center mb-4">
//       {onBack && (
//         <button onClick={onBack} className="text-blue-500">
//           <ArrowLeft size={24} />
//         </button>
//       )}
//       <h2 className="text-xl font-semibold">{title}</h2>
//       <div style={{ width: 24 }}></div> {/* Spacer for alignment */}
//     </div>
//     {children}
//   </div>
// );

// const Button = ({ icon: Icon, label, onClick, className }) => (
//   <button
//     onClick={onClick}
//     className={`flex items-center justify-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ${className}`}
//   >
//     <Icon size={18} className="mr-2" />
//     <span>{label}</span>
//   </button>
// );

// const BragaGameManagement = () => {
//   const [members, setMembers] = useState([]);
//   const [currentScreen, setCurrentScreen] = useState('registration');
//   const [currentGame, setCurrentGame] = useState(1);

//   useEffect(() => {
//     // Load data from localStorage on component mount
//     const storedMembers = localStorage.getItem('members');
//     if (storedMembers) {
//       setMembers(JSON.parse(storedMembers));
//     }
//   }, []);

//   useEffect(() => {
//     // Save data to localStorage whenever members change
//     localStorage.setItem('members', JSON.stringify(members));
//   }, [members]);

//   const addMember = (name) => {
//     setMembers([...members, { name, scores: [0, 0, 0] }]);
//   };

//   const updateScore = (memberIndex, gameIndex, score) => {
//     const newMembers = [...members];
//     newMembers[memberIndex].scores[gameIndex] = parseInt(score) || 0;
//     setMembers(newMembers);
//   };

//   const calculateTotalScore = (member) => member.scores.reduce((a, b) => a + b, 0);

//   const sortedMembers = [...members].sort((a, b) => 
//     calculateTotalScore(b) - calculateTotalScore(a)
//   );

//   const renderRegistration = () => (
//     <Screen title="Game">
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         addMember(e.target.name.value);
//         e.target.reset();
//       }}>
//         <input name="name" placeholder="Name" className="w-full p-2 mb-2 border rounded" required />
//         <Button icon={UserPlus} label="Add" type="submit" />
//       </form>
//       <ul className="mt-4">
//         {members.map((member, index) => (
//           <li key={index}>{index + 1}. {member.name}</li>
//         ))}
//       </ul>
//       {members.length > 0 && (
//         <Button 
//           icon={Edit} 
//           label="Start Games" 
//           onClick={() => setCurrentScreen('game')}
//           className="mt-4"
//         />
//       )}
//     </Screen>
//   );

//   const renderGame = () => (
//     <Screen 
//       title={`GAME ${currentGame}`} 
//       onBack={() => currentGame > 1 ? setCurrentGame(currentGame - 1) : setCurrentScreen('registration')}
//     >
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>{currentGame === 2 ? 'Step Count' : 'Score'}</th>
//             <th>Total Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {members.map((member, index) => (
//             <tr key={index}>
//               <td>{member.name}</td>
//               <td>
//                 <input 
//                   type="number" 
//                   value={member.scores[currentGame - 1]}
//                   onChange={(e) => updateScore(index, currentGame - 1, e.target.value)}
//                   className="w-16 p-1 border rounded"
//                 />
//               </td>
//               <td>{calculateTotalScore(member)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-between mt-4">
//         <Button 
//           icon={Save} 
//           label="Save Scores" 
//           onClick={() => {}} // This will be used for backend integration
//           className="mr-2"
//         />
//         <Button 
//           icon={currentGame < 3 ? Edit : Award} 
//           label={currentGame < 3 ? "Next Game" : "View Rankings"}
//           onClick={() => currentGame < 3 ? setCurrentGame(currentGame + 1) : setCurrentScreen('rankings')}
//         />
//       </div>
//     </Screen>
//   );

//   const renderRankings = () => (
//     <Screen title="Final Individual Ranking" onBack={() => setCurrentScreen('game')}>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th>Rank</th>
//             <th>Name</th>
//             <th>Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedMembers.map((member, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{member.name}</td>
//               <td>{calculateTotalScore(member)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Button 
//         icon={Users} 
//         label="Team vs Team" 
//         onClick={() => setCurrentScreen('teamVsTeam')}
//         className="mt-4"
//       />
//     </Screen>
//   );

//   const renderTeamVsTeam = () => {
//     const middleIndex = Math.ceil(sortedMembers.length / 2);
//     const teamA = sortedMembers.slice(0, middleIndex);
//     const teamB = sortedMembers.slice(middleIndex);

//     return (
//       <Screen title="Team" onBack={() => setCurrentScreen('rankings')}>
//         <div className="flex justify-between">
//           <div>
//             <h3 className="font-bold">Team A</h3>
//             <ul>
//               {teamA.map((member, index) => (
//                 <li key={index}>{index + 1}. {member.name}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="font-bold text-2xl">VS</div>
//           <div>
//             <h3 className="font-bold">Team B</h3>
//             <ul>
//               {teamB.map((member, index) => (
//                 <li key={index}>{index + 1}. {member.name}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <Button 
//           icon={Award} 
//           label="Show Winner" 
//           onClick={() => setCurrentScreen('winner')}
//           className="mt-4"
//         />
//       </Screen>
//     );
//   };

//   const renderWinner = () => {
//     const middleIndex = Math.ceil(sortedMembers.length / 2);
//     const teamA = sortedMembers.slice(0, middleIndex);
//     const teamB = sortedMembers.slice(middleIndex);
//     const teamAScore = teamA.reduce((sum, member) => sum + calculateTotalScore(member), 0);
//     const teamBScore = teamB.reduce((sum, member) => sum + calculateTotalScore(member), 0);
//     const winner = teamAScore > teamBScore ? 'A' : 'B';
//     const winningTeam = winner === 'A' ? teamA : teamB;
  
//     return (
//       <Screen title="Winner" onBack={() => setCurrentScreen('teamVsTeam')}>
//         <div className="mb-6">
//           <h3 className="text-center text-2xl font-bold mb-4">Team {winner}</h3>
//           <ul className="list-disc pl-6">
//             {winningTeam.map((member, index) => (
//               <li key={index} className="text-lg mb-2">{member.name}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex flex-col items-center">
//           <p className="text-center mb-2 font-bold">Photo Gallery for All Participants</p>
//           <img src="qr.jpeg" alt="Photo Gallery QR Code" className="w-48 h-48" />
//         </div>
//       </Screen>
//     );
//   };

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Braga Game Management</h1>
      
//       {currentScreen === 'registration' && renderRegistration()}
//       {currentScreen === 'game' && renderGame()}
//       {currentScreen === 'rankings' && renderRankings()}
//       {currentScreen === 'teamVsTeam' && renderTeamVsTeam()}
//       {currentScreen === 'winner' && renderWinner()}
//     </div>
//   );
// };

// export default BragaGameManagement;










import React, { useState, useEffect } from 'react';
import { UserPlus, Users, Award, Edit, ArrowLeft, Save } from 'lucide-react';
import { Card, CardContent, CardHeader } from './components/ui';
import { db } from './firebase';
import { collection, addDoc, getDocs, updateDoc, doc, query, orderBy } from "firebase/firestore";

const Screen = ({ children, title, onBack }) => (
  <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 mb-8">
    <div className="flex justify-between items-center mb-4">
      {onBack && (
        <button onClick={onBack} className="text-blue-500">
          <ArrowLeft size={24} />
        </button>
      )}
      <h2 className="text-xl font-semibold">{title}</h2>
      <div style={{ width: 24 }}></div>
    </div>
    {children}
  </div>
);

const Button = ({ icon: Icon, label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ${className}`}
  >
    <Icon size={18} className="mr-2" />
    <span>{label}</span>
  </button>
);

const BragaGameManagement = () => {
  const [members, setMembers] = useState([]);
  const [currentScreen, setCurrentScreen] = useState('registration');
  const [currentGame, setCurrentGame] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    setLoading(true);
    const membersCollection = collection(db, 'members');
    const membersSnapshot = await getDocs(query(membersCollection, orderBy('name')));
    const membersList = membersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setMembers(membersList);
    setLoading(false);
  };

  const addMember = async (name) => {
    const newMember = { name, scores: [0, 0, 0] };
    const docRef = await addDoc(collection(db, 'members'), newMember);
    setMembers([...members, { id: docRef.id, ...newMember }]);
  };

  const updateScore = async (memberIndex, gameIndex, score) => {
    const member = members[memberIndex];
    const newScores = [...member.scores];
    newScores[gameIndex] = parseInt(score) || 0;
    
    await updateDoc(doc(db, 'members', member.id), { scores: newScores });
    
    const newMembers = [...members];
    newMembers[memberIndex] = { ...member, scores: newScores };
    setMembers(newMembers);
  };

  const calculateTotalScore = (member) => member.scores.reduce((a, b) => a + b, 0);

  const sortedMembers = [...members].sort((a, b) => 
    calculateTotalScore(b) - calculateTotalScore(a)
  );

  const renderRegistration = () => (
    <Screen title="Game">
      <form onSubmit={(e) => {
        e.preventDefault();
        addMember(e.target.name.value);
        e.target.reset();
      }}>
        <input name="name" placeholder="Name" className="w-full p-2 mb-2 border rounded" required />
        <Button icon={UserPlus} label="Add" type="submit" />
      </form>
      <ul className="mt-4">
        {members.map((member, index) => (
          <li key={member.id}>{index + 1}. {member.name}</li>
        ))}
      </ul>
      {members.length > 0 && (
        <Button 
          icon={Edit} 
          label="Start Games" 
          onClick={() => setCurrentScreen('game')}
          className="mt-4"
        />
      )}
    </Screen>
  );

  const renderGame = () => (
    <Screen 
      title={`GAME ${currentGame}`} 
      onBack={() => currentGame > 1 ? setCurrentGame(currentGame - 1) : setCurrentScreen('registration')}
    >
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>{currentGame === 2 ? 'Step Count' : 'Score'}</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>
                <input 
                  type="number" 
                  value={member.scores[currentGame - 1]}
                  onChange={(e) => updateScore(index, currentGame - 1, e.target.value)}
                  className="w-16 p-1 border rounded"
                />
              </td>
              <td>{calculateTotalScore(member)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <Button 
          icon={currentGame < 3 ? Edit : Award} 
          label={currentGame < 3 ? "Next Game" : "View Rankings"}
          onClick={() => currentGame < 3 ? setCurrentGame(currentGame + 1) : setCurrentScreen('rankings')}
        />
      </div>
    </Screen>
  );

  const renderRankings = () => (
    <Screen title="Final Individual Ranking" onBack={() => setCurrentScreen('game')}>
      <table className="w-full">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedMembers.map((member, index) => (
            <tr key={member.id}>
              <td>{index + 1}</td>
              <td>{member.name}</td>
              <td>{calculateTotalScore(member)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button 
        icon={Users} 
        label="Team vs Team" 
        onClick={() => setCurrentScreen('teamVsTeam')}
        className="mt-4"
      />
    </Screen>
  );

  const renderTeamVsTeam = () => {
    const middleIndex = Math.ceil(sortedMembers.length / 2);
    const teamA = sortedMembers.slice(0, middleIndex);
    const teamB = sortedMembers.slice(middleIndex);

    return (
      <Screen title="Team" onBack={() => setCurrentScreen('rankings')}>
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold">Team A</h3>
            <ul>
              {teamA.map((member, index) => (
                <li key={member.id}>{index + 1}. {member.name}</li>
              ))}
            </ul>
          </div>
          <div className="font-bold text-2xl">VS</div>
          <div>
            <h3 className="font-bold">Team B</h3>
            <ul>
              {teamB.map((member, index) => (
                <li key={member.id}>{index + 1}. {member.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <Button 
          icon={Award} 
          label="Show Winner" 
          onClick={() => setCurrentScreen('winner')}
          className="mt-4"
        />
      </Screen>
    );
  };

  const renderWinner = () => {
    const middleIndex = Math.ceil(sortedMembers.length / 2);
    const teamA = sortedMembers.slice(0, middleIndex);
    const teamB = sortedMembers.slice(middleIndex);
    const teamAScore = teamA.reduce((sum, member) => sum + calculateTotalScore(member), 0);
    const teamBScore = teamB.reduce((sum, member) => sum + calculateTotalScore(member), 0);
    const winner = teamAScore > teamBScore ? 'A' : 'B';
    const winningTeam = winner === 'A' ? teamA : teamB;
  
    return (
      <Screen title="Winner" onBack={() => setCurrentScreen('teamVsTeam')}>
        <div className="mb-6">
          <h3 className="text-center text-2xl font-bold mb-4">Team {winner}</h3>
          <ul className="list-disc pl-6">
            {winningTeam.map((member, index) => (
              <li key={member.id} className="text-lg mb-2">{member.name}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center mb-2 font-bold">Photo Gallery for All Participants</p>
          <img src="qr.jpeg" alt="Photo Gallery QR Code" className="w-48 h-48" />
        </div>
      </Screen>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Braga Game Management</h1>
      
      {currentScreen === 'registration' && renderRegistration()}
      {currentScreen === 'game' && renderGame()}
      {currentScreen === 'rankings' && renderRankings()}
      {currentScreen === 'teamVsTeam' && renderTeamVsTeam()}
      {currentScreen === 'winner' && renderWinner()}
    </div>
  );
};

export default BragaGameManagement;

