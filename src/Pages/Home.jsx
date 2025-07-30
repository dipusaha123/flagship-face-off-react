import React, { useState } from 'react';
import Hero from '../Components/Hero';
import PhonesContainer from '../Components/PhonesContainer'
import { useLoaderData } from 'react-router';


const Home = () => {
    const data = useLoaderData()
    const[phones,setPhones] = useState(data)
    const handleSearch = (e,text) =>{
        e.preventDefault()
        if(text ==='') return setPhones(data)

        const searchPhones = data.filter(phone => 
            phone.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
            phone.brand?.toLowerCase().split(' ').includes(text.toLowerCase())

        )
         setPhones(searchPhones)
    }
    console.log(data)
    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero> 
            <PhonesContainer phones = {phones}></PhonesContainer>
         

        </div>
    );
};

export default Home;