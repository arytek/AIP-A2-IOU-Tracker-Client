import React from 'react';

function ContributeRewardForm(props) {
  //const [rewards, setRewards] = useState('');
  let rewardsList = "";

  return (
    <div>
      <form className="text mx-0 border-none border-gray-1200 rounded px-50 p-1">
        <h1 className="font-sans text-3xl text-gray-800 text-left mb-1">
          Contribute a Reward
        </h1>
        <p className=" text-sm border-b mb-5">
          After the request is fulfilled, the reward you specify below
          will turn into a favour you will owe to the user that fulfils the request
        </p>
        <label className="form__label">Favour to reward</label>
        <div className="favour flex justify-center">
          <button
            className="favour-list border rounded px-4 p-1 m-1"
            onClick={(event) => {
              event.preventDefault();
              rewardsList = "Coffee";
            }}
          >
            Coffee
          </button>
          <button
            className="favour-list border rounded px-4 p-1 m-1"
            onClick={(event) => {
              event.preventDefault();
              rewardsList = "Chocolate";
            }}
          >
            Chocolate
          </button>
          <button
            className="favour-list border rounded px-4 p-1 m-1"
            onClick={(event) => {
              event.preventDefault();
              rewardsList = "Pizza";

            }}
          >
            Pizza
          </button>
          <button
            className="favour-list border rounded px-4 p-1 m-1"
            onClick={(event) => {
              event.preventDefault();
              rewardsList = "Cupcakes";
            }}
          >
            Cupcakes
          </button>
        </div>
        <div className="favour flex justify-center">
          <button
            className="favour-list border rounded px-4 p-1 m-1"
            onClick={(event) => {
              event.preventDefault();
              rewardsList = "Chips";
            }}
          >
            Chips
          </button>
          <button
            className="favour-list border rounded px-4 p-1 m-1"
            onClick={(event) => {
              event.preventDefault();
              rewardsList = "Fries";
            }}
          >
            Fries
          </button>
          <button
            className="favour-list border rounded px-4 p-1 m-1"
            onClick={(event) => {
              event.preventDefault();
              rewardsList = "Burger";
            }}
          >
            Burger
          </button>
          <button
            className="favour-list border px-4 p-1 m-1"
            onClick={(event) => {
              event.preventDefault();
              rewardsList = "Gift Card";
            }}
          >
            Gift Card
          </button>
        </div>
        
        <div className="text-right mt-6">
          <button
            className=" bg-blue-500 text-white form__button rounded-lg"
            type="submit"
            onClick={(event) => {
              "window.location.href=window.location.href"
              //store in local storage
              localStorage.setItem('ContributeReward',(rewardsList));
            }}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContributeRewardForm;