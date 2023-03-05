
import Categories from '../Categories/Categories'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import style from './Main.module.css'
import {Outlet} from "react-router-dom";
import Products from "../Categories/subCategories/products/products";
import StandardImageList from "../Categories/subCategories/products/products";


const Main = () => {
    return (
        <div className={style.main}>
            <Search/>
            <Nav/>
            <Outlet/>
            <StandardImageList/>

        </div>
    )
}


export default Main