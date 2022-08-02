import React,{ useEffect, useState } from "react";

function Pagination({itemPerPage, totalItem, paginate}) {
    const [currentPage, setCurrentPage] = useState(0);
    const [updateState, setUpdateState] = useState(false);
    const [sayı1, setSayı1] = useState(0);
    const [sayı2, setSayı2] = useState(3);
    const [sayı3, setSayı3] = useState(3);
    const [sayı4, setSayı4] = useState(6);
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalItem, itemPerPage); i++) {
        pageNumber.push(i);
    }
    
    useEffect(()=>{
        setCurrentPage(pageNumber.length);
    },[]);

    let comp;

    if(pageNumber.length > 6){
        comp = <div className="pegination-cover">
            {pageNumber.includes(currentPage - 1) && <a href={void(0)} onClick={(e) => {
                    setCurrentPage(currentPage - 1);
                    paginate(currentPage - 1);
                    setSayı1(sayı1 - 1);
                    setSayı2(sayı2 - 1);
                    setSayı3(sayı3 - 1);
                    setSayı4(sayı4 - 1);
                }}>
                    Prev
                </a>}
            {pageNumber.slice(sayı1, sayı2).map((number) => {
                    return (
                        <a key={number} href={void(0)} onClick={(e) => {
                            setCurrentPage(number);                        
                            paginate(number);
                        }} > {number} </a>
                    )
                
            })} 
            { pageNumber.length > 6 ? (<p>...</p>): ""}
            {pageNumber.slice(sayı3, sayı4).map((number) => {
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
                    setSayı1(sayı1 + 1);
                    setSayı2(sayı2 + 1);
                    setSayı3(sayı3 + 1);
                    setSayı4(sayı4 + 1);
                }}>
                    Next
                </a>}
        </div>
    }
    else {
        comp = <div className="pegination-cover">
            {pageNumber.includes(currentPage - 1) && <a href={void(0)} onClick={(e) => {
                    setCurrentPage(currentPage - 1);
                    paginate(currentPage - 1);
                }}>
                    Prev
                </a>}
            {pageNumber.slice(sayı1, sayı2).map((number) => {
                    return (
                        <a key={number} href={void(0)} onClick={(e) => {
                            setCurrentPage(number);                        
                            paginate(number);
                        }} > {number} </a>
                    )
                
            })} 
            {pageNumber.slice(sayı3, sayı4).map((number) => {
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
    }

  return (
        <section>
            {comp}
        </section>
  )
}

export default Pagination