import { connect } from "react-redux";
import Card from "./Card/Card";

export function Favorites(props, {myFavorites, onClose}){
    return (<div> 
         
        {myFavorites.map(({name, id,species, gender, status, origin, image}) => {
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

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites, 
    }
}

export default connect(mapStateToProps, null)(Favorites)