import React, { useEffect, useState } from 'react';

const CovidDeathRate = () => {
    const [covidData, setCovidData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCovidData = async () => {
            try {
                const response = await fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-pandemic-worldwide-data&q=&sort=date&facet=zone&facet=category&refine.category=Deaths');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                // Process the data to get the latest date
                const latestDate = data.records[0].fields.date;

                // Filter the records to only include those from the latest date
                const latestData = data.records.filter(record => record.fields.date === latestDate);

                // Extract the relevant information
                const formattedData = latestData.map(record => ({
                    country: record.fields.zone,
                    location: record.fields.location,
                    deathRate: record.fields.count, // Assuming value represents the death rate
                }));

                setCovidData(formattedData);
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
            <h1>COVID-19 Death Rates by Country (Latest Date)</h1>
           
        </div>
    );
};

export default CovidDeathRate;
