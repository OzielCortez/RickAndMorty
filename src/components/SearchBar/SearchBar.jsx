import { useState } from "react";
/* import styles from "./SearchBar.module.css" */

export default function SearchBar({onSearch}) {
   /* const onSearch = (characterID) => window.alert(characterID); */
   const [id, setId] = useState(""); 
   
   const handleChange = (input) => {
      setId(input.target.value)
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}

/*
Crea una función handleChange de modo que, cada vez que el usuario escriba algo en el input, este se guarde en el estado local id.
No te olvides de pasarle esta función al input, y asignarle a este el estado local como su value.
Una vez que hayas cumplido con todos estos pasos, asegúrate de que cada vez que se ejecute la función onSearch esa reciba el estado id como argumento.

*/
