import React from 'react';
import { Link } from 'react-router-dom';

/**
 * React component broilerplate code. Refer to this component for guidance.
 * Displays the request information.
 */
function RequestCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden rounded-lg">
            <div className="p-3">
                <div className="mb-3 flex justify-start">
                    <div className="self-center bg-blue-500 w-10 h-10 p-2 rounded-full"></div>
                    <div className="pl-2">
                        <h3 className="font-bold text-xl">
                            <Link to={`/requests/${props.request.id}`}>{props.request.title}</Link>
                        </h3>
                        <div className="font-light text-xs">
                            Added by {props.request.author} {props.request.dateCreated}
                        </div>
                    </div>
                </div>
                <div className="mb-3">{props.request.description}</div>
                <hr className="w-100 mb-3" />
                <div className="flex justify-end w-full">
                    <div className="flex-grow text-sm font-bold">
                        Jess, Dave, and Barry are rewarding this
                    </div>
                    <Link
                        to={`/requests/${props.request.id}`}
                        className="bg-blue-500 text-white p-2 flex justify-center w-24 rounded-lg"
                    >   
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default RequestCard;
