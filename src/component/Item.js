function Item({item}) {
    return (
        <div className="item">
            <h3>{item.gametitle}</h3>
            <h5>({item.entname})</h5>
            <h4>{item.givenrate}</h4>
            <h4>{item.genre}</h4>
            <p>{item.summary}</p>
        </div>
    );
}
export default Item;