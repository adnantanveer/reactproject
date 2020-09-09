import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import closeicon from '../../images/dialogclose.svg';
import succcesicon from '../../images/success.svg';


import ModalPopup from './modalpopup'
import useStyle from './style.js';

const defaultState = {
    isSignup: false,
    isLogin: false,
    isSuccess: false,

}

const Headerapp = () => {
    const classes = useStyle();
    const [state, setState] = React.useState(defaultState);

    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <img src={logo} alt="Logo" />;
              </div>
                        <div>
                            <ul type="none" className="d-flex navelemnets justify-content-end">
                                <li>
                                    Home
                  </li>
                                <li>
                                    About
                  </li>
                                <li>
                                    Packages
                  </li>
                                <li>
                                    Contact
                  </li>
                                <li onClick={() => {
                                    setState(prevState => {
                                        return {
                                            ...prevState,
                                            isSignup: true
                                        }
                                    })
                                }} >
                                    Sign Up
                  </li>
                                <li onClick={() => {
                                    setState(prevState => {
                                        return {
                                            ...prevState,
                                            isLogin: true
                                        }
                                    })
                                }} >
                                    Login Up
                  </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <ModalPopup
                isOpen={state.isSignup}
                onClose={() => {
                    setState(prevState => {
                        return {
                            ...prevState,
                            isSignup: false
                        }
                    })
                }}
                title={(
                    <div className="modalsign">
                        <div class="closeicon" onClick={() => {
                            setState(prevState => {
                                return {
                                    ...prevState,
                                    isSignup: false
                                }
                            })
                        }}>
                            <img src={closeicon} alt="s" />
                        </div>
                        <div className="modal-head-sign">
                            <div className="py-4">
                                <h2 className="text-center">Signup</h2>

                            </div>
                            <hr className="mx-3 mb-0 mt-0" />
                            <div class="py-3">
                                <div class="d-flex justify-content-center">
                                    <button class="btn signpbus mr-3" >Sign up as a Business</button>
                                    <button class="btn signpclie mr-3" >Sign up as a Business</button>

                                </div>
                            </div>
                        </div>
                    </div>

                )}
                content={
                    (
                        <div className="signup-cont px-4">
                            <div className="py-3 text-center">
                                <h3>Please Enter your below detail to continue</h3>
                            </div>
                            <div class="py-2">
                                <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                            <div class="py-2">
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                            <div class="py-2">
                                <input type="text" className="form-control" placeholder="Caompany Name" />
                            </div>
                            <div class="py-2">
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div class="py-2">
                                <input type="text" className="form-control" placeholder="Mobile NUmber" />
                            </div>
                            <div class="py-2">
                                <input type="text" className="form-control" placeholder="Address" />
                            </div>
                            <div class="py-2">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div class="py-2">
                                <input type="password" className="form-control" placeholder="Conform Password" />
                            </div>

                            <div class="pt-2 pb-4 d-flex justify-content-center">
                                <button class="btn btn signup" onClick={() => {
                                    setState(prevState => {
                                        return {
                                            ...prevState,
                                            isSuccess: true
                                        }
                                    })
                                }} >Sign Up</button>
                            </div>
                        </div>
                    )
                }
            />
            <ModalPopup
                isOpen={state.isLogin}
                onClose={() => {
                    setState(prevState => {
                        return {
                            ...prevState,
                            isLogin: false
                        }
                    })
                }}
                title={(
                    <div className="modallogin">
                        <div class="closeicon" onClick={() => {
                            setState(prevState => {
                                return {
                                    ...prevState,
                                    isLogin: false
                                }
                            })
                        }}>
                            <img src={closeicon} alt="s" />
                        </div>
                        <div className="modal-head-login">
                            <div className="py-4">
                                <h2 className="text-center">Login</h2>

                            </div>

                        </div>
                    </div>
                )}
                content={
                    (
                        <div className="loginpop-cont px-5 py-3">
                            <div className="py-3 text-center">
                                <h3>Please Enter your below detail to continue</h3>
                            </div>
                            <div class="py-2">
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            
                          
                            <div class="py-2">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div class="py-3 text-center">
                            <button class="succsesokay btn" >Ok</button>

                             </div>   

                        </div>
                    )
                }
            />
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
                            <h2 className="succeshead">Successful!</h2>
                            <div className="suc-ccont">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                            </div>
                            <button class="succsesokay btn" >Ok</button>
                        </div>
                    )
                }
            />
        </div>
    );
}



export default Headerapp;
