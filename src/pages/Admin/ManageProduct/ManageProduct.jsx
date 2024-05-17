import React from 'react';
import './ManageProduct.css'
import {useGetUsersQuery,useDeletUserMutation} from '../../../components/context/api/mango'

const ManageProduct = () => {
  const {data} = useGetUsersQuery();
  const [deletUser,{data:produvt,isError,isLoading,isSuccess,error}] = useDeletUserMutation()

  const handelDeletUser = (id) => {
    deletUser(id)
  }

    let cards = data?.map((inx)=>(
        <div className="card" key={inx.id}>
          <div className="hammasi">
          <div className="hammasi_all">
          <img src={inx.url} alt="" />
            <h3>{inx.Ism}</h3>
            <p>{inx.Yoshi}</p>
            <button onClick={() =>handelDeletUser(inx.id)}>delet</button>
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
        </div>
        </div>
    );
}

export default ManageProduct;
