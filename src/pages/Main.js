import {useEffect} from "react";
import {getGameList} from "../api/GameInfo";

function Main() {
    useEffect(() => {
        getGameList();
    }, []);
    return (
        <div className="content-row">
            <h1></h1>
        </div>
    );
}
export default Main;