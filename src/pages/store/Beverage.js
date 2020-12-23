import React from 'react';
import Layout from '../../components/Layout';

import ProductsGridBeverage from './ProductsGridBeverage';


import { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const Beverage = createContext()


const BeverageStore = () => {
    const [productsBeverage, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 Products 를 초기화하고
          setError(null);
          setProducts(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);

          const response = await axios.get('http://127.0.0.1:8000/menu/beverage');
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

    

    console.log('2-----', productsBeverage)
    if (loading) return <div> {console.log("loading..")} 로딩중..</div>;
    if (error) return <div> {console.log("Error !")} 에러가 발생했습니다</div>;
    if (!productsBeverage) return null




    return (
        <>
            <Beverage.Provider value={{productsBeverage}} >
                <Layout title="Beverage" description="This is the Store page" >
                <div >
                    <div className="text-center mt-5">
                        <h1>Beverage Menu</h1>
                        <p></p>
                    </div>
                    <ProductsGridBeverage/>
                </div>
                </Layout>
            </Beverage.Provider>
        </>
     );
}
 
export default BeverageStore;