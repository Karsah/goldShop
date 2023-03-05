import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import plus from '../Images/Plus.png'
import style from "./addModal.module.css"
import X from '../Images/X.png'
import DonluadeImage from '../DonluadeImage/DonludeImage';
import Jenski from '../Images/Jenski.png'
import Murskoi from '../Images/Murskoi.png'
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addImage, editImage} from "../../features/gold/goldSlice";

const BasicModal = ({open,setOpen,images,setImages,onChange,edit,setEdit,setGender,gender}) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const [value,setValue] = useState('')

    const dispatch = useDispatch()
    if (edit){
        handleOpen()
    }


    return (
    <div>
      <Button className={style.plus} onClick={handleOpen}>+</Button>
      <Modal className={style.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={style.add}>
            <div className={style.dabavic}>
                <div>Добавить Категория</div>
                <div onClick={()=>{
                    handleClose()
                }}><img className={style.XX} src={X} alt=''/></div>
            </div>
            <div className={style.male}>
                <div className={style.gender}>
                  <div><img onClick={()=>{
                      setGender('woman')
                  }} src={Jenski} alt=''/></div>
                  <p className={style.jen}>Женский</p>
                </div>
                <div className={style.gender}>
                  <div><img onClick={()=>{
                      setGender('men')
                  }} src={Murskoi} alt=''/></div>
                  <p className={style.murs}>Мужской</p>
                </div>
            </div>
            <div className={style.kategoria}>
                <p>Категория</p>
              <input value={value} className={style.kategorsInput} onChange=
                  {e=>setValue(e.target.value)}/>
              <hr/>
            </div>
            <div className={style.donluadImg}>
                <div className={style.vector}>

                    <DonluadeImage images={images} onChange={onChange}/>
                </div>
            </div>
            <div className={style.dabavic2}>
              <p className={style.textP2} onClick={()=>{
                  !edit? dispatch(addImage({name:value,gender: gender,url: images[0]['data_url']}))
                      : dispatch(editImage({id:edit,name:value,gender: gender,url: images[0]['data_url']}))
                setOpen(false)
                  setImages([])
                  setValue('')
                  setEdit(null)

              }
              }>{!edit?'Добавить':'edit'}</p>
            </div>
        </div>
      </Modal>
    </div>
  );
}

export default BasicModal
