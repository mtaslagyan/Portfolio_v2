import React from 'react'
import BuddyJane from '../../images/buddyjane.png'
import DevelopMT from '../../images/developmt.png'
import CSUNFac from '../../images/csunfac.png'
import { Transition } from 'react-transition-group'


const HtmlAndCss = () => {
    return (
        <Transition timeout={2000} in={true} appear>
            {(status) => (
                <div className={`htmlandcss htmlandcss-${status} text-center`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="htmlandcss-title">Html & CSS</h1>
                                <hr className="title-divider" />
                                <p className="htmlandcss-explanation">Using custom Html and CSS to create work.</p>
                            </div>
                        </div>
                        <div className="row htmlandcss-content">
                            <div className="col-4">
                                <a href="#" target="_blank"><img className="buddyjane-pic" src={BuddyJane} alt="Buddy Jane logo." /></a>
                                <div className="buddyjane-link mt-3"><a href="#" target="_blank">buddyjane.com</a></div>
                            </div>
                            <div className="col-4">
                                <a href="#" target="_blank"><img className="developmt-pic" src={DevelopMT} alt="Develop MT logo." /></a>
                                <div className="developmt-link mt-3"><a href="#" target="_blank">developmt.com</a></div>
                            </div>
                            <div className="col-4">
                                <a href="#" target="_blank"><img className="csunfac-pic" src={CSUNFac} alt="Csun faculty logo." /></a>
                                <div className="csunfac-link mt-3"><a href="#" target="_blank">CSUN Faculty | Beta</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>

    )
}

export default HtmlAndCss
