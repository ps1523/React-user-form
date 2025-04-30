import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const respose = await axios.post('https://form-e267b-default-rtdb.firebaseio.com/form.json', form);
            alert("Data is submit successfully");
        }catch(e){
            alert("Error: " + e);
        }
    }

  return (
    <div class="container">
        <div class="form-box">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input type="text" placeholder='Username' onChange={(e)=> setForm({...form,username:e.target.value})}  />
                <input type="email" placeholder='Email' onChange={(e)=> setForm({...form, email:e.target.value})}  />
                <input type="password" placeholder='Password' onChange={(e)=> setForm({...form, password:e.target.value})} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form