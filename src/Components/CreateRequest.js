import React from 'react';
import { useState } from 'react';

/* Specify rewards list */

const lists = [
	{ id: 1, rewardName: 'Coffee' },
	{ id: 2, rewardName: 'Chocolate' },
	{ id: 3, rewardName: 'Pizza' },
	{ id: 4, rewardName: 'Cupcakes' },
	{ id: 5, rewardName: 'Chips' },
	{ id: 6, rewardName: 'Fries' },
	{ id: 7, rewardName: 'Burger' },
	{ id: 8, rewardName: 'Gift Card' },
];

function CreateRequest(props) {
	
	/* initial state for creating request */
	
	const initialState = { description: '', rewardsList: [], note: '' };
	const [rewardsList, setRewardsList] = useState([]);
	const [request, setRequest] = useState(initialState);
	const [requestList, setRequestList] = useState([]);
	const [selected, setSelected] = useState(0);

	
	/* handle for changing color for selected reward */
	
	const handleColor = (row) => {
		setSelected(row.id);
	};

	return (
		<div>
			<form className='text mx-0 border-none border-gray-1200 rounded px-50 p-1'>
				<h1 className='font-sans text-3xl text-gray-800 text-left mb-1'>
					Create a request
				</h1>
				<p className=' text-sm border-b mb-5'>
					This request will be publicly visible on the home page
				</p>
				{/* Request description */}
				<label className='form__label mt-5'>Description</label>
				<input
					type='text'
					id='request-description'
					placeholder='A short description of the request you would like done'
					className='text-field focus:outline-none focus:bg-white text-center'
					value={request.description}
					onChange={(event) => {
						event.preventDefault();
						setRequest({ ...request, description: event.target.value });
					}}
				/>
				<label className='form__label'>Favour to reward</label>
				{/* display rewards list */}
				<div className='favour justify-center'>
					{lists.map((list) => (
						<button
							className='favour-list border rounded px-4 p-1 m-1'
							key={list.id}
							value={list.rewardName}
							onClick={(event) => {
								event.preventDefault();
								setRewardsList((rewardsList) => [
									...rewardsList,
									list.rewardName,
								]);
								setRequest({ ...request, rewardsList });
								handleColor(list);
							}}
							style={{
								background: list.id === selected ? '#63B3ED' : '',
								color: list.id === selected ? '#FFFFFF' : '',
							}}>
							{list.rewardName}
						</button>
					))}
				</div>
				{/* Request note */}
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
				{/* create new request button */}
				<div className='text-right mt-6'>
					<button
						className='form__button form__button--primary'
						type='submit'
						onClick={(event) => {
							setRequestList((requestList) => [...requestList, request]);
						}}>
						Create
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreateRequest;
