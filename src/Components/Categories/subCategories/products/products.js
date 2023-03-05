import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import style from './product.module.css'
import {useState} from "react";
import {useDispatch} from "react-redux";
import X from "../../../Images/X.png";
import Modal from "@mui/material/Modal";


export default function StandardImageList() {
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value,setValue] = useState('')

    const dispatch = useDispatch()

    const onChange = (imageList) => {
        setImages(imageList);
    };
    return (
        <div className={style.productBlock} >

        <ImageList  cols={6} >
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
            <button className={style.imgAdd} onClick={handleOpen}>add image</button>
                <Modal className={style.modal}
                       open={open}
                       onClose={handleClose}
                       aria-labelledby="modal-modal-title"
                       aria-describedby="modal-modal-description"
                >
                    <div className={style.add}>
                        <div className={style.dabavic}>
                            <div>Добавить изделие</div>
                            <div onClick={()=>{
                                handleClose()
                            }}><img className={style.XX} src={X} alt=''/></div>
                        </div>
                        <div className={style.middleBox}>

                            <div className={style.downloadImg}>
                                <div className={style.bigImage}>
                                </div>
                                <div className={style.smallImageBox}>
                                    <div className={style.smallImg}>
                                    </div>
                                    <div className={style.smallImg}>
                                    </div>
                                    <div className={style.smallImg}>
                                </div>
                                    <div className={style.smallImg}>
                                </div>
                                </div>

                            </div>
                                <div className={style.category}>
                                    <p>артикул</p>
                                    <input  className={style.kategorsInput} onChange=
                                        {e=>setValue(e.target.value)}/>
                                    <hr/>

                                </div>
                            <div className={style.category}>
                                    <p>цена </p>
                                    <input className={style.kategorsInput} onChange=
                                        {e=>setValue(e.target.value)}/>
                                    <hr/>

                                </div>


                        </div>

                        <button onClick={()=>handleClose()} className={style.dabavic2}

                        >
                            <p className={style.textP2}
                            >Добавить}</p>
                        </button>
                    </div>
                </Modal>


        </div>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },

    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },


];
