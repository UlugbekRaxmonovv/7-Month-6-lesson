import React from 'react';
import './User.css'
import {usePutUserMutation} from '../../../../components/context/api/User'

const User = ({setData,data}) => {
    const [updateUser,{isLoading,isSuccess}] = usePutUserMutation()
  

    const AddCard = (e) => {
        e.preventDefault()
        let links = {
            Ism: data.Ism,
            Yoshi: data.Yoshi
        }
        updateUser({body: links, id: data.id}) 
    }
    return (
        <div>
            <div  onClick={() => setData(null)} className="overfly"></div>
            <form onSubmit={AddCard} className="from_all">
                <h2>Update user</h2>
          <input value={data.Ism} 
          onChange={(e) => setData(prev =>({...prev, Ism: e.target.value }))}
          type="text" />
          <input type="number"
           value={data.Yoshi} 
           onChange={(e) => setData(prev =>({...prev, Yoshi: e.target.value }))}/>
          <button disabled={isLoading}>{isLoading ? 'loading' : 'Save'}</button>                   
          <button type='button' onClick={() => setData(null)}>Cancel</button>                   
            </form>
        </div>
    );
}

export default User;
