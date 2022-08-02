import React from 'react'

function Pagination({itemPerPage, totalItem, paginate}) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalItem, itemPerPage); i++) {
        pageNumber.push(i);
    }

  return (
    <section>
        <div className="pegination-cover">
            <a href={void(0)}>Previous</a>
            {pageNumber.map((number) => {
                return (
                    <a href={void(0)} onClick={(e) => {paginate(number)}} key={number}> {number} </a>
                )
            })}
            <a href={void(0)}>Next</a>
        </div>
    </section>
  )
}

export default Pagination