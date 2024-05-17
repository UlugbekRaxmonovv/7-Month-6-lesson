import React,{useEffect, useState} from 'react';
import './CreateUser.css'
import {usePostUserMutation} from '../../../components/context/api/User'
import { toast } from 'react-toastify';


const CreateUser = () => {
let [usePost,{isLoading,data,isSuccess}] =usePostUserMutation()

 const [name, setName] = useState('');

 const [surname, setSurname] = useState('');

 const [age, setAge] = useState('');

 useEffect(() =>{
  if(isSuccess){
    setName('')
    setSurname('')
    setAge('')
    toast.success('User created')

   

  }
  if(isLoading){
    toast.info('Loading...')
 }
 },[isSuccess])

 const hadelSubmit = (e) => {
    // console.log(data);
    e.preventDefault();
    let user ={
        name:name,
        surname:surname,
        age: +age,
    }
    usePost(user)


 }
    return (
        <div>
        <form action="" onSubmit={hadelSubmit}>
          <label htmlFor="">Name</label>
          <input 
          value={name}
          onChange={(e) =>setName(e.target.value)}
          type="text"  placeholder='Name..........'/>
          <label htmlFor="">Surname</label>
          <input
          value={surname}
          onChange={(e) =>setSurname(e.target.value)}
           type="text" placeholder='Surname..........' />
          <label htmlFor="">Age</label>
          <input 
          value={age}
           onChange={(e) => setAge(e.target.value)}
          type="number" name="" id=""  placeholder='Age....'/>
          <button >Submit</button>

        </form>
        </div>
    );
}

export default CreateUser;
