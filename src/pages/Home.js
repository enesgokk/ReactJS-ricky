import React,{useState,useEffect} from 'react'
import HomeComponent from '../components/Home/HomeComponent'
import { getAllEpisode } from '../services/services';

const Home = () => {

    const [allEpisodes,setAllEpisodes]=useState();

    useEffect(() => {
        async function fetchPosts() {
            setAllEpisodes((await getAllEpisode()))
        }
        fetchPosts();
    }, [])

  return (
    <div>
        <HomeComponent allEpisodes={allEpisodes} />
    </div>
  )
}

export default Home