import React from 'react';
import './Footer.scss';

const Footer = ({label, styles}) => {
  return (
    <>
        <footer class="footer">
            <div class="footer__container">
                <div class="footer__container-top">
                    <div class="footer__container-top-left">
                        <label class="footer__container-top-left-label">BE INSPIRED AND TRAVEL</label>
                        <div class="footer__container-top-left-field">
                            <label  className='label' >Add e-mail id to get inspired</label>
                            <img className='img' src='/Assets/icons/arrowf.png'/>
                        </div>
                    </div>
                    <div class="footer__container-top-right">
                        <label>
                            Send feedback
                        </label>
                    </div>
                </div>
                <div class="footer__container-mid">
                    <div class="footer__container-mid-sub" >
                        <label class="footer__container-mid-sub-label">
                            COMPANY
                        </label>
                    </div>
                    <div class="footer__container-mid-sub" >
                        <label class="footer__container-mid-sub-label">
                            COMPANY
                        </label>
                    </div>
                    <div class="footer__container-mid-sub" >
                        <label class="footer__container-mid-sub-label">
                            COMPANY
                        </label>
                    </div>
                    <div class="footer__container-mid-sub" >
                        <label class="footer__container-mid-sub-label">
                            COMPANY
                        </label>
                    </div>
                    <div class="footer__container-mid-sub" >
                        <label class="footer__container-mid-sub-label">
                            COMPANY
                        </label>
                    </div>
                </div>
                <div>
                    <img style={{'height': '32px','width':'32px', 'position': 'relative', 'bottom': '17px'}} src="/Assets/icons/down.png" alt="hi" />
                </div>
                <div class="footer__container-bottom">
                    <div className="footer__container-bottom-left">
                        <div className='footer__container-bottom-left-top'>
                            <label>
                                Site Map
                            </label>
                            <label>
                                Privacy Policy
                            </label>
                            <label>
                                Terms & Conditions
                            </label>
                            <label>
                            Cookie Policy
                            </label>
                            <label>
                            Cyber security 
                            </label>
                            <label>
                               Disclaimer
                            </label>
                        </div>
                        <label className='bottom-label'>
                            © Copyright 2006 IndiGo All rights reserved.
                        </label>
                    </div>
                    <div className="footer__container-bottom-right">
                        <div className='footer__container-bottom-left-bottom'>
                            <label>
                            1800-9263-7733/1800-6358-7669
                            </label>
                        </div>
                        <label className='bottom-label'>
                            Call us on our toll free number for any queries
                        </label>
                    </div>
                </div>
            </div>
        </footer>

    </>
  );
};

export default Footer;
  