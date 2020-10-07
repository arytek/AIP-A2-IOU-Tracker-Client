import React from 'react';
import { Link } from 'react-router-dom';

function RequestView(props) {
    return (
        <div>
            <div>
            <h1 className="font-bold text-3xl">
                {props.title}
            </h1>
            <div className="m-4">
                <h1>
                    Description: {props.description}
                </h1>
                <h1 className="my-4">Requesters:</h1>
                </div>
            </div>
        </div>
    );
}
export default RequestView;