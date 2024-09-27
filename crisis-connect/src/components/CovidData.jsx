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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>COVID-19 Data by Country</h1>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Vaccinated</th>
                        <th>Death Rate</th>
                        <th>Infected Rate</th>
                        <th>Recovery Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {countryData.map((country, index) => (
                        <tr key={index}>
                            <td>{country.country}</td>
                            <td>{country.confirmed}</td>
                            <td>{country.deaths}</td>
                            <td>{country.recovered}</td>
                            <td>{country.vaccinated}</td>
                            <td>{country.deathRate}</td>
                            <td>{country.infectedRate}</td>
                            <td>{country.recoveryRate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CovidData;
