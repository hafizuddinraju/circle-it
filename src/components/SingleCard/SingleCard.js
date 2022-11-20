import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthDataContext } from '../../useContext/AuthContext';
import Pdf from "react-to-pdf";
import { FaStar } from 'react-icons/fa';
import {FiEye } from 'react-icons/fi';


const ref = React.createRef();
const SingleCard = () => {
    const {handleAddToCart, user} = useContext(AuthDataContext);
    const card = useLoaderData();
    const navigate = useNavigate()
    
    const {_id, name, instructor, about, picture, rating, view, price} = card
    return (
        <div>
            <section className="bg-gray-100 text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<div ref={ref} rel="noopener noreferrer"  className="block max-w-sm gap-3 rounded-md mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
			<img src={picture} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold text-sky-600 sm:text-4xl group-hover:underline group-focus:underline">{name}</h3>
                <div className='flex justify-between'>
                <span className="text-base text-justify text-gray-400">{instructor}</span>
                <span className="text-base flex items-center text-orange-400">
                <div className='flex text-orange-400'>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>

                  </div>
                    {rating}</span>
                </div>
            				
				<p>{about}</p>
                <div className='flex justify-between items-center'>
                <span className="text-2xl font-semibold text-justify text-green-600"> Price: ${price}</span>
                <span className="text-base flex items-center text-orange-400">
                    <div className='text-sky-200 pr-1'>
                    <FiEye></FiEye>
                    </div>
                
                    {view}</span>
                </div>
                <div className='flex flex-col  md:flex-row md:justify-between md:items-center py-4'>
                       <Link to='/checkout'>
                       
                        <button onClick={()=>handleAddToCart(card)} className='btn w-full btn-sm text-black font-semibold bg-orange-400 hover:bg-orange-700'>Get Premium Access</button>
                        </Link>
                        
                        <Pdf targetRef={ref} filename="your-info.pdf">
                        {({ toPdf })=>
                        <button onClick={toPdf} className='btn btn-sm md:py-0 my-3 text-black font-semibold bg-sky-400 hover:bg-sky-700'>Download PDF</button>}

                        </Pdf>
                        
                        

                    
                </div>
			</div>
		</div>
		
		
	</div>
</section>
            
        </div>
    );
};

export default SingleCard;