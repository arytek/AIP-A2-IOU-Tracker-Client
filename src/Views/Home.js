import React from 'react';
import Loader from '../Components/Loader';
import RequestCard from '../Components/RequestCard';
import requestsData from '../requestsFakeData';
import Search from '../Components/Search';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';

/**
 * Component used to display the home page.
 * TODO: Refactor so that it displays a list of requests.
 */
function Home() {
	//const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/requests/?page=1&limit=10`;

	let requests = requestsData;
	let content = null;
	const [currentPage, setCurrentPage] = useState(0);
	const [data, setData] = useState([]);
	/* set quantity of data in each page  */
	const PER_PAGE = 10;
	const offset = currentPage * PER_PAGE;
	const pageCount = Math.ceil(data.length / PER_PAGE);

	useEffect(() => {
		setData(requests);
	}, []);

	/* handle for selecting page  */
	function handlePageClick({ selected: selectedPage }) {
		setCurrentPage(selectedPage);
	}

	if (requests.error) {
		content = <p>There was an error please refresh or try again later.</p>;
	}

	if (requests.loading) {
		content = <Loader></Loader>;
	}

	if (requests) {
		/* handle for display request data */
		content = data.slice(offset, offset + PER_PAGE).map((request) => (
			<div key={request.id}>
				<RequestCard request={request} />
			</div>
		));
	}

	return (
		<div>
			<div>
				<h1 className='text-2xl mb-3'>Requests</h1>
				<Search />
				{content}
				<div className='flex flex-wrap justify-center text-center font-bold text-blue-500 cursor-pointer '>
					<ReactPaginate
						previousLabel={'← Previous'}
						nextLabel={'Next →'}
						pageCount={pageCount}
						onPageChange={handlePageClick}
						containerClassName={'pagination'}
						previousLinkClassName={'pagination__link'}
						nextLinkClassName={'pagination__link'}
						disabledClassName={'pagination__link--disabled'}
						activeClassName={'pagination__link--active'}
					/>
				</div>
			</div>
		</div>
	);
}
export default Home;
