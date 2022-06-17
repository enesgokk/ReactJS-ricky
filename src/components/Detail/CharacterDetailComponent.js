import React from 'react'
import dateFormat from "dateformat";

const CharacterDetailComponent = ({characterDetail}) => {
  return (
    <div className='App' >
        {characterDetail.map((character,i)=>
            <div key={i} className='App-header'> 
                <img className='App-logo rounded-full' src={character.image}/>
                <div>Name: {character.name}</div>
                <div>Species: {character.species}</div>
                <div>Gender: {character.gender}</div>
                <div>Status: {character.status}</div>
                <div>Location: {character.origin.name}</div> 
                <div>Created:  {dateFormat(character.created,"dddd, mm/dd/yyyy, h:MM TT") }</div> 
            </div>
        )}
    </div>
  )
}

export default CharacterDetailComponent