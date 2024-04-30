import {useEffect, useState} from "react";
import {getGameList} from "../api/GameInfo";
import Item from "../component/Item";

function ItemList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        getGameList().then(data => setList(data));
    }, []);
    return (
        <>
            <div className="content-row">
                {list && list.map(item => <Item key={item.rateno} item={item}/>)}
            </div>
            <button>다음패이지</button>
        </>

    );
}
export default ItemList;