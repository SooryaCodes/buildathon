import React, { useEffect, useState } from 'react';

const CovidData = () => {
    const [countryData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCovidData = async () => {
            try {
                const response = await fetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/covid-19-pandemic-worldwide-data/records/?limit=100');
                const data = await response.json();

                // Extracting data for each country
                console.log(data);
                
                const formattedData = data.data.map(country => ({
                    country: country.region.name,
                    confirmed: country.confirmed,
                    deaths: country.deaths,
                    recovered: country.recovered,
                    vaccinated: country.vaccinated || 0,
                    deathRate: ((country.deaths / country.confirmed) * 100).toFixed(2) + '%',
                    infectedRate: ((country.confirmed / country.population) * 100).toFixed(2) + '%',
                    recoveryRate: ((country.recovered / country.confirmed) * 100).toFixed(2) + '%'
                }));
                console.log(formattedData);

                setCountryData(formattedData);
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCovidData();
    }, []);


    return (
        <div>
          
        </div>
    );
};

export default CovidData;
