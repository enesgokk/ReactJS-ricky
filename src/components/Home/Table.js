import React from 'react'
import dateFormat, { masks } from "dateformat";
import { Link } from 'react-router-dom'

const Table = ({ allEpisodes }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr role={"row"}>
                        <th data-testid="name" scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Episode
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Air Date
                        </th>
                        <th data-testid="creation" scope="col" className="px-6 py-3">
                            Creation Date
                        </th>
                    </tr>
                </thead>
                {allEpisodes && allEpisodes.map((episode, i) =>
                    <tbody key={i} >
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {episode.name}
                            </th>
                            
                                <td className="px-6 py-4">
                                    <Link to={{ pathname:`/detail/${episode.id}`}} >
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{episode.episode}</button>
                                    </Link>
                                </td>
                           
                            <td className="px-6 py-4">
                                {episode.air_date}
                            </td>
                            <td className="px-6 py-4">
                                {dateFormat (episode.created,"mm/dd/yyyy h:MM:ss TT") }
                            </td>
                        </tr>
                    </tbody>
                )}

            </table>
        </div>
    )
}

export default Table