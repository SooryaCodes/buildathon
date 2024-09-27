import React from 'react'
import Map from '../components/Map'

export default function CrisisDashboard() {
    return (
        <div className=' w-full min-h-screen bg-blue-950'>
            <div className='absolute h-full w-full top-24 p-10'>
                <div class="mt-2 bg-white   text-blue-950 rounded-lg p-4  w-full dark:bg-blue-500 text-xl" role="alert" tabindex="-1" aria-labelledby="hs-solid-color-info-label">
                    <span id="hs-solid-color-info-label" class="font-bold">COVID-19 Reports and Aanalysis</span>
                </div>
                <div className='w-full mt-4 grid h-full  gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-8'>
                    <div className='col-span-2 bg-white rounded-xl'></div>
                    <Map />
                    <div className='col-span-2'></div>
                </div>
            </div>
        </div>
    )
}
