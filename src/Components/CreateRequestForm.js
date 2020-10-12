import React, { useState } from 'react';
import CreateRequest from './CreateRequest';
import { useTransition, animated } from 'react-spring';

function CreateRequestForm() {
	const [showRequestForm, setShowRequestForm] = useState(false);

	const maskTransitions = useTransition(showRequestForm, null, {
		from: { position: 'absolute', opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	const menuTransitions = useTransition(showRequestForm, null, {
		from: { opacity: 0, transform: 'translateY(-100%)' },
		enter: { opacity: 1, transform: 'translateY(0%)' },
		leave: { opacity: 0, transform: 'translateY(-100%)' },
	});

	return (
		<div>
			<span
				className='text mx-5 border border-gray-900 rounded px-5 p-1 cursor-pointer'
				onClick={() => setShowRequestForm(!showRequestForm)}>
				Create Request
			</span>
			{maskTransitions.map(
				({ item, key, props }) =>
					item && (
						<animated.div
							key={key}
							style={props}
							className='overlay--black'
							onClick={() => setShowRequestForm(false)}></animated.div>
					)
			)}

			{menuTransitions.map(
				({ item, key, props }) =>
					item && (
						<animated.div
							key={key}
							style={props}
							className='fixed bg-white top-0 left-0 right-0 mx-auto w-full max-w-lg z-50 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
							<CreateRequest closeMenu={() => setShowRequestForm(false)} />
						</animated.div>
					)
			)}
		</div>
	);
}

export default CreateRequestForm;
