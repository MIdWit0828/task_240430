import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import ItemList from "./pages/ItemList";
import SearchResult from "./pages/SearchResult";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ItemList/>}/>
                    <Route path="search/:searchValue" element={<SearchResult/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
