import React,{ useEffect, useState } from "react";

function Pagination({itemPerPage, totalItem, paginate}) {
    const [currentPage, setCurrentPage] = useState(0);
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalItem, itemPerPage); i++) {
        pageNumber.push(i);
    }
    
    useEffect(()=>{
        setCurrentPage(pageNumber.length);
    },[]);

  return (
        <div className="pegination-cover">
            {pageNumber.includes(currentPage - 1) && <a href={void(0)} onClick={(e) => {
                    setCurrentPage(currentPage - 1);
                    paginate(currentPage - 1);
                }}>
                    Prev
                </a>}
            {pageNumber.slice(0, 3).map((number) => {
                    return (
                        <a key={number} href={void(0)} onClick={(e) => {
                            setCurrentPage(number);                        
                            paginate(number);
                        }} > {number} </a>
                    )
                
            })} 
            { pageNumber.length > 6 ? (<p>...</p>): ""}
            {pageNumber.slice(3).map((number) => {
                    return (
                        <a key={number} href={void(0)} onClick={(e) => {
                            setCurrentPage(number);                        
                            paginate(number);
                        }} > {number} </a>
                    )
                
            })} 
            {pageNumber.includes(currentPage + 1) && <a href={void(0)} onClick={(e) => {
                    setCurrentPage(currentPage + 1);
                    paginate(currentPage + 1);
                }}>
                    Next
                </a>}
        </div>
  )
}

export default Pagination