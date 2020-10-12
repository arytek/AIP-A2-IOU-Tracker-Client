import React from 'react';

function LeaderBoard() {
	return (
		<div className='mx-auto w-full md:w-2/4'>
			<h1 className='font-bold text-2x1 mb-3'>Leaderboard</h1>
			<br />
			<h2 className='font-bold text-2x1 mb-3'>Most Fulfilling Users</h2>
			<p>The top ten users that have fulfilled the most requests and favours</p>
			<table className='board border rounded'>
				<tr className='board-list border'>
					<th className='board-col border p-2  px-10'>Rank</th>
					<th className='board-col border px-20'>Username</th>
					<th className='board-col border px-20'>Request Fulfilled</th>
				</tr>
				<tr>
					<td className='board-col border p-2'>Test Rank</td>
					<td className='board-col border'>Test Username</td>
					<td className='board-col border'>Test Request</td>
				</tr>
			</table>
		</div>
	);
}

export default LeaderBoard;
