import React, { useEffect } from 'react'

export default function CountryChart() {
    useEffect(() => {
        const buildChart = (selector, options, colors) => {

            const chart = new ApexCharts(document.querySelector(selector), options);
            chart.render();
        };

        const options = {
            chart: {
                height: 230,
                width: '100%',
                type: 'donut',
                zoom: {
                    enabled: false,
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '76%',
                    },
                },
            },
            series: [472343, 233234, 302332],
            labels: ['Deaths', 'Vaccinated', 'Infected'],
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 5,
            },
            grid: {
                padding: {
                    top: -12,
                    bottom: -11,
                    left: -12,
                    right: -12,
                },
            },
            states: {
                hover: {
                    filter: {
                        type: 'none',
                    },
                },
            },
            tooltip: {
                enabled: true,
                custom: (props) => {
                    return buildTooltipForDonut(
                        props,
                        ['#fff', '#fff', '#000']
                    );
                },
            },
        };

        const chartColors = ['#dc2626', '#facc15', '#22c55e'];
        buildChart('#hs-doughnut-chart', options, {
            colors: chartColors,
            stroke: {
                colors: ['rgb(255, 255, 255)'],
            },
        });

    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <div id="hs-doughnut-chart" />
            {/* Legend Indicator */}
            <div className="flex justify-center sm:justify-end items-center gap-x-4 mt-3 sm:mt-6">
                <div className="inline-flex items-center">
                    <span className="size-2.5 inline-block bg-red-600 rounded-sm me-2" />
                    <span className="text-[13px] text-gray-600 dark:text-neutral-400">
                        Deaths
                    </span>
                </div>
                <div className="inline-flex items-center">
                    <span className="size-2.5 inline-block bg-yellow-400 rounded-sm me-2" />
                    <span className="text-[13px] text-gray-600 dark:text-neutral-400">
                        Infected
                    </span>
                </div>
                <div className="inline-flex items-center">
                    <span className="size-2.5 inline-block bg-green-300 rounded-sm me-2 dark:bg-neutral-700" />
                    <span className="text-[13px] text-gray-600 dark:text-neutral-400">
                        Vaccinated
                    </span>
                </div>
            </div>
            {/* End Legend Indicator */}
        </div>
    )
}
