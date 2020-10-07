import React from 'react';
import { Link } from 'react-router-dom';

function Requester(props) {
    return (
        <div className="flex justify-end w-full">
            <div className="flex-grow text-2xl font-bold">
                {props.requester}
            </div>
            <button className="bg-blue-500 text-white p-2 flex justify-center w-24">
                Claim
            </button>
         </div>
    );
}
export default Requester;