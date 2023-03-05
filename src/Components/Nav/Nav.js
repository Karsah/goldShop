import style from './Nav.module.css'
import woman from '../Images/Woman.png'
import man from '../Images/Man.png'
import { useState } from 'react'
import BasicModal from "../AddModal/AddModal"
import {useDispatch, useSelector} from "react-redux";
import LongMenu from "../try/crud";
import {Link} from "react-router-dom";
import {addSubCategories, filterSubCategories} from "../../features/gold/goldSlice";
import {logDOM} from "@testing-library/react";


const Nav = () => {
    const [open, setOpen] =useState(false);
    const [edit,setEdit] = useState(null);
    const [isShown, setIsShown] = useState(false);
     const [images, setImages] = useState([]);
    const [gender,setGender] = useState('')
     const dispatch = useDispatch()
    const subCategory = useSelector(state => state.image.subCategories)

    const onChange = (imageList) => {
        setImages(imageList);
      };
    const img = useSelector(state => state.image.categories)
    console.log(img)

    return (
        <div className={style.navBlock}>
            <div className={style.leftBox}>


                        <div className={style.leftBox1}>

                            <img onClick={()=>{
                                setGender('woman')
                            }} className={style.woman} src={woman} alt=''/>
                        </div>
                        <div className={style.leftBox2}>
                            <img onClick={()=>{
                                setGender('men')
                            }} src={man} alt=''/>
                        </div>

                </div>
                <div className={style.midlBox}>
                        {
                        img.filter(val=>val.gender === gender).map(({name,id,url,})=>{
                              return(
                                  <Link key={id} to={`/${name}`}>
                                    <div className={style.addBoxImage} key={id}
                                         onMouseEnter={() => setIsShown(true)}
                                         onMouseLeave={() => setIsShown(false)}
                                    >{
                                        isShown && (  <div className={style.edit}>
                                            <LongMenu id={id} url={url} name={name} setEdit={setEdit}/>
                                        </div>
                                        )
                                    }
                                        <div className={style.imageDiv}>
                                            <img className={style.navImage} src={url} alt=''/>
                                        </div>
                                        <div className={style.textValue}>{name}</div>
                                    </div>
                                 </Link>
                                )
                            })
                        }

                </div>
                <div className={style.rightBox}>
                    <BasicModal edit={edit} setEdit={setEdit} setOpen={setOpen}
                                open={open} setImages={setImages} images={images}
                                onChange={onChange} setGender={setGender} gender={gender}/>
                </div>

        </div>
    )
}


export default Nav