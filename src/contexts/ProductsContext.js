import React, { createContext, useState, useEffect } from 'react';
// import { mainmenu } from '../services/dummy';

import axios from 'axios';

export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // const menuMain = () => {
    //     return axios.get('http://127.0.0.1:8000/menu/main')
    // }
    // const menuSide = () => {
    //     return axios.get('http://127.0.0.1:8000/menu/side')
    // }
    // const menuBeverage = () => {
    //     return axios.get('http://127.0.0.1:8000/menu/beverage')
    // }
    // const menuAdd = () => {
    //     return axios.get('http://127.0.0.1:8000/menu/add')
    // }


    // const fetchProducts = async () => {
    // try {
    //     // 요청이 시작 할 때에는 error 와 Products 를 초기화하고
    //     setError(null);
    //     setProducts(null);
    //     // loading 상태를 true 로 바꿉니다.
    //     setLoading(true);

    //     axios.all([await menuMain(), await menuSide(), await menuBeverage(), await menuAdd()]) // axios.all로 여러 개의 request를 보내고
    //     .then(results=> {
    //         var temp = results.map(r => r.data);
    //         setProducts(temp.map(cat => {
    //             cat.map(e=>{
    //                 return {id: e.menu_id,
    //                         name: e.menu_name,
    //                         price: e.price,
    //                         photo: `/img/${e.menu_id}.png`,
    //                         desc: e.description}
    //             })
    //         }))
    //     });
    //   } catch (e) {
    //     setError(e);
    //   }
    //   setLoading(false);
    // };
    // useEffect(() => {
    // fetchProducts();
    // }, []);



    // axios.all([menuMain(), menuSide(), menuBeverage(), menuAdd()]) // axios.all로 여러 개의 request를 보내고
    // .then(axios.spread((mainRes, sideRes, beverRes, addRes) => { // response를 spread로 받는다
        // console.log('main : ' , temp.data);
        // console.log('side : ' , sideRes);
        // console.log('bever : ' , beverRes);
        // console.log('main : ' , addRes);


        // setProducts((event) => event.data.map((e) => {
        //     return {id: e.menu_id,
        //             name: e.menu_name,
        //             price: e.price,
        //             photo: `/img/${e.menu_id}.png`,
        //             desc: e.description
        //             }
        //     })).catch((e) => {
        //             setError(e)
        //             }
        //         )
    //         }
    //     )
    // )


    const fetchProducts = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 Products 를 초기화하고
          setError(null);
          setProducts(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);

          const response = await axios.get('http://127.0.0.1:8000/menu/');
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

    

    console.log('2-----', products)
    if (loading) return <div> {console.log("loading..")} 로딩중..</div>;
    if (error) return <div> {console.log("Error !")} 에러가 발생했습니다</div>;
    if (!products) return null

    return (
        <>
            <ProductsContext.Provider value={{products}} >
                { children }
            </ProductsContext.Provider>
        </>
     );
}
 
export default ProductsContextProvider;