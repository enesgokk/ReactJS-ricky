import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const DetailComponent = ({ episodeDetail, characterDetail, id }) => {

    const [search,setSearch]=useState("");

    const handleOnChange=(e)=>{
        setSearch(e.target.value)
    }
    characterDetail && console.log("characterDetail:", characterDetail)
    return (
        <div>
            <h1 className='text-center text-4xl p-2' >EPISODE {id} DETAIL</h1>
            <ul className=' flex flex-col items-center mx-auto w-64'>
                <li className='text-left w-full list-disc' > <span className='font-semibold'>Episode:</span> {episodeDetail.episode}</li>
                <li className='w-full list-disc' > <span className='font-semibold'>Name: </span>{episodeDetail.name} </li>
                <li className='w-full list-disc' > <span className='font-semibold'>Date: </span> {episodeDetail.air_date}</li>
            </ul>
            <div className='flex flex-col items-center p-6'>
                <h3 className='text-center text-2xl '>Characters in episode {id}</h3>
                <div className='pt-2'>
                <label className='pr-2' htmlFor="">Search:</label>
                <input className='border rounded-lg p-2' type="text" placeholder='Search characters...' onChange={handleOnChange} />
                </div>
            </div>
            {characterDetail && characterDetail.filter(characterDetail=>characterDetail.name.toLowerCase().includes(search)).map((character, i) =>
                <Link key={i} className='flex flex-col w-max m-auto border p-2 items-center pb-4 mb-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-gray-200' to={{ pathname: "/about" }} >
                    <img src={character.image} className="hover:bg-gray-500 " />
                    <div className='pt-2' >{character.name}</div>
                </Link>
            )}
        </div>
    )
}

export default DetailComponent