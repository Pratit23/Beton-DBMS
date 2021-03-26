import React from 'react'
import { Doughnut } from 'react-chartjs-2'


const AdminDonut = ({ values }) => {
    const data = {
        labels: ['All Users', 'All Contractors', 'All Advertisers', 'All Reports'],
        datasets: [
            {
                label: '# of Votes',
                data: [...values],
                backgroundColor: [
                    'rgba(195, 60, 41, 0.2)',
                    'rgba(229, 190, 144, 0.2)',
                    'rgba(247, 241, 236, 0.2)',
                    'rgba(117, 162, 158, 0.2)',
                ],
                borderColor: [
                    'rgba(195, 60, 41, 1)',
                    'rgba(229, 190, 144, 1)',
                    'rgba(247, 241, 236, 1)',
                    'rgba(117, 162, 158, 1)',
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

export default AdminDonut