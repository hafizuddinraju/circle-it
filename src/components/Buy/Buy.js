import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import useTitle from '../../costomHooks/hooks';
import { AuthDataContext } from '../../useContext/AuthContext';
import { removeFromDb } from '../../utils/fakeDB';

import CheckoutItem from '../checkoutItem/CheckoutItem';

const Buy = () => {
    const {cart, setCart, user} = useContext(AuthDataContext);
    useTitle('Checkout')

    const checkout =() =>{
        if(cart.length>0){
            swal("Course Enroll Success!", "success");
        }
        else{
            toast.error('Cart is empty', {autoClose:500})
        }
    }

    const handleRemoveItem = id => {
        const remaining = cart.filter(product => product._id !== id)
        removeFromDb(id)
        setCart(remaining)
        
        toast.warning('Product Removed!', { autoClose: 500 })
      }
    
    let total = 0;
    for(const id of cart){
        total = id.price + total;
        
    }
    
    return (
        <div className="flex flex-col max-w-3xl mx-auto p-6 space-y-4 sm:p-10 bg-gray-300 text-black">
            <div className='flex justify-between items-center'>
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <p className="text-sm text-gray-400">{user?.email}</p>
            </div>
	
	<ul className="flex flex-col divide-y divide-gray-700">
		{
            cart?.map(d => <CheckoutItem key={d._id}
                handleRemoveItem={handleRemoveItem}
                d={d}></CheckoutItem>)
        }
		
	</ul>
	<div className="space-y-1 text-right">
		<p>Total amount:
			<span className="font-semibold">{total} €</span>
		</p>
		<p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
	</div>
	<div className="flex justify-end space-x-4">
        <Link to='/courses'>
        
		<button type="button" className="px-6 py-2 border rounded-md border-violet-400">Back
			<span className="sr-only sm:not-sr-only"> to Enroll</span>
		</button>
        </Link>
       

		<button onClick={()=>checkout()} type="button" className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
			Checkout
		</button>
	</div>
</div>
    );
};

export default Buy;