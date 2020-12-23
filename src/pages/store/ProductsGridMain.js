import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { Main } from './Main';
import styles from './ProductsGrid.module.scss';

const ProductsGridMain = () => {

    const { productsMain} = useContext(Main)

    return ( 
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {productsMain.length} Products
                    </div>
                </div>
                {/* <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search product" className="form-control" id=""/>
                    </div>
                </div> */}
            </div>
            <div className={styles.p__grid}>

                {
                    productsMain.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}
 
export default ProductsGridMain;