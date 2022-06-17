import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const DetailComponent = ({ episodeDetail, character, id }) => {

    const [search, setSearch] = useState("");
    const [selectedFilter,setSelectedFilter]=useState();

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    const handleChangeFilter=()=>{
        var select = document.getElementById('filters');
        setSelectedFilter(select?.options[select.selectedIndex]?.value);
    }

    const compare = ( a, b ) => {
       if (selectedFilter==="name" ){
        if ( a.name < b.name ){
            return -1;
          }
          if ( a.name > b.name ){
            return 1;
          }
       }
       if (selectedFilter==="date" ){
        return new Date(b.created) - new Date(a.created);
       }
      }

      return (
        <div>
            <div>
                <h1 className='text-center text-4xl p-2' >EPISODE {id} DETAIL</h1>
                <ul className=' flex flex-col items-center mx-auto w-64'>
                    <li className='text-left w-full list-disc' > <span className='font-semibold'>Episode:</span> {episodeDetail.episode}</li>
                    <li className='w-full list-disc' > <span className='font-semibold'>Name: </span>{episodeDetail.name} </li>
                    <li className='w-full list-disc' > <span className='font-semibold'>Date: </span> {episodeDetail.air_date}</li>
                </ul>
            </div>
            
            <div className='flex flex-col items-center p-6'>
                <h3 className='text-center text-2xl '>Characters in episode {id}</h3>
                <div className='flex items-center'>
                    <div className='pt-2 mr-2'>
                        <label className='pr-2' htmlFor="">Search:</label>
                        <input className='border rounded-lg p-2' type="text" placeholder='Search characters...' onChange={handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="select">Filter by: </label>
                        <select name="filters" id="filters" onChange={handleChangeFilter}>
                            <option value="id">id</option>
                            <option value="name">name (A-Z)</option>
                            <option value="date">created date (new) </option>
                        </select>
                    </div>
                </div>
               
            </div>
            {character
                ? character.filter(character => character.name.toLowerCase().includes(search)).sort(compare).map((person, i) =>
                    <Link key={i} to={{ pathname: `/character/${person.id}` }} className='flex flex-col w-max m-auto border p-2 items-center pb-4 mb-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-gray-200' >
                        <img src={person.image} className="hover:bg-gray-500 " />
                        <div className='pt-2' >{person.name}</div>
                    </Link>
                )
                : <div className='text-center h-full items-center'>Loading...</div>
            }

        </div>
    )
}

export default DetailComponent