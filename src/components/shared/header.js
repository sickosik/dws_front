import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';

const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <header className={styles.header}>
            <Link to='/'>Recommand</Link>
            <Link to='/main'>Main</Link>
            <Link to='/side'>Side</Link>
            <Link to='/beverage'>Beverage</Link>
            <Link to='/add'>Add</Link>
            <Link to='/cart'> <CartIcon/> Cart ({itemCount})</Link>
        </header>
     );
}
 
export default Header;