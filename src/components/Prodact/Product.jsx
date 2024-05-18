import React,{memo} from 'react';
import './Prodact.css'
import {useDeletUserMutation} from '../../components/context/api/User'

const Product = ({product,isAdmin}) => {
  const [deletUser,{data,isError,isLoading,isSuccess,error}] = useDeletUserMutation()
  const [editUser,setEditUser] = React.useState(null)
  console.log(editUser);

  const handelDeletUser = (id) => {
    deletUser(id)
  }

    let cards = product?.map((inx)=>(
        <div className="card" key={inx.id}>
          <div className="hammasi">
          <div className="hammasi_all">
          <img src={inx.url} alt="" />
            <h3>{inx.Ism}</h3>
            <p>{inx.Yoshi}</p>
            {
              isAdmin ?
                <button onClick={() =>handelDeletUser(inx.id)}>delet</button>

              :
              <></>
            }
          </div>
          </div>
        </div>
    ))
    return (
        <div className="container">
        <div className="wrapper">
            {cards}
        </div>

        </div>
    );
}

export default memo(Product);
