import React from 'react'
import TableRow from './TableRow'


function TableBody({ Participationdata,
    setParticipationdata }) {
    // console.log(Participationdata)

    Participationdata.sort((i,j) => {
        if(i["Total Completions of both Pathways"] === "No" && j["Total Completions of both Pathways"] === "Yes")
            return 1
        else if(i["Total Completions of both Pathways"] === "Yes" && j["Total Completions of both Pathways"] === "No")
            return -1
        else
            return 0
    })
    Participationdata.sort((i,j) => {
        if(i["Redemption Status"] === "No" && j["Redemption Status"] === "Yes")
            return 1
        else if(i["Redemption Status"] === "Yes" && j["Redemption Status"] === "No")
            return -1
        else
            return 0
    })



    return (
        <tbody className='text-xs '>
            {Participationdata.length > 0 ? Participationdata.map((participant, index) => {

                return <TableRow key={participant["Student Email"] || 1} participant={participant} />
            }) : <div className='text-lg'>No Data Found</div>}
        </tbody >
    )
}

export default TableBody