import React, {useEffect, useState} from 'react'
import Logo from '../Assets/img/logo.jpg';
import {Link, useParams } from "react-router-dom";
import Home from './Home';
import {MainContext,useContext} from "../Context.js";
import Pagination from '../Components/Pagination.js';
import Record from './Record';


function SearchResult({location}) {
    const { filteredData} = useContext(MainContext);
    const [newData, setNewData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [updateState, setUpdateState] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(6);
    const params = useParams();


    useEffect(()=>{
        setNewData(filteredData);
        setSearchQuery(params.searchkey);
    },[filteredData]);

    const paginationNumber = newData.length / 6;
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFırstItem = indexOfLastItem - itemPerPage;
    const currentItem = newData.slice(indexOfFırstItem, indexOfLastItem);


    function paginate(pageNumber){
        setCurrentPage(pageNumber);
    }

    function Search() {
        if(searchQuery == "") {
            console.log("boş", newData)
            return newData
        }
        else {
            console.log("dolu", newData)
            return newData.filter(
                (item) => 
                item.Name.toLowerCase().includes(searchQuery) ||
                item.Company.toLowerCase().includes(searchQuery) ||
                item.Email.toLowerCase().includes(searchQuery) 
                )
            }
    }

    function ascName() {
        setNewData(newData.sort((a, b) => a.Name > b.Name ? 1 : -1));
    }

    function dscName() {
        setNewData(newData.sort((a, b) => a.Name > b.Name ? -1 : 1));
    }

    function ascYear() {
        setNewData(newData.sort((a, b) => a.Date.split('/').reverse().join('') > b.Date.split('/').reverse().join('') ? 1 : -1));
    }

    function dscYear() {
        setNewData(newData.sort((a, b) => a.Date.split('/').reverse().join('') > b.Date.split('/').reverse().join('') ? -1 : 1));
    }


  return (
    <div>
    <section className="show-more-header">
    <div className="show-more-header-wrapper">
        <div className="show-more-header-cover">
            <div>
                <Link to={'/'}>
                    <img src={Logo} alt="logo" />
                </Link>
                <input className="search-inp" type="text" value={searchQuery}  onChange={(e) => {setSearchQuery(e.target.value)}} />
                <a onClick={(e) => {Search()}} href={void(0)} className="search-btn">Search</a>
            </div>
            <Link to={'/Record'} className="add-btn">Add new record</Link>
        </div>
    </div>
    </section>
    <section className="show-more-content">
        <div className="show-more-content-wrapper">
            <div className="item-wrapper">
                <div className="item-list-cover">
                    {currentItem.filter((item) => {
                        if(searchQuery == "") {
                            return item
                        }
                        else {
                            return item.Name.toLowerCase().includes(searchQuery) ||
                            item.Company.toLowerCase().includes(searchQuery) ||
                            item.Email.toLowerCase().includes(searchQuery)
                        }
                    }).map((item, index)=> {
                        return (
                        <div key={index} className="item-content">
                            <div className="item-content-left">
                                <i className="ri-map-pin-line"></i>
                                <div>
                                    <h6>{item.Company}</h6>
                                    <p> {item.Email} </p>
                                </div>
                            </div>
                            <div className="item-content-right">
                                <h6> {item.Name} </h6>
                                <p> {item.Date} </p>
                            </div>
                        </div>
                        )
                    })}
                    {/* <hr /> */}
                </div>
            </div>
            <div className="order-btn-cover">
                <div>
                    <a href="#" className="order-btn"> <i className="ri-arrow-up-down-line"></i> Order By</a>
                    <div className="order-btn-focus">
                        <a href={void(0)} onClick={(e) => {ascName(); setUpdateState(!updateState)}} >Name ascending</a>
                        <a href={void(0)} onClick={(e) => {dscName(); setUpdateState(!updateState)}}>Name descending</a>
                        <a href={void(0)} onClick={(e) => {ascYear(); setUpdateState(!updateState)}}>Year ascending </a>
                        <a href={void(0)} onClick={(e) => {dscYear(); setUpdateState(!updateState)}}>Year descending </a>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    <Pagination itemPerPage={itemPerPage} totalItem={paginationNumber} paginate={paginate}></Pagination>
    </div>
  )
}

export default SearchResult