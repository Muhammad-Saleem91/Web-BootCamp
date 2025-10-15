import './Product.css';
const ProductComponent = (props) =>{
    return(
       <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-desc">{props.description}</p>
        <p className="card-price">${props.price.toFixed(2)}</p>
        <button className="card-btn">Add to Cart</button>
      </div>
    </div>  
    );
}

export default ProductComponent;