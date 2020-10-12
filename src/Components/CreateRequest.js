import React from 'react';
import { useState } from 'react';

function CreateRequest(props) {
	//const [rewards, setRewards] = useState('');
	const [rewardsList, setRewardsList] = useState([]);
	const initialState = { description: '', rewardsList: [], note: '' };
	const [request, setRequest] = useState(initialState);
	const [requestList, setRequestList] = useState([]);

	return (
		<div>
			<form className='text mx-0 border-none border-gray-1200 rounded px-50 p-1 cursor-pointer'>
				<h1 className='font-sans text-3xl text-gray-800 text-left mb-1'>
					Create a request
				</h1>
				<p className=' text-sm border-b mb-5'>
					This request will be publicly visible on the home page
				</p>
				<label className='form__label mt-5'>Description</label>
				<input
					type='text'
					id='request-description'
					placeholder='A short description of the request you would like done'
					className='text-field focus:outline-none focus:bg-white text-center'
					//value={requestDescription}
					value={request.description}
					onChange={(event) => {
						event.preventDefault();
						setRequest({ ...request, description: event.target.value });
					}}
				/>
				<label className='form__label'>Favour to reward</label>
				<div className='favour flex justify-center'>
					<button
						className='favour-list border rounded px-4 p-1 m-1'
						value={request.rewards}
						onClick={(event) => {
							event.preventDefault();
							setRewardsList((rewardsList) => [...rewardsList, 'Coffee']);
							setRequest({ ...request, rewardsList });
						}}>
						Coffee
					</button>
					<button
						className='favour-list border rounded px-4 p-1 m-1'
						value={request.rewards}
						onClick={(event) => {
							event.preventDefault();
							setRewardsList((rewardsList) => [...rewardsList, 'Chocolate']);
							setRequest({ ...request, rewardsList });
						}}>
						Chocolate
					</button>
					<button
						className='favour-list border rounded px-4 p-1 m-1'
						value={request.rewards}
						onClick={(event) => {
							event.preventDefault();
							setRewardsList((rewardsList) => [...rewardsList, 'Pizza']);
							setRequest({ ...request, rewardsList });
						}}>
						Pizza
					</button>
					<button
						className='favour-list border rounded px-4 p-1 m-1'
						value={request.rewards}
						onClick={(event) => {
							event.preventDefault();
							setRewardsList((rewardsList) => [...rewardsList, 'Cupcakes']);
							setRequest({ ...request, rewardsList });
						}}>
						Cupcakes
					</button>
				</div>
				<div className='favour flex justify-center'>
					<button
						className='favour-list border rounded px-4 p-1 m-1'
						value={request.rewards}
						onClick={(event) => {
							event.preventDefault();
							setRewardsList((rewardsList) => [...rewardsList, 'Chips']);
							setRequest({ ...request, rewardsList });
						}}>
						Chips
					</button>
					<button
						className='favour-list border rounded px-4 p-1 m-1'
						value={request.rewards}
						onClick={(event) => {
							event.preventDefault();
							setRewardsList((rewardsList) => [...rewardsList, 'Fries']);
							setRequest({ ...request, rewardsList });
						}}>
						Fries
					</button>
					<button
						className='favour-list border rounded px-4 p-1 m-1'
						value={request.rewards}
						onClick={(event) => {
							event.preventDefault();
							setRewardsList((rewardsList) => [...rewardsList, 'Burger']);
							setRequest({ ...request, rewardsList });
						}}>
						Burger
					</button>
					<button
						className='favour-list border px-4 p-1 m-1'
						value={request.rewards}
						onClick={(event) => {
							event.preventDefault();
							setRewardsList((rewardsList) => [...rewardsList, 'Gift Card']);
							setRequest({ ...request, rewardsList });
						}}>
						Gift Card
					</button>
				</div>
				<label className='form__label'>Notes</label>
				<input
					type='text'
					id='request-description'
					placeholder='Any notes you would like to add to this request'
					className='text-field focus:outline-none focus:bg-white text-center'
					value={request.notes}
					onChange={(event) => {
						event.preventDefault();
						setRequest({ ...request, note: event.target.value });
					}}
				/>
				<div className='text-right mt-6'>
					<button
						className='form__button form__button--primary'
						type='submit'
						onClick={(event) => {
							event.preventDefault();
							setRequestList((requestList) => [...requestList, request]);
						}}>
						Create
					</button>
				</div>
			</form>

			<ul>
				{requestList.map((item) => (
					<li>
						description: {item.description}, rewards: {item.rewardsList}, notes:
						{item.note}
					</li>
				))}
			</ul>
		</div>
	);
}

export default CreateRequest;
