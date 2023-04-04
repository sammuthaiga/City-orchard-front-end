import React from 'react'

import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline';
import {TruckIcon, SupportIcon} from '@heroicons/react/solid'


import sameImg from '../assets/hero.jpg'

const About = () => { 
    return (
    <div name='support' className='w-full'>
        <div className='w-full h-full bg-gray-900/90 absolute'>
          <img className='w-full h-full object-cover mix-blend-overlay' src={sameImg} alt="/" />
        </div>
        
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h1 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h1>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right market</h3>
                <p className='py-4 text-3xl text-slate-300'>Our City-Orchard app provides the best platform for people to earn money and enjoy fresh fruits as it connects them directly with farmers, ensuring freshness and quality, while enabling them to sell their own produce.Our support team is available 24/7 to assist you. </p>
            </div>
  
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl '>Our registered farmers receive mentorship to boost profits and improve fruit quality through our app.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Marketing Support</h3>
                        <p className='text-gray-600 text-xl'>We offer free advertising to our registered farmers to increase profits and attract more customers.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <TruckIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>
                        Fast Delivery.
                        </h3>
                        <p className='text-gray-600 text-xl'>Our app provides fast delivery and maintains high levels of hygiene to ensure quality produce.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  };
  export default About