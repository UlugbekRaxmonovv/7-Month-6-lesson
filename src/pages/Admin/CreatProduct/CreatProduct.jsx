import React,{useState} from 'react';
import './CreatProduct.css'
import User from '../../../pages/Admin/CreatProduct/User/User'
import {useGetUsersQuery,useDeletUserMutation} from '../../../components/context/api/User'

const CreatProduct = () => {
  const [editUser, setEditUser] = React.useState(null);
  const [deletUser,{data:produvt,isError,isLoading,isSuccess,error}] = useDeletUserMutation()


  const handelDeletUser = (id) => {
    deletUser(id)
  }
    let {data} = useGetUsersQuery()
    let cards = data?.map((inx)=>(
      <div className="card" key={inx.id}>
        <div className="hammasi">
        <div className="hammasi_all">
        <img src={inx.url} alt="" />
          <h3>{inx.Ism}</h3>
          <p>{inx.Yoshi}</p>
          <div className="btn8">
              <div className="btn9">
                <button onClick={() =>setEditUser(inx)}>Edit</button>
                </div> 
                <div className="btn9">
                <button onClick={() =>handelDeletUser(inx.id)}>delet</button>
                </div>
                </div>
        </div>
        </div>
      </div>
  ))
    return (
        <div>
       <div className="container">
        <div className="wrapper">
            {cards}
        </div>
        {
          editUser ? <User data={editUser}  setData={setEditUser} />
          :
          <></>
        }
        </div>
        </div>
    );
}

export default CreatProduct;
