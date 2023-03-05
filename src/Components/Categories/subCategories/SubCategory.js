import style from '../Categors.module.css'
import {useEffect, useState} from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import * as React from "react";
import X from '../../Images/X.png'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {addSubCategories} from "../../../features/gold/goldSlice";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const SubCategory = () => {
    const [open,setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value,setValue] = useState('')
    const {category} = useParams()
    const dispatch = useDispatch()
    const subCategory = useSelector(state => state.image.subCategories)
    const [val, setVal] = React.useState(0);

    const handleChange = (event, newValue) => {
        setVal(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <div>
            <div className={style.bigBox}>
                <div className={style.box}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={val} onChange={handleChange} aria-label="basic tabs example">
                                {

                                    subCategory.filter(value => value.category === category).map(({subId,name})=>{
                                        return <Tab key={subId} label={name} {...a11yProps(0)} />
                                    })
                                }


                            </Tabs>
                        </Box>
                        <TabPanel value={val} index={0}>

                        </TabPanel>

                    </Box>

                </div>
                <div className={style.plusD}>
                    <Button className={style.plus} onClick={handleOpen}>+</Button>
                    <Modal className={style.modal}
                           open={open}
                           onClose={handleClose}
                           aria-labelledby="modal-modal-title"
                           aria-describedby="modal-modal-description"
                    >
                        <div className={style.add}>
                            <div className={style.dabavic}>
                                <div>{category}:Добавить Подкатегория</div>
                                <div onClick={()=>{
                                    handleClose()
                                }}><img className={style.XX} src={X} alt=''/></div>
                            </div>

                            <div className={style.category}>
                                <p>Подкатегория</p>
                                <input value={value} className={style.categoryInput} onChange=
                                    {e=>setValue(e.target.value)}/>
                                <hr/>
                            </div>
                            <div className={style.footerModal}>
                                <button className={style.addButton} onClick={()=>{
                                    dispatch(addSubCategories({name:value,category:category}))
                                    handleClose()
                                    setValue('')
                                }}
                                >Добавить</button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
export default SubCategory

