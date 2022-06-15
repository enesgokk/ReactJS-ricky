import React,{useState,useEffect} from 'react'
import HomeComponent from '../components/Home/HomeComponent'
import { getAllPosts } from '../services/services';

const Home = () => {

    const [allEpisodes,setAllEpisodes]=useState();

    useEffect(() => {
        async function getPosts() {
            setAllEpisodes((await getAllPosts()))
        }
        getPosts();
    }, [])

  return (
    <div>
        <HomeComponent allEpisodes={allEpisodes} />
    </div>
  )
}

export default Home