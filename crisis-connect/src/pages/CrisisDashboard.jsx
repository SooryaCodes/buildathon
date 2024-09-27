import React, { useEffect } from 'react'

import MapboxMap from '../components/Map';
import CountryList from '../components/CountryList';

export default function CrisisDashboard() {
    useEffect(() => {
        const buildChart = (selector, options, lightTheme, darkTheme) => {
            const chart = new ApexCharts(document.querySelector(selector), {
                ...options(),
                theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme
            });
            chart.render();
        };

        buildChart(
            "#hs-multiple-area-charts",
            (mode) => ({
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
                stroke: { curve: 'straight', width: 2 },
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
                    tickPlacement: 'on',
                    categories: [

                        '15 August', '15 September', '15 October', '15 November', '15 December'
                    ],
                    axisBorder: { show: false },
                    axisTicks: { show: false },
                    labels: {
                        style: { fontSize: '13px', fontFamily: 'Inter, ui-sans-serif', fontWeight: 400 },
                        formatter: (title) => {
                            if (title) {
                                const newT = title.split(' ');
                                return `${newT[1].slice(0, 3)}`;
                            }
                            return title;
                        }
                    }
                },
                yaxis: {
                    labels: {
                        align: 'left',
                        minWidth: 0,
                        maxWidth: 140,
                        style: { fontSize: '13px', fontFamily: 'Inter, ui-sans-serif', fontWeight: 400 },
                        formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value)
                    }
                },
                tooltip: {
                    x: { format: 'MMMM yyyy' },
                    y: { formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}` },
                    custom: function (props) {
                        return buildTooltipCompareTwo(props, {
                            title: 'Revenue',
                            mode,
                            hasTextLabel: true,
                            wrapperExtClasses: 'min-w-48',
                            markerExtClasses: '!rounded-sm'
                        });
                    }
                },
                responsive: [{
                    breakpoint: 568,
                    options: {
                        chart: { height: 300 },
                        labels: {
                            style: { colors: 'red', fontSize: '11px', fontFamily: 'Inter, ui-sans-serif', fontWeight: 400 },
                            offsetX: -2,
                            formatter: (title) => title.slice(0, 3)
                        },
                        yaxis: {
                            labels: {
                                align: 'left',
                                minWidth: 0,
                                maxWidth: 140,
                                style: { colors: 'red', fontSize: '11px', fontFamily: 'Inter, ui-sans-serif', fontWeight: 400 },
                                formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value)
                            }
                        }
                    }
                }]
            }),
            {
                colors: ['red', 'red', 'red'],
                fill: { gradient: { stops: [0, 60, 100] } },
                xaxis: { labels: { style: { colors: 'red' } } },
                yaxis: { labels: { style: { colors: 'red' } } },
                grid: { borderColor: 'red' }
            },
            {
                colors: ['red', 'red', 'red'],
                fill: { gradient: { stops: [100, 60, 0] } },
                xaxis: { labels: { style: { colors: 'red' } } },
                yaxis: { labels: { style: { colors: 'red' } } },
                grid: { borderColor: 'red' }
            }
            
        );
    }, []);

    return (
        <div className=' w-full min-h-screen '>
            <div className='absolute h-full w-full top-20 bg-blue-950 p-10 pb-40'>
                <div className="mt-2 bg-blue-950 border   text-white rounded-lg p-4  w-full dark:bg-blue-500 text-xl" role="alert" tabIndex="-1" aria-labelledby="hs-solid-color-info-label">
                    <span id="hs-solid-color-info-label" className="font-bold">COVID-19 Reports and Aanalysis</span>
                </div>
                <div className='w-full mt-4 grid h-full  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-11'>
                    <div className='col-span-3 bg-white px-4 py-8 rounded-xl'>
                        <div className='flex items-center gap-2 justify-left'>
                            <h4 className='font-semibold text-4xl'>254,489</h4>
                            <span className='text-red-600 text-base  font-semibold'><h5>+15,345</h5><h6 className='text-xs'>increases on previous 28 days.</h6></span>

                        </div>
                        <p className='text-xs text-gray-800'>Reported Covid-19 cases</p>
                        <p className='text-xs text-gray-800'>World, 28 days to 8 September 2024

                        </p>

                        <div className='mt-4'>
                            <div
                                className="mt-2 bg-red-100   border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500"
                                role="alert"
                                tabIndex={-1}
                                aria-labelledby="hs-soft-color-danger-label"
                            >
                                <div className='flex justify-between'>
                                    <span id="hs-soft-color-danger-label" className="font-bold text-xl ">
                                        Death Rate
                                    </span> <span className='text-xl font-semibold'>234,582</span>
                                </div>
                                Across the globe as of 02-10-2024
                            </div>
                            <div
                                className="mt-2 bg-yellow-100 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500"
                                role="alert"
                                tabIndex={-1}
                                aria-labelledby="hs-soft-color-warning-label"
                            >
                                <div className='flex justify-between'>
                                    <span id="hs-soft-color-danger-label" className="font-bold text-xl ">
                                        Infected Rate
                                    </span> <span className='text-xl font-semibold'>234,582</span>
                                </div>
                                Across the globe as of 02-10-2024
                            </div>
                            <div
                                className="mt-2 bg-teal-100 border border-teal-200 text-sm text-teal-800 rounded-lg p-4 dark:bg-teal-800/10 dark:border-teal-900 dark:text-teal-500"
                                role="alert"
                                tabIndex={-1}
                                aria-labelledby="hs-soft-color-success-label"
                            >
                                <div className='flex justify-between'>
                                    <span id="hs-soft-color-danger-label" className="font-bold text-xl ">
                                        Vaccinated Rate
                                    </span> <span className='text-xl font-semibold'>234,582</span>
                                </div>
                                Across the globe as of 02-10-2024
                            </div>


                            <>
                                {/* Legend Indicator */}
                                <div className="flex mt-8 justify-center sm:justify-end items-center gap-x-4">
                                    <div className="inline-flex items-center">
                                        <span className="size-2.5 inline-block bg-red-600 rounded-sm me-2" />
                                        <span className="text-[13px] text-gray-600 dark:text-neutral-400">
                                            Deaths
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center">
                                        <span className="size-2.5 inline-block bg-yellow-300 rounded-sm me-2" />
                                        <span className="text-[13px] text-gray-600 dark:text-neutral-400">
                                            Infected
                                        </span>
                                    </div>

                                    <div className="inline-flex items-center">
                                        <span className="size-2.5 inline-block bg-green-300 rounded-sm me-2" />
                                        <span className="text-[13px] text-gray-600 dark:text-neutral-400">
                                            Vaccinated
                                        </span>
                                    </div>
                                </div>
                                {/* End Legend   Indicator */}
                                <div className=' p-2'>
                                    <div id="hs-multiple-area-charts" className='font-sans' />

                                </div>
                            </>




                        </div>
                    </div>
                    <MapboxMap />
                    <div className='col-span-3 bg-white p-2 rounded-xl'>
                        <CountryList/>
                    </div>
                </div>
            </div>
        </div>
    )
}
