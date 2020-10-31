import React from 'react';
import Loader from '../Components/Loader';
import requestsData from '../requestsFakeData';

function LeaderBoard(props) {
	let requests = requestsData;
	let content = null;

	if (requests.error) {
		content = <p>There was an error please refresh or try again later.</p>;
	}

	if (requests.loading) {
		content = <Loader></Loader>;
	}

	if (requests) {
		{
			/* retrieve users data */
		}
		content = requests.map((request) => (
			<tr className='' key={request.id}>
				<td className='border p-2 text-center rounded-bl-lg'>{request.id}</td>
				<td className='border p-2 text-center'>{request.author}</td>
				<td className='border p-2 text-center rounded-br-lg'>
					{request.description}
				</td>
			</tr>
		));
	}
	return (
		<div>
			{/* display most fulfilling users table */}
			<div className='self-end'>
				<h1 className='text-2xl mb-3'>Leaderboard</h1>
				<br />
				<h2 className='font-bold text-2x1 mb-3'>Most Fulfilling Users</h2>
				<p>
					The top ten users that have fulfilled the most requests and favours
				</p>
				<table
					style={{ borderSpacing: '0px' }}
					className='border-separate rounded-lg mt-4'>
					<tr className=''>
						<th className='border px-10 rounded-tl-lg'>Rank</th>
						<th className='border px-20'>Username</th>
						<th className='border px-20 rounded-tr-lg'>Request Fulfilled</th>
					</tr>
					{content}
				</table>
			</div>
		</div>
	);
}

export default LeaderBoard;
