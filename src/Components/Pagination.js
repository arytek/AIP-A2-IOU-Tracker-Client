import React from 'react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

function Pagination() {
	const [currentPage, setCurrentPage] = useState(0);
	const [data, setData] = useState([]);

	const PER_PAGE = 2;
	const offset = currentPage * PER_PAGE;
	const currentPageData = data
		.slice(offset, offset + PER_PAGE)
		.map(({ thumburl }) => <img src={thumburl} />);
	const pageCount = Math.ceil(data.length / PER_PAGE);

	useEffect(() => {
		fetchData();
	}, []);

	function fetchData() {}

	function handlePageClick({ selected: selectedPage }) {
		setCurrentPage(selectedPage);
	}
	return (
		<div>
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
	);
}

export default Pagination;
