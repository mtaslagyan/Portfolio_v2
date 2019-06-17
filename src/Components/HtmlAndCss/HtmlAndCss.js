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
                                <p className="htmlandcss-explanation">Responsive and accessible sites built with custom Html, CSS, and Bootstrap.</p>
                            </div>
                        </div>
                        <div className="row htmlandcss-content">
                            <div className="col-12 col-lg-4">
                                <a href="https://www.buddyjane.com" target="_blank"><img className="buddyjane-pic" src={BuddyJane} alt="Buddy Jane logo." /></a>
                                <div className="buddyjane-link mt-3"><a href="https://www.buddyjane.com.com" target="_blank">BuddyJane</a></div>
                            </div>
                            <div className="col-12 col-lg-4 mt-lg-0 mt-5">
                                <a href="https://www.developmt.com" target="_blank"><img className="developmt-pic" src={DevelopMT} alt="Develop MT logo." /></a>
                                <div className="developmt-link mt-3"><a href="https://www.developmt.com" target="_blank">DevelopMT</a></div>
                            </div>
                            <div className="col-12 col-lg-4 mt-lg-0 my-5">
                                <a href="https://www.sandbox.csun.edu/faculty/steven.fitzgerald#/" target="_blank"><img className="csunfac-pic" src={CSUNFac} alt="Csun faculty logo." /></a>
                                <div className="csunfac-link mt-3"><a href="https://www.sandbox.csun.edu/faculty/steven.fitzgerald#/" target="_blank">CSUN Faculty | Beta</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>

    )
}

export default HtmlAndCss
