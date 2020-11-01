import React from 'react';
import { Link } from 'react-router-dom';
import CreateRequestForm from '../Components/CreateRequestForm';

// request view layout
function RequestView(props) {
  return (
    <div className="border mb-4 overflow-hidden rounded-lg p-3 m-6 mx-auto w-full max-w-2xl">
      <div className="mb-3 justify-start text-left">
        {/* Reward heading title */}
        <div className="pl-2">
          <h3 className="font-bold text-xl text-left">
            <Link>{props.titles}</Link>
          </h3>
          <div className="font-light text-xs text-left">
            Added by {props.authors} {props.dateCreateds} - status:{' '}
            {props.status}
          </div>
        </div>
      </div>

      {/* Request and rewards */}
      <hr className="w-100 mb-3" />
      <div className="m-2 text-left">
        <h1>Request</h1>
        <div className="italic text-sm" style={{ color: '#595959' }}>
          <p>{props.request}</p>
        </div>
        <div className="my-2">
          <h1>Rewards</h1>
          <div className="italic text-sm" style={{ color: '#595959' }}>
            <p>{props.reward}</p>
          </div>
        </div>

        {/* contribute a reward button */}
        <div className="w-full my-4 text-center">
          {/* Contribute reward button */}
          {props.contributeButton}
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
