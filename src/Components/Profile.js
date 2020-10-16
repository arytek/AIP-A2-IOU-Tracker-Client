import React from 'react';
import CreateRequestForm from './CreateRequestForm';
import SideMenu from './SideMenu';
/**
 * Component that renders the profile page of the user where they can manage
 * their existing favours and requests, plus other things.
 */
function Profile(props) {
	return (
		<div>
			<SideMenu />
			<div className='text text-center'>
				<CreateRequestForm />
			</div>
		</div>
	);
}
export default Profile;
