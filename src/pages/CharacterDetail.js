import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CharacterDetailComponent from '../components/Detail/CharacterDetailComponent';
import { getCharacterDetail } from '../services/services';

const CharacterDetail = () => {

    const [characterDetail, setCharacterDetail] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        async function fetchCharacterDetail() {
            setCharacterDetail([await getCharacterDetail(id)])
        }
        fetchCharacterDetail();
    }, [])

    return (
        <div>
            <CharacterDetailComponent characterDetail={characterDetail} />
        </div>
    )
}

export default CharacterDetail