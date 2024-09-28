import React, { useEffect, useState } from 'react';
import MapboxMap from '../components/Map';
import CountryList from '../components/CountryList';
import CountryChart from '../components/CountryChart';
import Chart from 'react-apexcharts';

export default function CrisisDashboard() {
    const [covidData, setCovidData] = useState({});
    const [chartOptions, setChartOptions] = useState({
        chart: {
            height: 300,
            type: 'area',
            toolbar: { show: false },
            zoom: { enabled: false }
        },
        series: [
            { name: '2023', data: [18000, 51000, 60000, 38000, 88000] },
            { name: '2022', data: [27000, 38000, 60000, 77000, 40000] }
        ],
        legend: { show: false },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2 },
        grid: { strokeDashArray: 2 },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                opacityFrom: 0.1,
                opacityTo: 0.8
            }
        },
        xaxis: {
            type: 'category',
            categories: ['15 August', '15 September', '15 October', '15 November', '15 December'],
            labels: {
                style: { fontSize: '13px', fontFamily: 'Inter, ui-sans-serif', fontWeight: 400 }
            }
        },
        yaxis: {
            labels: {
                style: { fontSize: '13px', fontFamily: 'Inter, ui-sans-serif', fontWeight: 400 },
                formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value)
            }
        },
        tooltip: {
            x: { format: 'MMMM yyyy' },
            y: { formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}` }
        }
    });

    const fetchData = async () => {
        const response = await fetch('https://disease.sh/v3/covid-19/all');
        const data = await response.json();
        console.log(data);
        setCovidData(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='w-full min-h-screen bg-blue-950' >
            <div className='absolute h-full w-full top-20 bg-blue-950 950 p-10 pb-40'>
                <div className="mt-2 bg-blue-950 border text-white rounded-lg p-4 w-full dark:bg-blue-500 text-xl" role="alert">
                    <span className="font-bold">COVID-19 Reports and Analysis</span>
                </div>
                <div className='w-full mt-4 grid h-full gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-11'>
                    <div className='col-span-3 bg-white px-4 py-8 rounded-xl'>
                        <div className='flex items-center gap-2 justify-left'>
                            <h4 className='font-semibold text-4xl'>234,352,23</h4>
                            <span className='text-red-600 text-base font-semibold'>
                                <h5>+15,345</h5>
                                <h6 className='text-xs'>increases on previous 28 days.</h6>
                            </span>
                        </div>
                        <p className='text-xs text-gray-800'>Reported Covid-19 cases</p>
                        <p className='text-xs text-gray-800'>World, 28 days to 8 September 2024</p>
                        <div className='mt-4'>
                            {/* Death Rate */}
                            <div className="mt-2 bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4">
                                <div className='flex justify-between'>
                                    <span className="font-bold text-xl">Death Rate</span>
                                    <span className='text-xl font-semibold'>245,678</span>
                                </div>
                                Across the globe as of 02-10-2024
                            </div>
                            {/* Infected Rate */}
                            <div className="mt-2 bg-yellow-100 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4">
                                <div className='flex justify-between'>
                                    <span className="font-bold text-xl">Infected Rate</span>
                                    <span className='text-xl font-semibold'>323,343,32</span>
                                </div>
                                Across the globe as of 02-10-2024
                            </div>
                            {/* Vaccinated Rate */}
                            <div className="mt-2 bg-teal-100 border border-teal-200 text-sm text-teal-800 rounded-lg p-4">
                                <div className='flex justify-between'>
                                    <span className="font-bold text-xl">Vaccinated Rate</span>
                                    <span className='text-xl font-semibold'>399,567</span>
                                </div>
                                Across the globe as of 02-10-2024
                            </div>
                            {/* Legend Indicator */}
                            <div className="flex mt-8 justify-center sm:justify-end items-center gap-x-4">
                                <div className="inline-flex items-center">
                                    <span className="size-2.5 inline-block bg-red-600 rounded-sm me-2" />
                                    <span className="text-[13px] text-gray-600">Deaths</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="size-2.5 inline-block bg-yellow-300 rounded-sm me-2" />
                                    <span className="text-[13px] text-gray-600">Infected</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="size-2.5 inline-block bg-green-300 rounded-sm me-2" />
                                    <span className="text-[13px] text-gray-600">Vaccinated</span>
                                </div>
                            </div>
                            {/* Chart */}
                            <div className='p-2'>
                                <Chart options={chartOptions} series={chartOptions.series} type="area" height={300} />
                            </div>
                        </div>
                    </div>
                    <MapboxMap />
                    <div className='col-span-3 bg-white p-2 rounded-xl'>
                        <CountryList />
                        <CountryChart />
                    </div>
                </div>
            </div>
        </div>
    );
}
