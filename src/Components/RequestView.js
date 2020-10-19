import React from 'react';
import { Link } from 'react-router-dom';

function RequestView(props) {
  return (
    <div className="border mb-4 overflow-hidden rounded-lg p-3">
      <div className="mb-3 justify-start">
        {/* Reward heading title */}
        <div className="pl-2">
          <h3 className="font-bold text-xl">
            <Link>{props.titles}</Link>
          </h3>
          <div className="font-light text-xs">
            Added by {props.authors} {props.dateCreateds} - status:{' '}
            {props.status}
          </div>
        </div>
      </div>

      {/* Request and rewards */}
      <hr className="w-100 mb-3" />
      <div className="m-2">
        <h1>Request</h1>
        <div className="italic text-sm" style={{ color: '#595959' }}>
          <p>{props.request}</p>
        </div>
        <div className="my-2">
          <h1>Rewards</h1>
          <div className="italic text-sm" style={{ color: '#595959' }}>
            <p>
              {props.reward}: rewarded by @{props.rewarders}
            </p>
          </div>
        </div>

        {/* contribute a reward button */}
        <div className="w-full my-4 text-center">
          <button className="bg-blue-500  text-white p-2 w-48 mx-auto rounded-lg">
            Contribute a reward
          </button>
        </div>
        <div className="my-2">
          <h1>Notes</h1>
          <div className="italic text-sm" style={{ color: '#595959' }}>
            <p> {props.notes} </p>
          </div>
        </div>

        {/* upload photo proof*/}
        <div className="flex flex-row justify-between">
          <button className="inline-flex py-2 my-3 border border-gray-400 rounded-lg px-2 w-8/12">
            Upload photo proof
          </button>
          {/* claim button */}
          <button className="inline-flex py-2 my-3 bg-blue-500 text-white rounded-lg px-6">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
}
export default RequestView;
