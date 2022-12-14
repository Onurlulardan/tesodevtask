import React, {useState,useEffect,memo, useRef  } from 'react';
import Logo from "../Assets/img/logo.jpg";
import SliderImg from "../Assets/img/slider.png";
import FooterImg from "../Assets/img/footer.png";
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import mockData from "../Data/mockData.json";
import Searchcomp from '../Components/Searchcomp';
import {Link} from "react-router-dom";
import SearchResult from './SearchResult';
import Record from './Record';


function Home() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [JsonData, setJsonData] = useState([]);
    const [updateState, setUpdateState] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    function Jsonformat(){
        mockData.data.map(data => {
            var Name = data[0];
            var Company = data[1];
            var Email = data[2];
            var Date = data[3];
            var Country = data[4];
            var City = data[5];
            var newData = [
                 Name,
                 Company,
                 Email,
                 Date,
                 Country,
                 City,
            ];
             JsonData.push({
                 Name,
                 Company,
                 Email,
                 Date,
                 Country,
                 City,
            });
        });
    }
    function Search(data) {
        if(searchQuery == "") {
            return data
        }
        else {
            return data.filter(
                (item) => 
                item.Name.toLowerCase().includes(searchQuery) ||
                item.Company.toLowerCase().includes(searchQuery) ||
                item.Email.toLowerCase().includes(searchQuery) 
                )
            }
    }

    useEffect(()=> {
        Jsonformat();
        setUpdateState(!updateState);
    },[])

  return (
    <>
        <section className="header-section">
        <div className="container">
            <div className="header-btn-cover">
                <Link to={'/Record'} className="header-btn">Add new record</Link>
            </div>
        </div>
        </section>
        <section className="logo-section">
            <div className="container">
                <div className="logo-cover">
                    <div className="logo">
                        <img src={Logo} alt="logo"/>
                        <p>Search app</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="search-section">
            <div className="container">
                <div className="search-header-cover">
                    <div className="search-header">
                        <h1>Find in records</h1>
                    </div>
                </div>
                <div className="search-input-cover">
                    <div className="search-input">
                        <i className="ri-search-line"></i>
                        <input  type="text"  onChange={(e) => {setSearchQuery(e.target.value)}} />
                    </div>
                    <Link to={`/SearchResult/${searchQuery}`}>Search</Link>
                </div>
            </div>
        </section>
        <section className="search-result-section">
            <div className="container">
                {searchQuery == "" ? null : (<div className="search-result-wrapper">
                        <Searchcomp searchQuery={searchQuery} data={Search(JsonData)} />
                        
                </div>) }
            </div>
        </section>
        <section className="slider-section">
            <div className="container">
                <div className="slider-header-cover">
                    <h1 className="slider-header">Top News</h1>
                </div>
                <div className='swiper-cover'>
                    <Swiper
                    modules={[Navigation,Autoplay]}
                    spaceBetween={0}
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 3,
                        },
                        1440: {
                            slidesPerView: 4,
                          },
                      }}
                    >
                    <SwiperSlide>
                        <div className="slide-cover">
                            <div className="slide-content">
                                <img src={SliderImg} alt="slider image"/>
                                <h1>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h1>
                                <p>1h ago ?? by Troy Corlson</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-cover">
                            <div className="slide-content">
                                <img src={SliderImg} alt="slider image"/>
                                <h1>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h1>
                                <p>1h ago ?? by Troy Corlson</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-cover">
                            <div className="slide-content">
                                <img src={SliderImg} alt="slider image"/>
                                <h1>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h1>
                                <p>1h ago ?? by Troy Corlson</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-cover">
                            <div className="slide-content">
                                <img src={SliderImg} alt="slider image"/>
                                <h1>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h1>
                                <p>1h ago ?? by Troy Corlson</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-cover">
                            <div className="slide-content">
                                <img src={SliderImg} alt="slider image" />
                                <h1>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h1>
                                <p>1h ago ?? by Troy Corlson</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                    <div className="swiper-button-cover">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="footer-section">
            <div className="container-fluid">
                <div className="footer-cover">
                    <div className="footer-left">
                        <img src={FooterImg} alt="footer" />
                        <div className="footer-left-text">
                            <h1>??leti??im</h1>
                            <p>Adres: ??ifte Havuzlar Mah. Eski Londra Asfalt?? Cad. Kulu??ka Merkezi D2 Blok No: 151/1F ???? Kap?? No: 2B03 Esenler/??stanbul</p>
                            <h2>Email: bilgi@tesodev.com</h2>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1659273691612!5m2!1str!2str" width="465" height="220" style= {{border: '0'}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default memo(Home)