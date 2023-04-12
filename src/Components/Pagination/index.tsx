import { usePagination, DOTS } from '../../app/UsePagination';
import './index.scss';

interface Props {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}
const Pagination = (props: Props) => {
  const { totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <ul className={'pagination-container pagination-bar'}>
      <li
        className={
          currentPage !== 1 ? 'pagination-item' : 'pagination-item disabled'
        }
      >
        <div className='arrow left' />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber, i) => {
          if (pageNumber === DOTS) {
            return (
              <li key={i} className='pagination-item dots'>
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={i}
              className={
                pageNumber !== currentPage
                  ? 'pagination-item'
                  : 'pagination-item disabled selected'
              }
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={
          currentPage !== lastPage
            ? 'pagination-item'
            : 'pagination-item disabled'
        }
      >
        <div className='arrow right' />
      </li>
    </ul>
  );
};

export default Pagination;
