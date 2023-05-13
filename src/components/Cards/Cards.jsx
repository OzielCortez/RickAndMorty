import styles from "./Cards.module.css"
import Card from '../Card/Card.jsx'


export default function Cards({characters, onClose}) {
   /* const onclose = () => window.alert('Emulamos que se cierra la card') */
   return (<div className={styles.containerCards}> 
         
         {characters.map(({name, id,species, gender, status, origin, image}) => {
            return (
            <Card
            name = {name} 
            id = {id}
            key = {id}
            species = {species}
            gender = {gender}
            status = {status}
            origin = {origin.name}
            image = {image}
            onClose = {() => onClose(id)}/>
            );
         })};
      </div>);
}
