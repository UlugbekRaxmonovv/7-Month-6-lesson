import React from 'react';
import './Login.css'
import Product from '../../components/Prodact/Product'
import {useGetUsersQuery} from '../../components/context/api/User'

const Login = () => {
    let {data} = useGetUsersQuery()
    return (
        <div>
            <Product  product={data} />
        </div>
    );
}

export default Login;
