import React from 'react';
import './CreatProduct.css'
import Product from '../../../components/Prodact/Product'
import {useGetUsersQuery} from '../../../components/context/api/User'
const CreatProduct = () => {
    let {data} = useGetUsersQuery()
    return (
        <div>
           <Product isAdmin={true}  product={data}/>
        </div>
    );
}

export default CreatProduct;
