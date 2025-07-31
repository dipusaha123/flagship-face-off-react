import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Buttons from '../Components/Ui/Buttons';
import { MdBookmarkAdd, MdShoppingCart } from 'react-icons/md';
import { addFavorite } from '../Utils';

const PhoneDetails = () => {

    const data = useLoaderData()
    const { id } = useParams()
    const singlePhone = data.find(phone => phone.id === parseInt(id))
    console.log(singlePhone)

    const { name, brand, model, image, price, description, storage, camera_info } = singlePhone

    const handleFavorite = () =>{
        addFavorite(singlePhone)
    }
    return ( 
        <div className='w-full py-12'>
            <img src={image}
                className='w-full mx-auto md:w-auto mb-8 '
                alt="" />
                <div className="flex justify-between">
                    <h1 className='text-6xl font-thin mb-8'>{name}</h1> 
                    <div className='space-x-4'>
                      <Buttons label = {<MdShoppingCart />}></Buttons>
                      <Buttons onClick ={handleFavorite} label = {<MdBookmarkAdd />}></Buttons>

                    </div>

                </div>
                <div>
                    <h3 className='text-2xl'>Details</h3>
                    <p>Band: {brand}</p>
                     <p>Model: {model}</p>
                     <p>Storage : {storage}</p>
                  
                   <p>Description : {description}</p>
                    <p>Camera Info : {camera_info}</p>   

                </div>
        </div>
    );
};

export default PhoneDetails;