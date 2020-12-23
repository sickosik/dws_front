import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { Side } from './Side';
import styles from './ProductsGrid.module.scss';

const ProductsGridSide = () => {

    const { productsSide} = useContext(Side)

    return ( 
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {productsSide.length} Products
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
                    productsSide.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}
 
export default ProductsGridSide;