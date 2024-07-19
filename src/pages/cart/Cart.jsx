import React, { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const Cart = ({ products }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = products.reduce(
        (dollars, product) => dollars + product.price,
        0
      );
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [products]);

  return (
    <>
      <div className=" flex container w-[1200px]">
        <Nav />
      <div className="">
        <button
          className="flex items-center gap-2 ml-32 mt-32  text-xl font-bold "
          onClick={() => navigate(-1)}
        >
          <FaArrowLeftLong />
          Back to Shopping
        </button>
        <h2 className="text-3xl font-bold ml-32 mt-12">
          SHOPPING CART
        </h2>
        <div className="border-2  w-[800px]  border-gray-500 border-b-0 border-l-0 border-t-0 pr-[30px]">
          <div className="flex border-2 border-dashed border-gray-500 border-r-0 border-l-0 p-4 ml-24 text-xl mt-8">
            <h2 className="mr-[320px] font-bold">Product</h2>
            <h3 className="mr-[120px] font-bold">Quantity</h3>
            <h3 className="font-bold">Price</h3>
          </div>

          <ul>
            {products.map((product) => (
              <div
                className="flex items-center mb-4 border-2 ml-24 border-dashed border-gray-500 border-r-0 border-l-0 border-t-0 p-4"
                key={product.id}
              >
                <FaXmark className="text-3xl mt-[-150px] cursor-pointer" />

                <img
                  className="w-[155px] h-auto mr-[36px]"
                  src={product.image_url}
                  alt={product.name}
                />

                <div className="flex-grow">
                  <p className="font-bold text-xl">{product.name}</p>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="mt-[20px] font-semibold">Black</p>
                  <p className="text-green-500">In stock</p>
                </div>

                <div className="flex items-center border border-solid bg-gray-300 rounded-3xl border-gray-300 w-[135px] mt-[-100px] text-xl ml-4 justify-center">
                  <button className="px-2 py-1  hover:bg-gray-300 font-bold  bg-gray-300 rounded-l-3xl">
                    -
                  </button>
                  <p className="mx-4">1</p>
                  <button className="px-2 py-1  hover:bg-gray-300 bg-gray-300 rounded-r-3xl">
                    +
                  </button>
                </div>
                <h2 className="font-bold text-xl ml-4 mt-[-100px]">${product.price}</h2>
              </div>
            ))}
          </ul>
        </div>
        <p className="ml-32 text-xl font-semibold mt-32">Have a coupon/promotional code? Enter your code</p>
        <div className="ml-32 mt-12">
          <input className="w-56 outline-none border-b-2 h-12" type="text" placeholder="Coupon Code" />
          <button className="px-8 py-4 rounded-xl text-green-600 font-bold ml-8 bg-white border-2 border-green-600">APPLY</button>
        </div>
      </div>
      <div className=" ml-12  mt-[265px]">
        <h2 className="text-3xl w-[400px] font-bold border-2 border-dashed border-gray-500 border-r-0 border-l-0 border-t-0 p-4">
          Cart Totals
        </h2>
        <div className="flex justify-between mt-[37px] border-2 border-dashed border-gray-500 border-r-0 border-l-0 border-t-0">
          <div>
            <p>Shipping (3-5 Business Days)</p>
            <p className="mt-[21px] mb-[21px]">
              TAX (estimated for the United States (US))
            </p>
            <p className="mb-[25px]">Subtotal</p>
          </div>
          <div className="text-right">
            <h2 className="font-bold">Free</h2>
            <p className="font-bold mb-[21px] mt-[21px]">$0</p>
            <p className="font-bold">${total.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex justify-between mt-[33px] mb-[68px]">
          <h2 className="font-bold">Total</h2>
          <p className="font-bold">${total.toFixed(2)}</p>
        </div>
        <button className="bg-green-600 text-white font-bold border border-solid rounded-[10px] w-full h-[54px]">
          PROCEED TO CHECKOUT
        </button>
        <button
          className="flex items-center gap-2 ml-24 my-12  text-xl font-bold "
          onClick={() => navigate(-1)}
        >
          <FaArrowLeftLong />
          Back to Shopping
          </button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Cart;
