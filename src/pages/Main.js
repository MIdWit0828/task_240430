import {createContext, useContext, useEffect, useState} from "react";
import {getGameList} from "../api/GameInfo";
import {Link, useNavigate} from "react-router-dom";

function Main({searchValue, setSearchValue}) {
    const navigate = useNavigate();

    const handleSearchClick = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search/${searchValue}`);
    };
    return (
        <div className="search">
            <input type="text" name="searchValue" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <button onClick={handleSearchClick}>이름으로 검색</button>
        </div>
    );
}
export default Main;