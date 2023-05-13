import { useState } from "react";
import validate from "../validation";
import style from "./Form.module.css";

export default function Form({login}) {
    
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value,
        }))
    }
     
    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

    return(
        <form className={style.default} action="">
            <label htmlFor="">Email: </label>
            <input type="text" name="email" placeholder="Ingresa el email..." value={userData.email} onChange={handleChange}/>
            <p className={style.danger}>{errors.email}</p>

            <label htmlFor="">Password: </label>
            <input type="text" name="password" placeholder="Ingresa el password..." value={userData.password} onChange={handleChange}/>
            <p className={style.danger}>{errors.password}</p>

            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}