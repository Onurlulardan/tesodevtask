import React from 'react'

function Searchcomp({data}) {
  return (
    <div>
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
    </div>
  )
}

export default Searchcomp