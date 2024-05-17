import React from 'react';
import './Home.css'
import Product from '../../components/Prodact/Product';
import {useGetUsersQuery} from '../../components/context/api/User'

const Home = () => {
    let {data,isError,isLoading,error,isSuccess} = useGetUsersQuery()
    return (
        <div>
            <Product isAdmin={false} product={data}/>
        </div>
    );
}

export default Home;
