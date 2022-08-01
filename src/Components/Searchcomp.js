import React from 'react'

function Searchcomp({data}) {
  return (
    <div className="search-result-cover">
        {
            data.map((item,index)=> {
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
            <a href="#">Show more...</a>
        </div>) : null  }
    </div>
  )
}

export default Searchcomp