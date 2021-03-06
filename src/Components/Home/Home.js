import React from 'react'
import ProfileImg from '../../images/mari_colors.png'
import { Transition } from 'react-transition-group'


const Home = () => {
    return (
        <Transition timeout={1000} in={true} appear>
            {(status) => (
                <div className={`home home-${status} text-center`}>
                    <div className="home-image-wrapper">
                        <img className="profilePic" src={ProfileImg} alt="Mari Taslagyan holding an umbrella." />
                    </div>
                    <div className="home-intro-wrapper">
                        <h1 className="hello">Welcome!</h1>
                        <p className="about">My name is Mari Taslagyan and I am a Front-End Web Developer and UX Designer. With extensive knowledge in art and development, I strive to create work that is both efficient and innovative.</p>
                    </div>
                    </div>
            )}
        </Transition>

    )
}

export default Home
