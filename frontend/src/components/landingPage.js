import React, {useState,useEffect } from 'react';
import {Alert} from "reactstrap";

import {endpoints} from "../constants"
import {getApi}from '../utils/apiHelper';
import {CarDetailTable} from './carDetailTable';
import {ModalComponent} from './modalComponent'
import styles from '../App.css';

export const LandingPage = () => {


const [carDetails, setcarDetails] = useState([]);
const [showSpinner, setShowSpinner] = useState(false);
const [carModel, setCarModel] = useState(null);
const [modal, setModal] = useState(false);
  const toggle = (rowdata) => {
    setModal(!modal);
    setCarModel(rowdata);
  }
const [error, setError] = useState('');


const getCarDetails = async() => {
try {
  setShowSpinner(true);
    const rawResponse = await getApi(
      `${endpoints.GET_CAR_DETAILS}`,
      'GET')
    const content = await rawResponse.json();
    if(content && content.error){
      const errorMessage = `${content.error}. Please try after sometime`
       setError(errorMessage);
       setcarDetails([]);
    } else {
    setcarDetails(content.data);
    setError('');
  }
    setShowSpinner(false);
  } catch(err){
      console.log(err);
  }
}

  useEffect(() => {
    getCarDetails();
  }, []);

return (
<div style={{ margin: "25px 25px 25px 25px"}} data-testid='test'>
    <center>
      <img src="https://cdn.wallpapersafari.com/48/7/y2HK3i.jpg" alt="Avatar" height="150" width="300"/>
    </center>
      {showSpinner &&    
        <div class="loader">
            <div class="loader-inner">
              <div class="loader-line-wrap">
                <div class="loader-line"></div>
              </div>
              <div class="loader-line-wrap">
                <div class="loader-line"></div>
              </div>
              <div class="loader-line-wrap">
                <div class="loader-line"></div>
              </div>
              <div class="loader-line-wrap">
                <div class="loader-line"></div>
              </div>
              <div class="loader-line-wrap">
                <div class="loader-line"></div>
              </div>
            </div>
      </div>
      } 

      <Alert color="danger" isOpen={error? true: false} toggle={()=>{setError("")}}>
       {error}
      </Alert> 
      {modal && carModel ?
          (<ModalComponent 
                carDetails={carDetails} 
                modal={modal} 
                toggle={toggle}
                carModel={carModel}
              />
            ) : null
      }
      { carDetails && carDetails.length > 0 ?
        <CarDetailTable 
            carDetails={carDetails} 
            handlePagination={getCarDetails} 
            toggle={toggle}
        />
        : null
      } 
</div>
  )
}

