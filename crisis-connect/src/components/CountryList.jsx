import React, { useEffect, useState } from "react";

const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
];


const CountryList = () => {
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            // Extract country names and coordinates
            const countryData = data.map((country) => ({
                name: country.name.common,
                latlng: country.latlng || [],
            }));
            console.log(countryData);

            setCountries(countryData);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll((prev) => !prev);
    };

    return (
        <div className="p-4">
            <div className="w-full p-4 rounded-t-lg border border-b-0 bg-indigo-950 text-white text-base ">Number of COVID-19 cases (Country Wise) </div>
            <ul className="rounded-t-lg list-inside list-none overflow-y-scroll max-h-80">
                {countries.slice(0, showAll ? countries.length :4).map((item, index) => (
                    <li key={index} className="cursor-pointer hover:font-semibold hover:underline w-full p-4 border  text-sm">{item.name}</li>
                ))}
            </ul>
            <button
                onClick={toggleShowAll}
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-b-lg w-full border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
            >
                {showAll ? "View Less" : "View More"}
            </button>
        </div>
    );
};

export default CountryList;
