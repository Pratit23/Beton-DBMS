import React from 'react'
import { Doughnut } from 'react-chartjs-2'


const ContractorDonut = ({ values }) => {
    const data = {
        labels: ['Active Tenders', 'Available Tenders', 'All Reports'],
        datasets: [
            {
                label: '# of Votes',
                data: [...values],
                backgroundColor: [
                    'rgb(238, 152, 154)',
                    'rgb(239, 181, 229)',
                    'rgb(255, 209, 155)'
                ],
                borderColor: [
                    'rgb(238, 152, 154)',
                    'rgb(239, 181, 229)',
                    'rgb(255, 209, 155)'
                ],
                borderWidth: 1,
            },
        ],
    }
    return (
        <>
            <Doughnut data={data} />
        </>
    )
}

export default ContractorDonut