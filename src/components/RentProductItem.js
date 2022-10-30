import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function RentProductItem({ product }) {
    return (
        <Card className=" Rentproduct" 
            hoverable 
            cover={<img className="Rentproduct-pic" alt={product.name} src={product.image} />}
        > 
            <div className="Rentproduct-info">
                <h2 className="Rentproduct-name">
                    {product.name}
                </h2>
                <div className="Rentproduct-info2">
                    <h6
                        className="Rentproduct-price">
                        $ {product.price}
                    </h6>
                    <h6 className="Rentproduct-category">
                        {product.category}
                    </h6>
                </div>
                <Link to={`/product/${product.id}`} >
                    <button class="Rentproduct-btn">
                        租借   
                    </button>
                </Link>
            </div>
        </Card>
    );
}