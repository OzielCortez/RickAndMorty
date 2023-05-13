import './App.css'
import axios from 'axios'
import Cards from './components/Cards/Cards.jsx'
import Nav from "./components/Nav.jsx"
import About from "./components/About.jsx"
import Detail from './components/Detail'
import {useState, useEffect} from "react"
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Error404 from './components/Error404.jsx'
import Form from './components/Form'
import Favorites from "./components/Favorites.jsx"
//import { useEffect } from 'react'



function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const EMAIL = "ozielcortez.jmz@hotmail.com";
   const PASSWORD = "oacj131295";
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   function login(userData){
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate("/home");
      }
   }

   function logout(){
      setAccess(false)
   }

   function urlLocation(){
      if(location.pathname !== "/") return (<Nav onSearch={onSearch} logout={logout}/>)
   }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      setCharacters(characters.filter((char)=> parseInt(id) !== char.id))
   }

   return (
      <>
      {urlLocation()}
      <Routes>
         
         <Route path='*' element={<Error404/>}/>
         <Route path='/home' element={
            <Cards characters={characters} onClose={onClose}/>
         }/>         
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/favorites' element={<Favorites/>} />
      </Routes>
      
      </>
   )
}

export default App;
