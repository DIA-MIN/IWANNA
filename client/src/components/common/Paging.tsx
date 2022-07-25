import React from 'react';
import './common.scss';
import Pagination from 'react-js-pagination';

interface PagingProps {
  page: number;
  count: number;
  setPage: (e: number) => void;
}

const Paging: React.FC<PagingProps> = ({page, count, setPage}) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={'<'}
      nextPageText={'>'}
      onChange={setPage}
    />
  );
};

export default Paging;
