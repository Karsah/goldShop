import style from './Search.module.css'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <div className={style.whitBlock}>
            <div className={style.searchBlok}>
                <div className={style.inputBlock}>
                    <input className={style.searchInput} placeholder='Поиск'/>
                    <div className={style.searchIcon}>
                           <SearchIcon sx={{color:"white" }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Search