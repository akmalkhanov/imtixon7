import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import Nav from "../../components/nav/Nav";
import Rating from "../../components/rating/Rating";
import styles from "../../pages/product/Product.module.scss";
import bus from "../../assets/bus.svg"
import bag from "../../assets/bag.svg"
import Spinner from "../../components/spinner/Spinner";
import Footer from "../../components/footer/Footer";

const baseURL = import.meta.env.VITE_BASE_URL;

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0)

  useEffect(() => {
    async function fetchProductById() {
      const response = await fetch(`${baseURL}/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    }

    fetchProductById();
  }, [productId]);

  return (
    <>
        <Nav />
      {product ? (
        <div className="my-24" key={productId.id}>
          <div className="mt-48 ml-32 flex">
            <Link to="/products" className="text-xl font-semibold">Product /</Link>
            <p className="text-xl">{product.description} </p>
          </div>
          <div className="flex">
            <div className="">
                <img
                  className="w-[500px] ml-48 mt-12  transition duration-300 ease-in-out hover:scale-110"
                  src={product.image_url}
                  alt={product.name}
                />
                <div className="flex gap-5 mt-20">
                  <img
                  className="w-[100px] ml-32  mt-12 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  src={product.image_url}
                  alt={product.name}
                />
                  <img
                  className="w-[100px] mt-12 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  src={product.image_url}
                  alt={product.name}
                />
                  <img
                  className="w-[100px] mt-12 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  src={product.image_url}
                  alt={product.name}
                />
                  <img
                  className="w-[100px] mt-12 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  src={product.image_url}
                  alt={product.name}
                />
                    <img
                    className="w-[100px] mt-12 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    src={product.image_url}
                    alt={product.name}
                  />
                </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold ml-32 mt-12">{product.name}</h2>
              <p className="text-xl ml-32 mt-2">{product.description} </p>
              <div className="ml-32"><Rating rating={rating} setRating={setRating} /></div>
              <hr className="border-2 border-dashed border-gray-500 w-[550px] ml-32 mt-2" />
              <h2 className="text-3xl font-bold ml-32 mt-4">${product.price} or 99.99/month</h2>
              <p className="font-semibold ml-32">Suggested payments with 6 month  special financing</p>
              <hr className="border-2 border-dashed border-gray-500 w-[550px] ml-32 mt-8" />
              <p className="text-xl font-bold ml-32 m-4 ">Choose a color</p>
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
                <hr className="border-2 border-dashed border-gray-500 w-[550px] ml-32 mt-8" />
                <div className="flex items-center border-4 border-solid bg-gray-200 rounded-3xl border-secondary w-[135px] mt-[50px] text-xl ml-32 justify-center">
                  <button className="px-2 py-1  hover:bg-gray-300 font-bold  bg-gray-200 rounded-l-3xl">
                    -
                  </button>
                  <p className="mx-4">1</p>
                  <button className="px-2 py-1  hover:bg-gray-300 bg-gray-200 rounded-r-3xl">
                    +
                  </button>
                </div>
                <div className="flex gap-4 mt-8">
                  <button className="flex justify-center items-center rounded-lg font-bold gap-2 text-white bg-secondary ml-32 w-[400px] h-12"><FaCartShopping />Add to Cart</button>
                  <button className="w-12 h-12 border-4 flex items-center justify-center text-2xl rounded-lg "><FaRegHeart /></button>
                </div>
                <div className="ml-32 mt-8 w-[550px] h-[180px] border-[3px] rounded-xl border-gray-500 border-dashed">
                  <div className="w-[550px] h-[90px] border-b-[3px] border-dashed border-gray-500 flex">
                    <div><img className="pt-8 pl-8" src={bus} alt="" /></div>
                    <div className="ml-6">
                      <h4 className="text-xl font-bold mt-4">Free delivery</h4>
                      <p className="border-b-2 border-black">Enter your Postal Code for Delivery Availability</p>
                    </div>
                  </div>
                  <div className="w-[550px] h-[90px] flex">
                    <div><img className="pt-8 pl-8" src={bag} alt="" /></div>
                    <div className="ml-6">
                      <h4 className="text-xl font-bold mt-4">Return Delivery</h4>
                      <p className="border-b-2 border-black">Free delivery 30 Days return</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
      <Footer />
    </>
  );
};

export default Product;
