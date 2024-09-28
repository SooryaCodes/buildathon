import React from 'react'
import CrisisCard from '../components/CrisisCard'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='absolute top-24 container mx-auto p-10'>
            <div>
                <h4 className='text-2xl font-bold text-blue-950 mb-3'><i className='ri-map-pin-line'></i> Nearby Crisises </h4>
                <div>
                    <CrisisCard />
                </div>
            </div>
            <hr  className='mt-10'/>
            <div className='mt-10'>
                <h4 className='text-2xl font-bold text-blue-950 mb-3' ><i className="ri-earth-line"></i> Global Crisises </h4>
                <div>
                    <CrisisCard />
                </div>
            </div>
        
<Link to="https://buymeacoffee.com/sooryakriz"
                        type="button"
                        className="h-12 fixed right-10 bottom-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-teal-500 text-teal-500 hover:border-teal-400 hover:text-teal-400 focus:outline-none focus:border-teal-400 focus:text-teal-400 disabled:opacity-50 disabled:pointer-events-none"
                    >
                       <i class="ri-money-dollar-circle-line"></i> Donate
                    </Link>
        </div>
    )
}
