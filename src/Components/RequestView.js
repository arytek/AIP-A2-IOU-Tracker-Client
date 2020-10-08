import React from 'react';
import { Link } from 'react-router-dom';

function RequestView(props) {
    return (
        // <div>
        //     <div>
        //     <h1 className="font-bold text-3xl">
        //         {props.title}
        //     </h1>
        //     <div className="m-4">
        //         <h1>
        //             Description: {props.description}
        //         </h1>
        //         <h1 className="my-4">Requesters:</h1>
        //         </div>
        //     </div>
        // </div>
        <div className="border mb-4 rounded overflow-hidden rounded-lg ml-64 mr-64">
            <div className="p-3">
                <div className="mb-3 flex justify-start">
                    <div className="self-center bg-blue-500 w-10 h-10 p-2 rounded-full"></div>
                    {/* Reward headding title */}
                    <div className="pl-2">
                        <h3 className="font-bold text-xl">
                            <Link >{props.titles}</Link>
                        </h3>
                        <div className="font-light text-xs">
                            Added by {props.authors} {props.dateCreateds} - status: {props.status}
                        </div>
                    </div>
                </div>
                {/* Request and rewards */}
                <hr className="w-100 mb-3" />
                <div className="m-2">
                    <h1>Request</h1>
                    <div className="italic text-sm" style={{color: "#595959"}}>
                        <p>{props.request}</p>
                    </div>
                    <div className="my-2">
                        <h1>Rewards</h1>
                        <div className="italic text-sm" style={{color: "#595959"}}>
                            <p>{props.reward}: rewarded by @{props.requester}</p>
                        </div>
                    </div>
                    {/* contribute a rewared button */}
                    <div className="mx-56 my-4">
                        <button
                            className="bg-blue-500 text-white p-2 flex justify-center w-48 rounded-lg"
                        >   
                            Contribute a reward
                        </button>
                    </div>
                    <div className="my-2">
                        <h1>Notes</h1>
                        <div className="italic text-sm" style={{color: "#595959"}}>
                            <p>{props.notes}</p>
                        </div>
                    </div>
                    
                    {/* upload photo proof*/}
                    <button className="py-2 mb-3 border border-gray-400 rounded-lg px-2 w-64 padding-right-300">
                        Upload photo proof
                    </button>
                    {/* claim button */}
                    <button
                        className="bg-blue-500 text-white py-2 justify-center rounded-lg px-6 ml-64"
                    >   
                        Claim
                    </button>
                </div>
            </div>
        </div>
    );
}
export default RequestView;