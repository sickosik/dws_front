import React from 'react';
import Layout from '../../components/Layout';

import ProductsGridSide from './ProductsGridSide';


import { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const Side = createContext()


const SideStore = () => {
    const [productsSide, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 Products 를 초기화하고
          setError(null);
          setProducts(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);

          const response = await axios.get('http://54.180.155.239:8000/menu/side');
        //   setProducts(response.data); // 데이터는 response.data 안에 들어있습니다.

          setProducts(response.data.map((e) => {
            return {id: e.menu_id,
                    name: e.menu_name,
                    price: e.price,
                    photo: `/img/${e.menu_id}.png`,
                    desc: e.description
                   }
        }));
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
    useEffect(() => {
      fetchProducts();
    }, []);

    

    console.log('2-----', productsSide)
    if (loading) return <div> {console.log("loading..")} 로딩중..</div>;
    if (error) return <div> {console.log("Error !")} 에러가 발생했습니다</div>;
    if (!productsSide) return null




    return (
        <>
            <Side.Provider value={{productsSide}} >
                <Layout title="Side" description="This is the Store page" >
                <div >
                    <div className="text-center mt-5">
                        <h1>Side Menu</h1>
                        <p></p>
                    </div>
                    <ProductsGridSide/>
                </div>
                </Layout>
            </Side.Provider>
        </>
     );
}
 
export default SideStore;