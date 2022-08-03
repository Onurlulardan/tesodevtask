import React, { useEffect, useState } from 'react'
import Logo from "../Assets/img/logo.jpg";
import {Link} from "react-router-dom";
import SearchResult from "./SearchResult";

function Record() {
    const initialValues = {NameSurname : "",Country: "", City: "", Email: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [errorShow, setErrorShow] = useState(false);
    const [isClassActive, setIsClassActive] = useState(false);

    function handleFormChange(e){
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors(validateForm(formValues));
        setIsSubmit(true);
    }
   
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmit) {
        }
    },[formErrors]);


    function validateForm(values){
        const errors = {};
        const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.NameSurname){
            errors.NameSurname = "Name and Surname is required!";
        } else if (values.NameSurname.length < 4){
            errors.NameSurname = "Name and Surname must be more than 4 characters";
        } else if (values.NameSurname.length > 40){
            errors.NameSurname = "Name and Surname cannot exceed more than 40 characters";
        }
        if(!values.Country){
            errors.Country = "Country is required!";
        } else if (values.Country.length < 2){
            errors.Country = "Country name must be more than 2 characters";
        } else if (values.Country.length > 40){
            errors.Country = "Country name cannot exceed more than 40 characters";
        }
        if(!values.City){
            errors.City = "City is required!";
        } else if (values.City.length < 2){
            errors.City = "City name must be more than 2 characters";
        } else if (values.City.length > 40){
            errors.City = "City name cannot exceed more than 40 characters";
        }
        if(!values.Email){
            errors.Email = "Email is required!";
        } else if (!regex.test(values.Email)){
            errors.Email = "This is not a valid E-mail format!";
        }
        return errors
    }

    let errorDiv;
    if(formErrors.NameSurname){
        errorDiv = <div className='error-cover'>
            <div className='error-box'>
                <div className='error-text'>
                    <h1>Error while adding link element</h1>
                    <p>{formErrors.NameSurname}</p>
                </div>
                <div className='error-btn'>
                    <i className="ri-close-circle-line"></i>
                    <div className='error-btn-text'>Error</div>
                </div>
            </div>
        </div>
    }
    if(formErrors.Country) {
        errorDiv = <div className='error-cover'>
            <div className='error-box'>
                <div className='error-text'>
                    <h1>Error while adding link element</h1>
                    <p>{formErrors.Country}</p>
                </div>
                <div className='error-btn'>
                    <i className="ri-close-circle-line"></i>
                    <div className='error-btn-text'>Error</div>
                </div>
            </div>
        </div>
    }
    if(formErrors.City) {
        errorDiv = <div className='error-cover'>
            <div className='error-box'>
                <div className='error-text'>
                    <h1>Error while adding link element</h1>
                    <p>{formErrors.City}</p>
                </div>
                <div className='error-btn'>
                    <i className="ri-close-circle-line"></i>
                    <div className='error-btn-text'>Error</div>
                </div>
            </div>
        </div>
    }
    if(formErrors.Email) {
        errorDiv = <div className='error-cover'>
            <div className='error-box'>
                <div className='error-text'>
                    <h1>Error while adding link element</h1>
                    <p>{formErrors.Email}</p>
                </div>
                <div className='error-btn'>
                    <i className="ri-close-circle-line"></i>
                    <div className='error-btn-text'>Error</div>
                </div>
            </div>
        </div>
    }
    function btnValidate(e){
        e.preventDefault();
        setErrorShow(true);
    }

  return (
    <>
         <section className="link-header">
            <div className="add-link-cover-wrapper">
                <div className="add-link-cover">
                    <Link to={'/'}>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <Link to={'/SearchResult'} className="return-list"><i className="ri-arrow-left-line"></i> Return to List Page</Link>
                </div>
            </div>
        </section>
        <section className="link-form">
            <div className="form-wrapper">
                <form>
                    <div className="form-cover">
                        <div className="form-item">
                            <p className={formErrors.NameSurname == null ? '' : 'error-p' }>Name Surname</p>
                            <input id="name" name='NameSurname' onChange={handleFormChange} className={formErrors.NameSurname == null ? 'search-inp' : 'error-inp' } type="text" placeholder="Enter name and surname" value={formValues.NameSurname} />
                            <p className='error-p'> {formErrors.NameSurname} </p>
                        </div>
                        <div className="form-item">
                            <p className={formErrors.NameSurname == null ? '' : 'error-p' }>Country</p>
                            <input id="country" name='Country' onChange={handleFormChange} className={formErrors.Country == null ? 'search-inp' : 'error-inp' } type="text" placeholder="Enter a country" value={formValues.Country} />
                            <p className='error-p'> {formErrors.Country} </p>
                        </div>
                        <div className="form-item">
                            <p className={formErrors.NameSurname == null ? '' : 'error-p' }>City</p>
                            <input id="city" name='City' onChange={handleFormChange} className={formErrors.City == null ? 'search-inp' : 'error-inp' } type="text" placeholder="Enter a city" value={formValues.City} />
                            <p className='error-p'> {formErrors.City} </p>
                        </div>
                        <div className="form-item">
                            <p className={formErrors.NameSurname == null ? '' : 'error-p' }>Email</p>
                            <input id="mail" name='Email' onChange={handleFormChange} className={formErrors.Email == null ? 'search-inp' : 'error-inp' } type="text" placeholder="Enter a e-mail (abc@xyz.com)" value={formValues.Email} />
                            <p className='error-p'> {formErrors.Email} </p>
                        </div>
                        <div className="form-item">
                            <div className="form-btn">
                                {formValues.NameSurname == "" || formValues.Country == "" || formValues.City == "" || formValues.Email == "" ? "" : 
                                (<button onClick={btnValidate}>Add</button>)}
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
        </section>
        <section className='error'>
            {errorShow == true ? errorDiv : ""}
        </section>
    </>
  )
}

export default Record