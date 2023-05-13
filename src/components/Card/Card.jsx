import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav,removeFav } from "../../redux/action";
import { connect } from "react-redux";
import { useState, useEffect} from "react";

export function Card({name, species, gender, status, origin, image, onClose, id, addFav, removeFav, myFavorites}, props) {
   /* const {} = props; */

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav(props);
      }
   }


   return (
      
      <div className={styles.containerCard}>
      {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }
         <img src={image} alt='Character'/>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         </Link>
         
         <button onClick={onClose}>X</button>
      </div>
   );
};

const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (character)=> {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      },
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)