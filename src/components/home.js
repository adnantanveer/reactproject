import React from 'react';
import bgimg from '../images/popup.png'
import closeicon from '../images/dialogclose.svg';
import locationong from '../images/location.png';
import searchicon from '../images/search.svg';


import ModalPopup from './header-app/modalpopup'
import useStyle from './header-app/style.js';

const defaultState = {
    isSearch: false,


}

function Home() {
    const classes = useStyle();
    const [state, setState] = React.useState(defaultState);
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card p-4 mt-4">
                            <div className="cardhead">
                                <h4>Send packages in all over the Kingdom</h4>
                                <p>Your on demand local courier</p>
                            </div>
                            <div className="px-4 py-3">
                                <div>
                                    <label className="pckgename">Please Enter your Package Name</label>
                                </div>
                                <div>
                                    <input type="text" className="homeinpt form-control" />
                                </div>
                                <div className="pt-3">
                                    <label className="picklocation">Pickup Location*</label>
                                </div>
                                <div onClick={() => {
                                    setState(prevState => {
                                        return {
                                            ...prevState,
                                            isSearch: true
                                        }
                                    })
                                }}>
                                    Search Location jhkjkhk
                                </div>
                                <div>
                                    <input type="text" className="homeinpt form-control" />
                                </div>
                                <div className="pt-3">
                                    <label className="picklocation">Drop Point*</label>
                                </div>
                                <div>
                                    <input type="text" className="homeinptdis form-control" placeholder="Search Drop location" />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="pt-3">
                                            <label className="packwght">Package Weight</label>
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Package Weight" className="homeinptdis form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="pt-3">
                                            <label className="packwght">Package Size</label>
                                        </div>
                                        <div className="d-flex">
                                            <input type="text" className="homeinptdis form-control" placeholder="Length" />
                                            <input type="text" className="form-control homeinptdis ml-2" placeholder="Height" />
                                            <input type="text" className="form-control ml-2 homeinptdis" placeholder="Width" />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 pt-4">
                                    <div>
                                        <label className="chsedel">Choose Delivery service type</label>
                                    </div>
                                    <div className="d-flex justify-content-between pr-5 mr-5 pt-2">
                                        <div className="custom-control custom-checkbox" >
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Express</label>
                                        </div>
                                        <div className="custom-control custom-checkbox" >
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label" htmlFor="customCheck2">Urgent</label>
                                        </div>
                                        <div className="custom-control custom-checkbox" >
                                            <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                            <label className="custom-control-label" htmlFor="customCheck3">Next Day</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 pt-4">
                                    <div>
                                        <label className="chsedel">Package Type</label>
                                    </div>
                                    <div className="d-flex pt-2">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="customRadio1">Prepaid</label>
                                        </div>
                                        <div className="custom-control custom-radio ml-4">
                                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="customRadio2">Postpaid</label>
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <input type="text" className="entramt form-control" placeholder="Enter Amount Here" />
                                    </div>
                                </div>
                                <div className=" anyins mt-3">
                                    <p>Any Instruction for the delivery partner?</p>
                                </div>
                                <div className="terms pt-4">
                                    <p>By confirming I accept this order doesn’t contain illegal/resticted items, if illegal/restricted items are found by Delivery Partner, they may report it to the law enforcement authorities.Terms and Conditions.</p>
                                </div>
                                <div className="d-flex justify-content-center py-5">
                                    <button className="addpackge btn" >+ Add New Package</button>
                                    <button className="cnforder btn ml-2" >Confirm Order</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card px-3 doescard pt-3">
                            <div>
                                <h4>Some do’s and Dont’s</h4>
                                <hr className="dotted" />
                            </div>
                            <div className="col-md-12">
                                <div className="row" >
                                    <div className="col-md-4 p-0">
                                        <label className="headlabel">No Purchases :</label>
                                    </div>
                                    <div className="col-md-8">
                                        <p >Delivery partner would not be able to make any purchase. </p>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-4 p-0">
                                        <label className="headlabel">Package Weight:</label>
                                    </div>
                                    <div className="col-md-8">
                                        <p >We cannot deliver items that can’t be easily carried on bike </p>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-4 p-0">
                                        <label className="headlabel">Restricted/ Illegal Item:</label>
                                    </div>
                                    <div className="col-md-8">
                                        <p >Please don’t hand over any restricted item </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-5 mt-3">
                                <img className="w-100" src={bgimg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalPopup
                isOpen={state.isSearch}
                onClose={() => {
                    setState(prevState => {
                        return {
                            ...prevState,
                            isSearch: false
                        }
                    })
                }}
                title={(

                    <div class="">
                        <div className="searchmodal-head py-3 text-center px-5">
                            <h3 className="px-3 ">Search Drop Location</h3>
                        </div>



                        <div class="closeicon" onClick={() => {
                            setState(prevState => {
                                return {
                                    ...prevState,
                                    isSearch: false
                                }
                            })
                        }}>
                            <img src={closeicon} alt="s" />
                        </div>
                    </div>

                )}
                content={
                    (

                        <div className="text-center searchmodal-cont  ">
                           <div className="search mt-3">
                               <input className="form-control" placeholder="Enter area, building name" />
                               <div class="icon-search">
                                    <img src={searchicon} alt="jk" />
                               </div>
                           </div> 
                           <div className="d-flex py-3">
                           <img src={locationong} alt="" />
                                  <label className="ml-2 serchbymap">Select location via map</label>                  
                            </div>  
                            <div className="py-5">
                                
                            </div>        
                        </div>
                    )
                }
            />
        </div >


    );
}

export default Home;
