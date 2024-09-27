import React from 'react'
import { Link } from 'react-router-dom'

export default function CrisisCard() {
    return (
        <Link to="/crisis-view" className="w-96 min-h-[400px] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <img
                className="w-full h-52 object-cover rounded-t-xl"
                src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Card Image"
            />
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    Covid-19
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                    COVID-19 is a highly contagious respiratory illness caused by the SARS-CoV-2 virus, leading to a global pandemic that has significantly impacted public health, economies, and daily life worldwide.
                </p>
                <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">
                    Last updated 5 mins ago
                </p>
            </div>
        </Link>

    )
}
