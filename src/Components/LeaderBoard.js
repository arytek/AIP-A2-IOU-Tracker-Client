import React from 'react';

function LeaderBoard() {
  return (
    <div className="m-6 mx-auto w-full max-w-2xl">
      <h1 className="font-sans text-2xl text-left mb-4">Leaderboard</h1>
      <br />
      <h2 className="font-bold text-2x1 mb-3">Most Fulfilling Users</h2>
      <p>The top ten users that have fulfilled the most requests and favours</p>

      {/* Table Element */}
      <table
        style={{ borderSpacing: '0px' }}
        className="border-separate rounded-lg mt-4 inline-block"
      >
        <thead>
          <tr className="">
            <th className="border px-10 rounded-tl-lg">Rank</th>
            <th className="border px-20">Username</th>
            <th className="border px-20 rounded-tr-lg">Request Fulfilled</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="border p-2 text-center rounded-bl-lg">Test Rank</td>
            <td className="border p-2 text-center">Test Username</td>
            <td className="border p-2 text-center rounded-br-lg">
              Test Request
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
