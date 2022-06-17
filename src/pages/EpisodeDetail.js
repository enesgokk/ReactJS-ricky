import React, { useState, useEffect } from 'react'
import { getEpisodeDetail } from '../services/services';
import { useParams } from 'react-router-dom';
import DetailComponent from '../components/Detail/EpisodeDetailComponent';

const EpisodeDetail = () => {

  const [episodeDetail, setEpisodeDetail] = useState([]);
  const [character,setCharacter]=useState();
  let {id}=useParams();

  useEffect(() => {
    async function fetchEpisodeDetail() {
      let data=((await getEpisodeDetail(id)))
      setEpisodeDetail(data)
      setCharacter(await Promise.all(
        data.characters.map((x)=>{
          return fetch(x).then((res)=>res.json())
        })))
    }
    fetchEpisodeDetail();
  }, [])

  return (
    <div>
      {<DetailComponent episodeDetail={episodeDetail} character={character} id={id} />}
    </div>
  )
}

export default EpisodeDetail