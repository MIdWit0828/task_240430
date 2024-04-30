import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findGameByTitle} from "../api/GameInfo";
import Item from "../component/Item";

function SearchResult() {
    const {searchValue} = useParams();
    const [list, setList] = useState([]);
    useEffect(() => {
        findGameByTitle(searchValue).then(data => setList(data));
    }, []);
    return (
        <div className="content-row">
            {list && list.map(item => <Item key={item.rateno} item={item}/>)}
        </div>
    );
}
export default SearchResult;