import React from 'react';
import Loader from '../Loader';
import { useAxios } from '../../Hooks/HttpRequestMainServer';

function AddToDb(props) {
  let httpRequest = useAxios('signup', 'post', undefined, props.signUpData);
  let content = null;

  if (httpRequest.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (httpRequest.loading) {
    content = <Loader></Loader>;
  }

  if (httpRequest.data) {
    props.addedToDb();
  }

  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
}
export default AddToDb;
