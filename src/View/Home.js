import React, {useState,useEffect} from 'react';
import Logo from "../Assets/img/logo.jpg";
import SliderImg from "../Assets/img/slider.png";
import FooterImg from "../Assets/img/footer.png";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import mockData from "../Data/mockData.json";
import Searchcomp from '../Components/Searchcomp';

function Home() {
    const prevRef = React.useRef(null);
    const nextRef = React.useRef(null);
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
    const Search = (data) => {
        console.log("asdasdada",data);
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
                <a href="#" className="header-btn">Add new record</a>
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
                    <a href="#">Search</a>
                </div>
            </div>
        </section>
        <section className="search-result-section">
            <div className="container">
                <div className="search-result-wrapper">
                        {searchQuery == "" ? null : (<div className="search-result-cover">
                        <Searchcomp data={Search(JsonData)} />
                        <div className="search-result-more">
                            <a href="#">Show more...</a>
                        </div>
                    </div>) }
                </div>
            </div>
        </section>
        <section className="slider-section">
            <div className="container">
                <div className="slider-header-cover">
                    <h1 className="slider-header">Top News</h1>
                </div>
                <div className="swiper-cover">
                    <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={2.9}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                      }}
                    >
                    <SwiperSlide>
                        <div className="slide-cover">
                            <div className="slide-content">
                                <img src={SliderImg} alt="slider image"/>
                                <h1>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h1>
                                <p>1h ago · by Troy Corlson</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-cover">
                            <div className="slide-content">
                                <img src={SliderImg} alt="slider image"/>
                                <h1>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h1>
                                <p>1h ago · by Troy Corlson</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-cover">
                            <div className="slide-content">
                                <img src={SliderImg} alt="slider image"/>
                                <h1>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h1>
                                <p>1h ago · by Troy Corlson</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-cover">
                            <div className="slide-content">
                                <img src={SliderImg} alt="slider image"/>
                                <h1>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h1>
                                <p>1h ago · by Troy Corlson</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-cover">
                            <div className="slide-content">
                                <img src={SliderImg} alt="slider image"/>
                                <h1>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h1>
                                <p>1h ago · by Troy Corlson</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-cover">
                            <div className="slide-content">
                                <img src={SliderImg} alt="slider image"/>
                                <h1>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h1>
                                <p>1h ago · by Troy Corlson</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                     <div className="swiper-button-cover">
                        <div ref={prevRef}  className="swiper-button-prev"></div>
                        <div ref={nextRef} className="swiper-button-next"></div>
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
                            <h1>İletişim</h1>
                            <p>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul</p>
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

export default Home