import React from 'react';

function LeaderBoard() {
  return (
    <div className="self-end">
      <h1 className="text-2xl mb-3">Leaderboard</h1>
      <br />
      <h2 className="font-bold text-2x1 mb-3">Most Fulfilling Users</h2>
      <p>The top ten users that have fulfilled the most requests and favours</p>

      {/* Table Element */}
      <table
        style={{ borderSpacing: '0px' }}
        className="border-separate rounded-lg mt-4"
      >
        <tr className="">
          <th className="border px-10 rounded-tl-lg">Rank</th>
          <th className="border px-20">Username</th>
          <th className="border px-20 rounded-tr-lg">Request Fulfilled</th>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="border p-2 text-center rounded-bl-lg">Test Rank</td>
          <td className="border p-2 text-center">Test Username</td>
          <td className="border p-2 text-center rounded-br-lg">Test Request</td>
        </tr>
      </table>
    </div>
  );
}

export default LeaderBoard;
