import React from 'react';
import paymentType1 from '../../images/paymentmethod1.png'
import closeicon from '../../images/dialogclose.svg';
import succcesicon from '../../images/success.svg';


import ModalPopup from '../header-app/modalpopup'
import useStyle from '../header-app/style.js';

const defaultState = {
 
    isSuccess: false,

}


function OrderHistory() {
    const classes = useStyle();
    const [state, setState] = React.useState(defaultState);

    return (
        <div>
            <div className="container">
                <div className="row py-4">
                    <div className="col-md-8 pr-sm-0">
                        <div className="card orderSummary p-4 py-5">
                            <div className="d-flex justify-content-between px-2">
                                <h3>Order Summary</h3>
                                <div>
                                    edit
                            </div>
                            </div>
                            <div class="px-2">
                                <p className="headtText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="px-4">
                                <div className="py-3">
                                    <div className="detail-lbel">
                                        <label>Package Detail</label>
                                    </div>
                                    <div className="details">
                                        School Bag | 5kg | 18.5" | Urgently
                            </div>
                                </div>
                                <div className="py-3">
                                    <div className="detail-lbel">
                                        <label>Package Type</label>
                                    </div>
                                    <div className="details">
                                        Postpaid <b>( BHD 47 )</b>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <div className="detail-lbel">
                                        <label>Total Package</label>
                                    </div>
                                    <div className="details">
                                        1
                            </div>
                                </div> <div className="py-3">
                                    <div className="detail-lbel">
                                        <label>Pickup Location</label>
                                    </div>
                                    <div className="details">
                                        Bengaluru, Karnataka, India
                            </div>
                                </div>
                                <div className="py-3">
                                    <div className="detail-lbel">
                                        <label>Drop Location</label>
                                    </div>
                                    <div className="details">
                                        Cubbon Park Rd, Nunegundlapalli, Ambedk
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 pl-1">
                        <div className="card paymentMethodCard p-4">
                            <div classMame="py-3">
                                <h3>Payment Method</h3>
                            </div>
                            <hr />
                            <div className="paymentMethod d-flex ">
                                <div className="w-25 text-center paymentimg">
                                    <img src={paymentType1} alt="" />
                                </div>
                                <div className="w-75 d-flex justify-content-between px-3 paymenttext">
                                    <div>
                                        Credimax
                                </div>

                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                        <label class="custom-control-label" for="customCheck1"></label>
                                    </div>
                                </div>
                            </div>
                            <div className="paymentMethod d-flex mt-4">
                                <div className="w-25 text-center paymentimg">
                                    <img src={paymentType1} alt="" />
                                </div>
                                <div className="w-75 d-flex justify-content-between px-3 paymenttext">
                                    <div>
                                    Benefit
                                </div>

                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                        <label class="custom-control-label" for="customCheck2"></label>
                                    </div>
                                </div>
                            </div>
                            <div className="ins mt-3">
                                Any Instruction for the delivery partner?
                        </div>

                            <div className="invoicedetail">
                                <div>
                                    <h4>Invoice</h4>
                                </div>
                                <div className="d-flex justify-content-between py-2">
                                    <div className="delevryfee">Partner delivery fee (1.40x)</div>
                                    <div className="delvalue">BHD 47</div>
                                </div>
                                <hr />
                            </div>
                            <div className="pt-3">
                                <button class="form-control btn topay" onClick={() => {
                                    setState(prevState => {
                                        return {
                                            ...prevState,
                                            isSuccess: true
                                        }
                                    })
                                }} ><span>To pay :</span><label className="font-weight-bold">BHD 47</label></button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <ModalPopup
                isOpen={state.isSuccess}
                onClose={() => {
                    setState(prevState => {
                        return {
                            ...prevState,
                            isSuccess: false
                        }
                    })
                }}
                title={(
                    <div class="closeicon" onClick={() => {
                        setState(prevState => {
                            return {
                                ...prevState,
                                isSuccess: false
                            }
                        })
                    }}>
                        <img src={closeicon} alt="s" />
                    </div>
                )}
                content={
                    (

                        <div className="text-center succesmodal p-5 py-5">
                            <img src={succcesicon} alt="s" />
                            <h2 className="succeshead mt-2">Congratulation!</h2>
                            <div className="suc-ccont mt-3">
                                <p>Your Payment process is completed.</p>
                            </div>
                            <button class="succsesokay btn" >Ok</button>
                        </div>
                    )
                }
            />
        </div >


    );
}

export default OrderHistory;
