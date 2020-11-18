import React from "react";
import _ from 'lodash';
import PropTypes from 'prop-types';
const Page = ({itemsCount,pageSize,onPageChange,currentPage}) => {
  
  const pagesCount=Math.ceil(itemsCount/pageSize);
  const pages=_.range(1,pagesCount+1)
  if (pagesCount===1) return null;
  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination">
          {pages.map(page=>(
          <li key={page} className={page === currentPage? 'page-item active' :'page-item'}>
            <button style={page===currentPage? {color:"#FFFFFF"} : {color:"#000000"}}onClick={()=>onPageChange(page)} className="page-link" >
              {page}
            </button>
          </li>))}
        </ul>
      </nav>
    </div>
  );
};
Page.propTypes={
    itemsCount:PropTypes.number.isRequired,
    pageSize:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired,
    currentPage:PropTypes.number.isRequired
}
export default Page;
