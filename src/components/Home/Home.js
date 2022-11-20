import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../costomHooks/hooks';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Home = () => {
    const container = useRef(null);
    useTitle('Home')
    useEffect(()=>{
        Lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData: require('../../animation/animation.json')


        })

    },[])
    return (
        <div>
            
             <section className="bg-gray-600 text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-10 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none text-3xl md:text-6xl">Live as if 
                    <span className="text-violet-400">you were to die tomorrow.</span>Learn as if you were to live forever.
                </h1>
                
                <div className="flex flex-col mt-7 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <Link to='/courses'  rel="noopener noreferrer"  className="px-8 py-3 text-lg font-semibold rounded bg-sky-400 text-gray-900" >Get Started</Link>
                    <Link to = '/courses' rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold border rounded  border-sky-400">Read More</Link>
                </div>
            </div>
            <div className=" p-6 mt-4 mb-20 md:mb-0 lg:mt-0 h-72 sm:h-80 lg:h-96">
                <div className='container' ref={container}></div>
            </div>
        </div>
             </section>
             
             

        </div>
       
    );
};

export default Home;