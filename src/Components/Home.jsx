import React, { useEffect } from 'react'
import { BiUserCircle } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth/AuthContext'
import { TypeAnimation } from 'react-type-animation';
import lottie from 'lottie-web';
import animationData from "./ff.json"
const Home = () => {

    const { theme, auth } = useAuth()
    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData, // Your animation data
        });
        return () => anim.destroy();
    })
    const navigate = useNavigate()
    return (
        <div>
            <section className={`${theme == "light" ? "bg-[#f1f5f9]" : "bg-[#1d232a]"} hidden sm:block p-6 font-bold  w-full justify-center items-center `}>

            </section>
            <div className={`${theme == "light" ? "bg-[#f1f5f9]" : "bg-[#1d232a]"} flex flex-col sm:flex-row h-screen `}>
                <div className='h-[50vh] w-full sm:h-[81vh] sm:w-[43%] flex flex-col  justify-center  items-start p-5 '>




                    <p className={`${theme == "light" ? "" : "text-white"}`}>
                        <h1 className={`font-bold text-4xl mt-2 sm:text-5xl px-2`}> Feedbacker   </h1>
                        <h1 className='font-bold w-[100%] sm:w-[100%] mt-4 p-2 sm:text-xl'>Your Voice Matters! This platform bridges the gap between students and departments, allowing seamless feedback submission and in-depth analysis. Join us in shaping a better academic experience!</h1>
                        <TypeAnimation
                            sequence={[

                                ' Better Student Experiences ',
                                2000,
                                '  Improvement',
                                2000,
                                ' Building Trust',
                                2000,
                                ' More Engagement    ',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: ' 2rem', display: 'inline-block', paddingLeft: "5px" }}
                            repeat={Infinity}
                        />
                    </p>
                    {/* <button className='bg-blue-700 rounded-md text-white  px-4 py-1 mt-5 '>Get Started </button> */}

                </div>
                <div className='w-full sm:w-[60%] sm:h-[81vh] h-[40vh] flex justify-center  items-center  '>
                    <div id="lottie-container" style={{ width: '800px', height: '600px' }} />
                </div>

            </div>
        </div>

    )
}

export default Home
