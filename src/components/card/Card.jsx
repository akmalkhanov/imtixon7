import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import styles from "./Card.module.scss";

const Card = ({ product, cart, setCart }) => {
  return (
    <div>
      <img className="w-48 h-48 max-w-xs transition duration-300 ease-in-out hover:scale-110 mt-20  " src={product.image_url} alt={product.product_name} />
      <h4>
        <Link className="text-2xl font-bold" to={`/products/${product.id}`}>{product.name}</Link>
      </h4>
      <p className="pt-2 w-48 font-semibold">{product.description}</p>

      <div className={styles.colors}>
        {product.color_options.map((color, index) => (
          <div
            key={index}
            style={{
              background: color,
            }}
            className={styles.color}
          />
        ))}
      </div>

      <strong className="mt-8">{product.price}</strong>
      <div>
        <Button onClick={() => setCart([...cart, product])}>
          <FaCartShopping />
          <span style={{ marginLeft: "0.8em" }}>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
