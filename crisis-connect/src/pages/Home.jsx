import React from 'react'
import CrisisCard from '../components/CrisisCard'

export default function Home() {
    return (
        <div className='absolute top-24 container mx-auto p-10'>
            <div>
                <h4 className='text-2xl font-bold text-blue-950 mb-3'><i className='ri-map-pin-line'></i> Nearby Crisises </h4>
                <div>
                    <CrisisCard />
                </div>
            </div>
            <div className='mt-10'>
                <h4 className='text-2xl font-bold text-blue-950 mb-3' ><i className="ri-earth-line"></i> Global Crisises </h4>
                <div>
                    <CrisisCard />
                </div>
            </div>
        </div>
    )
}
