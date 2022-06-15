import React, { useState, useEffect } from 'react'
import { getEpisodeDetail } from '../services/services';
import { useParams } from 'react-router-dom';
import DetailComponent from '../components/Detail/DetailComponent';

const EpisodeDetail = () => {

  const [episodeDetail, setEpisodeDetail] = useState([]);
  const [characterDetail,setCharacterDetail]=useState();
  let {id}=useParams();

  useEffect(() => {
    async function fetchEpisodeDetail() {
      let data=((await getEpisodeDetail(id)))
      setEpisodeDetail(data)
      setCharacterDetail(await Promise.all(
        data.characters.map((x)=>{
          return fetch(x).then((res)=>res.json())
        })))
    }
    fetchEpisodeDetail();
  }, [])

  return (
    <div>
      {<DetailComponent episodeDetail={episodeDetail} characterDetail={characterDetail} id={id} />}
    </div>
  )
}

export default EpisodeDetail