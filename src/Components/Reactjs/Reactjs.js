import React from 'react'
import Profits from '../../images/profits.png'
import Itrainuwin from '../../images/itrainuwin2.png'
import { Transition } from 'react-transition-group'


const Reactjs = () => {
    return (
        <Transition timeout={2000} in={true} appear>
            {(status) => (
                <div className={`react react-${status} text-center`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="react-title">React.js & Redux</h1>
                                <hr className="title-divider" />
                                <p className="react-explanation">Fast and effective single paged applications created using React.js. Enhanced with Redux to improve user experience and interaction.</p>
                            </div>
                        </div>
                        <div className="row react-content">
                            <div className="col-12 col-md-6">
                                <a href="https://profits.netlify.com/" target="_blank"><img className="profits-pic" src={Profits} alt="Profits logo." /></a>
                                <div className="profits-link mt-3"><a target="_blank" href="https://profits.netlify.com/">Profits</a></div>
                            </div>
                            <div className="col-12 col-md-6 mt-md-0 my-5">
                                <a href="https://www.itrainuwin.com" target="_blank"><img className="itrainuwin-pic" src={Itrainuwin} alt="I Train U Win logo." /></a>
                                <div className="itrainuwin-link mt-3"><a target="_blank" href="https://www.itrainuwin.com">iTrainUwin</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    )
}

export default Reactjs
