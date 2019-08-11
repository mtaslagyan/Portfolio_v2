import React from 'react'
import { Transition } from 'react-transition-group'
import ResumePDF from '../../Documents/Taslagyan_Mari_Resume.pdf'


const Resume = () => {
    return (
        <Transition timeout={2000} in={true} appear>
            {(status) => (
                <div className={`resume resume-${status} text-center`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="react-title">Download my resum&eacute;.</h1>
                                <hr className="title-divider" />
                                <div className="resume-content">
                                    <a target="_blank" href={ResumePDF} download="Mari Taslagyan's Resume"><i class="fas fa-download"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    )
}

export default Resume
