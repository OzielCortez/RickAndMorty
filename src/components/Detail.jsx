import style from "./Detail.module.css"
import axios from "axios"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(props){
    
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className={style.detailLetter}>
            <h3>{character.name}</h3>
            <h3>{`Status: ${character.status}`} </h3>
            <h3>{`Species: ${character.species}`}</h3>
            <h3>{`Gender: ${character.gender}`}</h3>
            <h3>{`Origin: ${character.origin && character.origin.name}`}</h3>
            <img src={character.image} alt={character.name} />
           
        </div>
    )
}


/*
Renderiza condicionalmente cada una de estas propiedades.
name
status
species
gender
origin (ten en cuenta que el nombre se guarda dentro de otra propiedad "name")
image
*/
