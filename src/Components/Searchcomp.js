import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { MainContext, useContext } from "../Context.js";

function Searchcomp({data,searchQuery}) {
    const { filteredData, setFilteredData} = useContext(MainContext);
    useEffect(()=>{
        setFilteredData(data);
    },[data]);


  return (
    <div className="search-result-cover">
        {
            data.slice(0, 3).map((item,index)=> {
                return (
                    <div key={index} className="search-result">
                    <i className="ri-map-pin-line"></i>
                    <div>
                        <h6> {item.Name} </h6>
                        <p> {item.Company} </p>
                        <hr/>
                    </div>
                </div>
                )
            })
        }
        { data.length > 3 ? (<div className="search-result-more">
            <Link to={`/SearchResult/${searchQuery}`}>Show more...</Link>
        </div>) : null  }
    </div>
  )
}

export default Searchcomp